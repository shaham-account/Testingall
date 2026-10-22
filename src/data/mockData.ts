import { CertificateRecord, ChocolatePieceConfig, CocoaProfile, FoilOption, CaseStudyItem } from '../types';

export const ASSET_IMAGES = {
  cinemaSet: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2zOmzjJn7NOdJYn9fupAYfg4RM7dlvIcjowMBmjhwfutiXWAwUge-zrkFmKTEUAg1Sa8v93wYP6R5F-GGXOXZqtwhfRtprXOIOh8dOfFHikLnVnx6-FIuIsOaDqgbu5HQyrJ4A_CGvrPnpIwEXN919nL7rYafoveSN7FK8oZzCE9-3KcDbngUObZgEOZ-S-EAVl9veKg7pE-5aVA-kfqnF7EFPk0XXfK2GINm97W6Khb-pnQQtZDnqw',
  cameraRigWaterSplash: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbwOoiMVMbTvBfPrubzASV5vxbqD1-3bnZzsk8-Pso5W3SJARiUD_GGrIFAC91M-VqYV3gIDPIVRNHmmrgi3-YS8cvuourfxbc2iwk-pKwy3Pw5mZWQauYmg2-0rZIzfh_8cu2l026EaqBllMTrMFr7kYbEJIy5JnsHzRT-ae0bD1LuaY6c0WeC5j2gXoV4VrkzT9ijPGsW7h6UnkqSJcxQt_a6UxoaMj4luwdKoWVPzQlfkDDzF9ZBQ',
  chocolateBarSlate: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgDiU-VS3XQ5xLPYFfWkTMFTuaTDW_83TShSC2fBw-gzbx7udXoLpcdF5W8HbsqWVytSsuT3bHdIITy3SVFius1UW8mxt5UiVIa8uAVLiHOFzmTtIR-UdHUCenfSW3esTgl3A4J9Pcv7df4OMYQ1az_GPVDB8Ghs6jy47VEn5LU3tIMwxJO3_dlT5ZarNdKO2E4OjSmLonCwlY4JVMKmVyR44VllLA2PmDj-ky1UgYjZZs3v1yVl0zyg',
  chocolateMedallionEmboss: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE5XBxUTNd7ATpOXJ23nPn07XUXoGrYuS9_VE8_4JNqoirU5365-CafFDeyS5gykurk-6x2rRqWdBvbW-_HaGopa0FDtSqGnJOgHUqnuS1jtB-Z9piWxq2YzqlzPl8fogb0LNc0NFQd5zSbcuOrmrWT3LRVDk0Hd6YxHfg7_gitO1FGDx_diJYl9_W-tjQLI-_7WxncQmV98wNTSpgxBM3y3sza18VUnZh62TouF8oi445AMcqzsIHBg',
  luxuryHotelSuite: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  resortPoolDrone: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
  productStudioWhite: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
  ugcCreatorPhone: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
  cleanRoomFactory: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  foodSafetyInspection: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=1200&q=80',
};

export const CERTIFICATE_DATABASE: CertificateRecord[] = [
  {
    registryNumber: 'VG-9001-2024-8841',
    companyName: 'Apex Precision Dynamics LLC',
    standard: 'ISO 9001:2015 & ISO 27001:2022',
    status: 'VALID',
    scope: 'Design, manufacturing of precision aerospace actuators, and cloud-integrated telemetry telemetry systems.',
    issueDate: '2024-11-14',
    expiryDate: '2027-11-13',
    accreditationBody: 'International Accreditation Registrar (IAR-112 USA)',
    accreditationNumber: 'IAR-112-US-8841',
    auditorId: 'AUD-USA-7712 (IAF MD 4 Certified)',
    sha256Hash: '0x89F4A7C12E5B3D4490192837EFA64791B4C932D81E9354F6B29AC77284610992',
    qrPayload: 'https://allbizdigital.com/verify?reg=VG-9001-2024-8841',
    auditMethod: 'IAF MD 4 Remote',
  },
  {
    registryNumber: 'VG-27001-2024-9102',
    companyName: 'AeroTech Cloud Intelligence Inc.',
    standard: 'ISO/IEC 27001:2022 (ISMS)',
    status: 'VALID',
    scope: 'Enterprise Software-as-a-Service, distributed cloud infrastructure, customer data management, and SOC 2 Type II trust operations.',
    issueDate: '2024-08-01',
    expiryDate: '2027-07-31',
    accreditationBody: 'International Accreditation Registrar (IAR-112 USA)',
    accreditationNumber: 'IAR-112-US-9102',
    auditorId: 'AUD-USA-4109 (Lead Cyber Assessor)',
    sha256Hash: '0x5C29EF13D8947A110B6F438D92182046C1A48892EF03914872BB198457CD1849',
    qrPayload: 'https://allbizdigital.com/verify?reg=VG-27001-2024-9102',
    auditMethod: 'IAF MD 4 Remote',
  },
  {
    registryNumber: 'VG-22000-2023-4410',
    companyName: 'Bespoke Couverture Confections LLC',
    standard: 'ISO 22000:2018 & HACCP FSMA',
    status: 'VALID',
    scope: 'Domestic clean-room production of luxury Belgian couverture chocolate products, molded corporate confections, and Halal-certified packaging.',
    issueDate: '2023-10-18',
    expiryDate: '2026-10-17',
    accreditationBody: 'International Accreditation Registrar (IAR-112 USA)',
    accreditationNumber: 'IAR-112-US-4410',
    auditorId: 'AUD-FSMA-1102 (Food Safety Specialist)',
    sha256Hash: '0x33A9D7100B9C8E728109F40847BB90192C3D7728198274619AC93847B0192847',
    qrPayload: 'https://allbizdigital.com/verify?reg=VG-22000-2023-4410',
    auditMethod: 'On-Site Dual Stage',
  },
  {
    registryNumber: 'VG-14001-2024-7729',
    companyName: 'Lumiere International Hospitality Group',
    standard: 'ISO 14001:2015 & ISO 45001:2018',
    status: 'VALID',
    scope: 'Environmental management, energy optimization, and occupational health and safety across 24 resort and hotel properties in North America.',
    issueDate: '2024-03-22',
    expiryDate: '2027-03-21',
    accreditationBody: 'International Accreditation Registrar (IAR-112 USA)',
    accreditationNumber: 'IAR-112-US-7729',
    auditorId: 'AUD-ENV-6623 (EHS Senior Auditor)',
    sha256Hash: '0x7B1948AC6D2084729119F0487C0912D836471829AE5B4C2819076D38914B7720',
    qrPayload: 'https://allbizdigital.com/verify?reg=VG-14001-2024-7729',
    auditMethod: 'IAF MD 4 Remote',
  },
];

export const CHOCOLATE_PIECES: ChocolatePieceConfig[] = [
  {
    id: 'bite',
    name: 'Crafty Bite',
    dimensions: '40 × 40 mm',
    weight: '8–9g',
    moq: 100,
    basePrice: 1.25,
    recommendedFor: 'Trade show bulk giveaways & conference room gifts',
  },
  {
    id: 'square',
    name: 'Crafty Square',
    dimensions: '50 × 50 mm',
    weight: '12–13g',
    moq: 75,
    basePrice: 1.85,
    recommendedFor: 'Hotel turndown amenities & client thank-you tokens',
  },
  {
    id: 'slim',
    name: 'Crafty Slim',
    dimensions: '75 × 35 mm',
    weight: '16–18g',
    moq: 50,
    basePrice: 2.65,
    recommendedFor: 'VIP dinner place settings & premium gift basket inserts',
  },
  {
    id: 'bar',
    name: 'Crafty Bar',
    dimensions: '120 × 60 mm',
    weight: '50–55g',
    moq: 25,
    basePrice: 6.95,
    recommendedFor: 'Executive luxury hampers & milestone deal closures',
  },
];

export const COCOA_PROFILES: CocoaProfile[] = [
  {
    id: 'dark',
    name: 'Dark Belgian (54.5% Cocoa)',
    percentage: '54.5%',
    flavor: 'Deep, rich, and rounded cocoa notes with subtle dark fruit aromatics.',
    colorHex: '#261713',
    specularHex: '#422a22',
    roughness: 0.38,
  },
  {
    id: 'milk',
    name: 'Creamy Milk (33.6% Cocoa)',
    percentage: '33.6%',
    flavor: 'Silky caramel notes with wholesome European dairy richness.',
    colorHex: '#5a3821',
    specularHex: '#7f5235',
    roughness: 0.42,
  },
  {
    id: 'white',
    name: 'Velvet White (28% Cocoa Butter)',
    percentage: '28.0%',
    flavor: 'Pure single-origin cocoa butter infused with natural Bourbon vanilla.',
    colorHex: '#e1d4b8',
    specularHex: '#f2eae0',
    roughness: 0.45,
  },
];

export const FOIL_OPTIONS: FoilOption[] = [
  { id: 'gold', name: 'Imperial Gold Foil', colorHex: '#D4AF37' },
  { id: 'silver', name: 'Platinum Silver Foil', colorHex: '#C0C0C0' },
  { id: 'rose-gold', name: 'Rose Gold Foil', colorHex: '#B76E79' },
  { id: 'black-matte', name: 'Obsidian Matte Wrap', colorHex: '#1E232F' },
];

export const COMPLIANCE_MODULES_21 = {
  govern: [
    { name: 'Policy Studio', desc: 'Centralized clause-to-policy mapping and version-controlled document lifecycle.' },
    { name: 'Controlled Documents', desc: 'SHA-256 signed workflows with automated distribution and sign-off tracking.' },
    { name: 'Roles & Responsibilities', desc: 'RACI matrix assignments mapped to ISO standard clause ownership.' },
    { name: 'Approval Workflows', desc: 'Multi-stage gatekeeper routing with 21 CFR Part 11 compliant digital signatures.' },
    { name: 'Legal & Regulatory Registers', desc: 'Automated compliance obligation horizon scanning and statutory checklists.' },
  ],
  manage: [
    { name: 'Risks & Opportunities (ISO 31000)', desc: 'Dynamic heatmaps, treatment tracking, and pre/post residual risk scoring.' },
    { name: 'Controls & Treatments', desc: 'Direct mapping of ISO 27001 Annex A and SOC 2 security controls.' },
    { name: 'Environmental Aspects', desc: 'ISO 14001 carbon footprint, water management, and chemical storage tracking.' },
    { name: 'Business Impact Analysis', desc: 'RTO/RPO threshold simulation, supply chain dependencies, and disaster recovery.' },
    { name: 'Objectives & KPIs', desc: 'Departmental quality targets aligned with ISO Clause 6.2 measurable goals.' },
    { name: 'Assets & Suppliers', desc: 'Critical hardware/software inventory, vendor tiering, and supplier audit audits.' },
    { name: 'Management of Change (MOC)', desc: 'Structured hazard reviews before physical or procedural facility adjustments.' },
    { name: 'Scope 1, 2 & 3 Sustainability', desc: 'GHG protocol ledger, energy meter imports, and ESG disclosure generator.' },
  ],
  assure: [
    { name: 'Audit Management', desc: 'Turnkey Stage 1/Stage 2 protocols, IAF MD 4 remote audit checklists, and evidence tags.' },
    { name: 'Equipment & Facility Inspections', desc: 'Inspect360 mobile app with offline calibration logging and QR tagging.' },
    { name: 'Incidents & Events', desc: 'Near-miss reporting, OSHA 300 logs, and root-cause 5-Why analysis.' },
    { name: 'Customer Complaints', desc: 'Ticket escalation SLA timers and direct integration with CAPA workflows.' },
    { name: 'Nonconformities (NCR)', desc: 'Mobile barcode tagging, lot containment quarantine, and disposition review.' },
  ],
  improve: [
    { name: 'Corrective Actions (CAPA)', desc: 'Closed-loop 8D methodology tracking root causes and preventive safeguards.' },
    { name: 'Compliance Evaluations', desc: 'Periodic legal compliance audits with gap scores and evidence repositories.' },
    { name: 'Performance Trends', desc: 'Real-time statistical process control (SPC) charts and trend anomalies.' },
    { name: 'Automated Management Review', desc: 'Pre-populated ISO 9.3 agenda, PowerPoint exports, and action logs.' },
  ],
};

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'aerotech-roas',
    title: 'How Apex Creative Transformed AeroTech’s Direct Channel with a 3.4x ROAS Boost in 60 Days',
    client: 'AeroTech Consumer Electronics',
    industry: 'Consumer Tech & Wearables',
    vertical: 'creative',
    metrics: [
      { label: 'ROAS Improvement', value: '+340%' },
      { label: 'Blended CAC Reduction', value: '-63%' },
      { label: 'Organic Video Views', value: '2.8M' },
      { label: 'Paid Meta/TikTok Reach', value: '14.2M' },
    ],
    summary:
      'By transitioning AeroTech from static 3D renderings to cinema-lit high-speed macro product shots, authentic founder storytelling, and rapid 9:16 UGC testing sprints, we lowered CPA from $84 to $31 while scaling daily ad spend 5x across Meta and TikTok.',
    quote:
      'AllBiz Digital didn’t just shoot pretty videos—they built an entire revenue engine. Our cost-per-acquisition dropped by 63% in the first two weeks of creative deployment.',
    author: 'Marcus Vance, VP Growth at AeroTech',
    image: ASSET_IMAGES.cinemaSet,
    deliverables: ['1 Flagship 60s Commercial', '35 Macro Studio Shots', '12 Tested UGC Ads', 'Omnichannel Ad Cuts'],
  },
  {
    id: 'st-regis-hospitality',
    title: 'Elevating Luxury Direct Bookings for St. Regis & Premium Resort Portfolios',
    client: 'St. Regis Resort & Private Villas',
    industry: 'Luxury Hospitality & Travel',
    vertical: 'creative',
    metrics: [
      { label: 'Direct Booking Revenue', value: '+$1.8M' },
      { label: 'OTA Commission Saved', value: '$240K' },
      { label: 'Engagement Rate', value: '18.4%' },
      { label: 'FPV Reel Views', value: '4.6M' },
    ],
    summary:
      'We engineered 15-45 second first-person guest journeys, interior FPV drone fly-throughs, and chef-table culinary micro-reels that bypassed high-commission online travel agents and triggered direct high-value reservations.',
    quote:
      'Travelers book what they can feel. The sensory realism of the FPV drone tours and culinary reels completely shifted our booking channel mix.',
    author: 'Elena Rostova, Marketing Director',
    image: ASSET_IMAGES.luxuryHotelSuite,
    deliverables: ['FPV Drone Architectural Tours', '24 Vertical 9:16 Reels', 'Turndown Amenity Logo Chocolates', 'Social Ad Suites'],
  },
  {
    id: 'apex-iso-compliance',
    title: 'Zero-Defect ISO 9001 & ISO 27001 Remote Certification for Defense Supplier',
    client: 'Apex Precision Dynamics',
    industry: 'Aerospace & Industrial Engineering',
    vertical: 'compliance',
    metrics: [
      { label: 'Audit Timeline', value: '4 Weeks' },
      { label: 'Travel Expenses Saved', value: '$28,000' },
      { label: 'NCRs at Stage 2', value: '0 Major' },
      { label: 'Modules Deployed', value: '21 Modules' },
    ],
    summary:
      'Transitioned a multi-site aerospace contractor from paper binders to Compliance360. Conducted 100% remote Stage 1 and Stage 2 audits under IAF MD 4 guidelines with instant cryptographic IAR-112 certification.',
    quote:
      'The audit team verified our evidence lockers in real-time over encrypted video. It cut our preparation overhead by 70%.',
    author: 'David Chen, Chief Compliance Officer',
    image: ASSET_IMAGES.cleanRoomFactory,
    deliverables: ['Compliance360 SaaS Setup', 'IAF MD 4 Remote Audit', 'IAR-112 USA Accredited Seal', 'Live QR Public Registry'],
  },
  {
    id: 'fintech-vip-gifting',
    title: 'Custom Belgian Couverture Medallions for Series B FinTech Deal Celebrations',
    client: 'Veloce Capital Partners',
    industry: 'Venture Capital & Private Equity',
    vertical: 'gifting',
    metrics: [
      { label: 'Executive Gift Boxes', value: '500 Sets' },
      { label: 'Mockup CAD Turnaround', value: '36 Hours' },
      { label: 'Packaging Finish', value: 'Soft-Touch Foil' },
      { label: 'Positive Recipient Feedback', value: '98%' },
    ],
    summary:
      'Engineered a 0.8mm relief custom chocolate mold featuring the firm’s monogram emblem in 54.5% Belgian dark chocolate, packaged in magnetic matte-black keepsake presentation boxes with gold foil embossing.',
    quote:
      'Every CEO who received our closing box commented on the chocolate quality and custom mold detail. It set an unbeatable first impression.',
    author: 'Sarah Jenkins, Managing Partner',
    image: ASSET_IMAGES.chocolateBarSlate,
    deliverables: ['In-House CAD Tooling', '500 Custom Molded Bars', 'Gold Foil Wrap', 'Drop-Ship to 48 US States'],
  },
];
