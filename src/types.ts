export type RoutePath =
  | '/'
  | '/services/videography'
  | '/services/product-photography'
  | '/services/hotel-short-videos'
  | '/services/ugc-ads'
  | '/services/promotional-advertising'
  | '/solutions/compliance-platform'
  | '/solutions/food-inspection-software'
  | '/solutions/iso-certification'
  | '/verify-certificate'
  | '/gifting/custom-corporate-chocolates'
  | '/gifting/design-studio'
  | '/gifting/corporate-events'
  | '/work'
  | '/pricing'
  | '/about'
  | '/contact';

export interface NavItem {
  title: string;
  description: string;
  path: RoutePath;
  externalUrl?: string;
  badge?: string;
  icon?: string;
}

export interface CertificateRecord {
  registryNumber: string;
  companyName: string;
  standard: string;
  status: 'VALID' | 'PENDING' | 'RENEWAL';
  scope: string;
  issueDate: string;
  expiryDate: string;
  accreditationBody: string;
  accreditationNumber: string;
  auditorId: string;
  sha256Hash: string;
  qrPayload: string;
  auditMethod: 'IAF MD 4 Remote' | 'On-Site Dual Stage';
}

export interface ChocolatePieceConfig {
  id: 'bite' | 'square' | 'slim' | 'bar';
  name: string;
  dimensions: string;
  weight: string;
  moq: number;
  basePrice: number; // per unit
  recommendedFor: string;
}

export interface CocoaProfile {
  id: 'dark' | 'milk' | 'white';
  name: string;
  percentage: string;
  flavor: string;
  colorHex: string;
  specularHex: string;
  roughness: number;
}

export interface FoilOption {
  id: 'none' | 'gold' | 'silver' | 'rose-gold' | 'black-matte';
  name: string;
  colorHex: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  vertical: 'creative' | 'compliance' | 'gifting';
  metrics: { label: string; value: string }[];
  summary: string;
  quote?: string;
  author?: string;
  image: string;
  deliverables: string[];
}
