import React, { useState, useEffect } from 'react';
import { RoutePath, CertificateRecord } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { CertificateLedgerModal } from './components/CertificateLedgerModal';
import { DiscoveryBookingModal } from './components/DiscoveryBookingModal';

import { HomePage } from './pages/HomePage';
import { VideographyPage } from './pages/VideographyPage';
import { ProductPhotographyPage } from './pages/ProductPhotographyPage';
import { HotelVideosPage } from './pages/HotelVideosPage';
import { UgcAdsPage } from './pages/UgcAdsPage';
import { PromotionalAdsPage } from './pages/PromotionalAdsPage';
import { CompliancePlatformPage } from './pages/CompliancePlatformPage';
import { InspectFoodPage } from './pages/InspectFoodPage';
import { IsoCertificationPage } from './pages/IsoCertificationPage';
import { VerifyCertificatePage } from './pages/VerifyCertificatePage';
import { CustomChocolatesPage } from './pages/CustomChocolatesPage';
import { ChocolateDesignStudioPage } from './pages/ChocolateDesignStudioPage';
import { CorporateEventsPage } from './pages/CorporateEventsPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { WorkPage } from './pages/WorkPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>('/');

  // Modal states
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    title: string;
    subtitle: string;
  }>({
    isOpen: false,
    title: '',
    subtitle: '',
  });

  const [certLedgerModal, setCertLedgerModal] = useState<{
    isOpen: boolean;
    cert: CertificateRecord | null;
  }>({
    isOpen: false,
    cert: null,
  });

  const [discoveryModal, setDiscoveryModal] = useState<{
    isOpen: boolean;
    vertical: string;
  }>({
    isOpen: false,
    vertical: 'Creative Production (Videography, Product Photos, Hotel Reels, UGC Ads)',
  });

  // Sync route on popstate or URL hash
  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname as RoutePath;
      const validPaths: RoutePath[] = [
        '/',
        '/services/videography',
        '/services/product-photography',
        '/services/hotel-short-videos',
        '/services/ugc-ads',
        '/services/promotional-advertising',
        '/solutions/compliance-platform',
        '/solutions/food-inspection-software',
        '/solutions/iso-certification',
        '/verify-certificate',
        '/gifting/custom-corporate-chocolates',
        '/gifting/design-studio',
        '/gifting/corporate-events',
        '/work',
        '/pricing',
        '/about',
        '/contact',
      ];
      if (validPaths.includes(path)) {
        setCurrentPath(path);
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    return () => window.removeEventListener('popstate', handleLocation);
  }, []);

  const navigate = (path: RoutePath) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openVideo = (title: string, subtitle: string) => {
    setVideoModal({ isOpen: true, title, subtitle });
  };

  const openCertLedger = (cert: CertificateRecord) => {
    setCertLedgerModal({ isOpen: true, cert });
  };

  const openBookDemo = (vertical?: string) => {
    setDiscoveryModal({
      isOpen: true,
      vertical: vertical || 'Creative Production (Videography, Product Photos, Hotel Reels, UGC Ads)',
    });
  };

  return (
    <div className="min-h-screen bg-[#0f131d] text-[#dfe2f1] flex flex-col font-sans selection:bg-[#2563eb] selection:text-white">
      {/* Top Navbar with 3 Mega-Menus */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenVideoModal={openVideo}
        onOpenBookDemo={() => openBookDemo()}
      />

      {/* Main Screen Router */}
      <main className="flex-1 w-full pt-20">
        {currentPath === '/' && (
          <HomePage
            onNavigate={navigate}
            onOpenVideoModal={openVideo}
            onOpenCertLedger={openCertLedger}
            onOpenBookDemo={openBookDemo}
          />
        )}

        {/* Group A: Creative & Media */}
        {currentPath === '/services/videography' && (
          <VideographyPage
            onNavigate={navigate}
            onOpenVideoModal={openVideo}
            onOpenBookDemo={openBookDemo}
          />
        )}
        {currentPath === '/services/product-photography' && (
          <ProductPhotographyPage
            onNavigate={navigate}
            onOpenBookDemo={openBookDemo}
          />
        )}
        {currentPath === '/services/hotel-short-videos' && (
          <HotelVideosPage
            onNavigate={navigate}
            onOpenVideoModal={openVideo}
            onOpenBookDemo={openBookDemo}
          />
        )}
        {currentPath === '/services/ugc-ads' && (
          <UgcAdsPage
            onNavigate={navigate}
            onOpenBookDemo={openBookDemo}
          />
        )}
        {currentPath === '/services/promotional-advertising' && (
          <PromotionalAdsPage
            onNavigate={navigate}
            onOpenBookDemo={openBookDemo}
          />
        )}

        {/* Group B: Compliance & Certification */}
        {currentPath === '/solutions/compliance-platform' && (
          <CompliancePlatformPage
            onNavigate={navigate}
            onOpenBookDemo={openBookDemo}
          />
        )}
        {currentPath === '/solutions/food-inspection-software' && (
          <InspectFoodPage
            onNavigate={navigate}
            onOpenBookDemo={openBookDemo}
          />
        )}
        {currentPath === '/solutions/iso-certification' && (
          <IsoCertificationPage
            onNavigate={navigate}
            onOpenBookDemo={openBookDemo}
          />
        )}
        {currentPath === '/verify-certificate' && (
          <VerifyCertificatePage
            onNavigate={navigate}
            onOpenCertLedger={openCertLedger}
          />
        )}

        {/* Group C: Bespoke Corporate Gifting */}
        {currentPath === '/gifting/custom-corporate-chocolates' && (
          <CustomChocolatesPage
            onNavigate={navigate}
            onOpenBookDemo={openBookDemo}
          />
        )}
        {currentPath === '/gifting/design-studio' && (
          <ChocolateDesignStudioPage
            onNavigate={navigate}
            onOpenBookDemo={openBookDemo}
          />
        )}
        {currentPath === '/gifting/corporate-events' && (
          <CorporateEventsPage
            onNavigate={navigate}
            onOpenBookDemo={openBookDemo}
          />
        )}

        {/* Core Company Pages */}
        {currentPath === '/work' && (
          <WorkPage
            onNavigate={navigate}
            onOpenVideoModal={openVideo}
          />
        )}
        {currentPath === '/pricing' && (
          <PricingPage
            onNavigate={navigate}
            onOpenBookDemo={openBookDemo}
          />
        )}
        {currentPath === '/about' && (
          <AboutPage
            onNavigate={navigate}
            onOpenBookDemo={openBookDemo}
          />
        )}
        {currentPath === '/contact' && (
          <ContactPage
            onNavigate={navigate}
            onOpenBookDemo={openBookDemo}
          />
        )}
      </main>

      {/* Global Modals */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ ...videoModal, isOpen: false })}
        title={videoModal.title}
        subtitle={videoModal.subtitle}
      />

      {certLedgerModal.cert && (
        <CertificateLedgerModal
          cert={certLedgerModal.cert}
          onClose={() => setCertLedgerModal({ isOpen: false, cert: null })}
        />
      )}

      <DiscoveryBookingModal
        isOpen={discoveryModal.isOpen}
        onClose={() => setDiscoveryModal({ ...discoveryModal, isOpen: false })}
        defaultVertical={discoveryModal.vertical}
      />

      {/* Corporate Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
