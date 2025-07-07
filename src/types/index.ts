export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  aadhaar: string;
  address: string;
  district: string;
  isVerified: boolean;
}

export interface CrimeReport {
  id: string;
  userId: string;
  category: CrimeCategory;
  title: string;
  description: string;
  location: Location;
  dateTime: Date;
  evidence: Evidence[];
  status: ReportStatus;
  priority: Priority;
  assignedOfficer?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Location {
  address: string;
  district: string;
  state: string;
  pincode: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Evidence {
  id: string;
  type: 'image' | 'video' | 'document' | 'audio';
  url: string;
  filename: string;
  description?: string;
}

export enum CrimeCategory {
  CYBER_CRIME = 'cyber_crime',
  THEFT = 'theft',
  ASSAULT = 'assault',
  DOMESTIC_VIOLENCE = 'domestic_violence',
  FRAUD = 'fraud',
  DRUG_OFFENSE = 'drug_offense',
  TRAFFIC_VIOLATION = 'traffic_violation',
  MISSING_PERSON = 'missing_person',
  PROPERTY_DAMAGE = 'property_damage',
  OTHER = 'other'
}

export enum ReportStatus {
  SUBMITTED = 'submitted',
  UNDER_REVIEW = 'under_review',
  INVESTIGATING = 'investigating',
  RESOLVED = 'resolved',
  CLOSED = 'closed'
}

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}

export interface District {
  id: string;
  name: string;
  code: string;
}