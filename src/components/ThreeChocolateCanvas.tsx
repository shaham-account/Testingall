import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ChocolatePieceConfig, CocoaProfile, FoilOption } from '../types';

interface ThreeChocolateCanvasProps {
  piece: ChocolatePieceConfig;
  cocoa: CocoaProfile;
  foil: FoilOption;
  logoText: string;
  customLogoUrl?: string;
  embossDepth: number; // in mm (e.g. 0.8, 1.2, 1.8)
  className?: string;
}

export const ThreeChocolateCanvas: React.FC<ThreeChocolateCanvasProps> = ({
  piece,
  cocoa,
  foil,
  logoText,
  customLogoUrl,
  embossDepth,
  className = 'h-72 w-full',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    mesh: THREE.Mesh;
    foilMesh?: THREE.Mesh;
    reqId: number;
  } | null>(null);

  // Helper to generate bump/normal map with logo text
  const createLogoTexture = (text: string, customImg?: string): THREE.CanvasTexture => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    // Background neutral gray (no displacement)
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 1024, 1024);

    // Subtle chocolate segment borders
    ctx.strokeStyle = '#404040';
    ctx.lineWidth = 14;
    ctx.strokeRect(60, 60, 904, 904);

    ctx.strokeStyle = '#a0a0a0';
    ctx.lineWidth = 6;
    ctx.strokeRect(74, 74, 876, 876);

    // Inner embossed area
    ctx.fillStyle = '#505050';
    ctx.fillRect(90, 90, 844, 844);

    // Draw Vector Logo or Text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Outer brand emblem circle
    ctx.beginPath();
    ctx.arc(512, 512, 280, 0, Math.PI * 2);
    ctx.strokeStyle = '#f0f0f0';
    ctx.lineWidth = 18;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(512, 512, 250, 0, Math.PI * 2);
    ctx.strokeStyle = '#202020';
    ctx.lineWidth = 10;
    ctx.stroke();

    // Geometric brand crest inside
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(512, 320);
    ctx.lineTo(600, 470);
    ctx.lineTo(424, 470);
    ctx.closePath();
    ctx.fill();

    // Invert triangle
    ctx.fillStyle = '#202020';
    ctx.beginPath();
    ctx.moveTo(512, 450);
    ctx.lineTo(460, 360);
    ctx.lineTo(564, 360);
    ctx.closePath();
    ctx.fill();

    // Monogram / Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 56px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(text.toUpperCase() || 'ALLBIZDIGITAL', 512, 570);

    ctx.fillStyle = '#b0b0b0';
    ctx.font = '600 24px "Inter", sans-serif';
    ctx.fillText('BELGIAN COUVERTURE • 100% IN-HOUSE', 512, 630);

    // If custom image passed, draw icon outline
    if (customImg) {
      // Custom logo indicator
      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      ctx.arc(512, 512, 40, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  };

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 300;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 3.2, 5.2);
    camera.lookAt(0, 0, 0);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.4);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x90b0ff, 1.6);
    rimLight.position.set(-5, 3, -4);
    scene.add(rimLight);

    const bottomBounce = new THREE.DirectionalLight(0x553311, 0.6);
    bottomBounce.position.set(0, -5, 2);
    scene.add(bottomBounce);

    // 5. Geometry calculation based on piece shape
    let geoWidth = 2.4;
    let geoLength = 2.4;
    let geoHeight = 0.42;

    if (piece.id === 'bite') {
      geoWidth = 2.2;
      geoLength = 2.2;
      geoHeight = 0.4;
    } else if (piece.id === 'square') {
      geoWidth = 2.6;
      geoLength = 2.6;
      geoHeight = 0.45;
    } else if (piece.id === 'slim') {
      geoWidth = 3.4;
      geoLength = 1.9;
      geoHeight = 0.38;
    } else if (piece.id === 'bar') {
      geoWidth = 4.2;
      geoLength = 2.4;
      geoHeight = 0.52;
    }

    const geometry = new THREE.BoxGeometry(geoWidth, geoHeight, geoLength, 32, 8, 32);

    // Bevel edges slightly by rounding vertices
    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (y > geoHeight * 0.4) {
        // taper top edge slightly for molded look
        pos.setX(i, pos.getX(i) * 0.96);
        pos.setZ(i, pos.getZ(i) * 0.96);
      }
    }
    geometry.computeVertexNormals();

    // 6. Material with Bump / Normal map
    const logoTex = createLogoTexture(logoText, customLogoUrl);

    const chocolateColor = new THREE.Color(cocoa.colorHex);
    const specularColor = new THREE.Color(cocoa.specularHex);

    const material = new THREE.MeshStandardMaterial({
      color: chocolateColor,
      roughness: cocoa.roughness,
      metalness: 0.08,
      bumpMap: logoTex,
      bumpScale: 0.04 * (embossDepth / 1.0),
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = 0.3;
    mesh.rotation.y = -0.5;
    scene.add(mesh);

    // 7. Foil wrap mesh if foil selected
    let foilMesh: THREE.Mesh | undefined;
    if (foil.id !== 'none') {
      const foilGeo = new THREE.BoxGeometry(
        geoWidth * 0.52,
        geoHeight * 1.04,
        geoLength * 1.04
      );
      const foilMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(foil.colorHex),
        metalness: 0.92,
        roughness: 0.22,
      });
      foilMesh = new THREE.Mesh(foilGeo, foilMat);
      foilMesh.position.x = -geoWidth * 0.25;
      mesh.add(foilMesh);
    }

    // Shadow catcher plane underneath
    const shadowGeo = new THREE.PlaneGeometry(10, 10);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.35 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.2;
    scene.add(shadowPlane);

    // 8. Animation loop
    let reqId = 0;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (isRotating && mesh) {
        mesh.rotation.y += 0.007;
      }
      renderer.render(scene, camera);
    };
    animate();

    sceneRef.current = { scene, camera, renderer, mesh, foilMesh, reqId };

    // Mouse drag interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !mesh) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      mesh.rotation.y += deltaX * 0.01;
      mesh.rotation.x += deltaY * 0.01;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize handler
    const handleResize = () => {
      if (!container || !sceneRef.current) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [piece.id, cocoa.id, foil.id, logoText, customLogoUrl, embossDepth, isRotating]);

  const handleZoom = (delta: number) => {
    if (!sceneRef.current) return;
    const newZoom = Math.min(Math.max(zoomLevel + delta, 0.7), 1.8);
    setZoomLevel(newZoom);
    sceneRef.current.camera.zoom = newZoom;
    sceneRef.current.camera.updateProjectionMatrix();
  };

  const handleReset = () => {
    if (!sceneRef.current) return;
    sceneRef.current.mesh.rotation.set(0.3, -0.5, 0);
    sceneRef.current.camera.zoom = 1;
    sceneRef.current.camera.updateProjectionMatrix();
    setZoomLevel(1);
  };

  return (
    <div className={`relative overflow-hidden rounded-xl bg-[#0a0e18] flex items-center justify-center select-none ${className}`}>
      {/* Three.js canvas container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating 3D Navigation Controls */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#171b26]/90 backdrop-blur-md p-1 rounded-lg border border-[#434655]/40 z-20">
        <button
          type="button"
          onClick={() => setIsRotating(!isRotating)}
          title={isRotating ? 'Pause Rotation' : 'Auto Rotate'}
          className={`p-1.5 rounded transition-colors ${
            isRotating ? 'text-[#4edea3] bg-[#007d55]/30' : 'text-[#8d90a0] hover:text-[#dfe2f1]'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">
            {isRotating ? 'motion_photos_on' : 'motion_photos_paused'}
          </span>
        </button>
        <button
          type="button"
          onClick={() => handleZoom(0.15)}
          title="Zoom In"
          className="p-1.5 rounded text-[#8d90a0] hover:text-[#dfe2f1] hover:bg-[#262a35] transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">zoom_in</span>
        </button>
        <button
          type="button"
          onClick={() => handleZoom(-0.15)}
          title="Zoom Out"
          className="p-1.5 rounded text-[#8d90a0] hover:text-[#dfe2f1] hover:bg-[#262a35] transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">zoom_out</span>
        </button>
        <button
          type="button"
          onClick={handleReset}
          title="Reset View"
          className="p-1.5 rounded text-[#8d90a0] hover:text-[#dfe2f1] hover:bg-[#262a35] transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">restart_alt</span>
        </button>
      </div>

      {/* Interactive Helper Hint */}
      <div className="absolute bottom-3 left-3 bg-[#171b26]/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-[#8d90a0] border border-[#434655]/30 pointer-events-none flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[14px] text-[#ffb77d]">touch_app</span>
        <span>Click & drag to rotate 3D mold in real time</span>
      </div>
    </div>
  );
};
