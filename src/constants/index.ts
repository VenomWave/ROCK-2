import { District, CrimeCategory } from '../types';

export const KERALA_DISTRICTS: District[] = [
  { id: '1', name: 'Thiruvananthapuram', code: 'TVM' },
  { id: '2', name: 'Kollam', code: 'KLM' },
  { id: '3', name: 'Pathanamthitta', code: 'PTA' },
  { id: '4', name: 'Alappuzha', code: 'ALP' },
  { id: '5', name: 'Kottayam', code: 'KTM' },
  { id: '6', name: 'Idukki', code: 'IDK' },
  { id: '7', name: 'Ernakulam', code: 'EKM' },
  { id: '8', name: 'Thrissur', code: 'TSR' },
  { id: '9', name: 'Palakkad', code: 'PKD' },
  { id: '10', name: 'Malappuram', code: 'MPM' },
  { id: '11', name: 'Kozhikode', code: 'KZD' },
  { id: '12', name: 'Wayanad', code: 'WYD' },
  { id: '13', name: 'Kannur', code: 'KNR' },
  { id: '14', name: 'Kasaragod', code: 'KSD' }
];

export const CRIME_CATEGORIES = {
  [CrimeCategory.CYBER_CRIME]: {
    label: 'Cyber Crime',
    description: 'Online fraud, hacking, cyber harassment, etc.',
    malayalam: 'സൈബർ കുറ്റകൃത്യം'
  },
  [CrimeCategory.THEFT]: {
    label: 'Theft',
    description: 'Burglary, pickpocketing, vehicle theft, etc.',
    malayalam: 'മോഷണം'
  },
  [CrimeCategory.ASSAULT]: {
    label: 'Assault',
    description: 'Physical violence, assault cases',
    malayalam: 'ആക്രമണം'
  },
  [CrimeCategory.DOMESTIC_VIOLENCE]: {
    label: 'Domestic Violence',
    description: 'Violence within family or domestic relationships',
    malayalam: 'ഗാർഹിക പീഡനം'
  },
  [CrimeCategory.FRAUD]: {
    label: 'Fraud',
    description: 'Financial fraud, cheating, forgery',
    malayalam: 'തട്ടിപ്പ്'
  },
  [CrimeCategory.DRUG_OFFENSE]: {
    label: 'Drug Offense',
    description: 'Drug trafficking, possession, related crimes',
    malayalam: 'മയക്കുമരുന്ന് കുറ്റകൃത്യം'
  },
  [CrimeCategory.TRAFFIC_VIOLATION]: {
    label: 'Traffic Violation',
    description: 'Reckless driving, hit and run, traffic violations',
    malayalam: 'ട്രാഫിക് ലംഘനം'
  },
  [CrimeCategory.MISSING_PERSON]: {
    label: 'Missing Person',
    description: 'Report missing persons',
    malayalam: 'കാണാതായ വ്യക്തി'
  },
  [CrimeCategory.PROPERTY_DAMAGE]: {
    label: 'Property Damage',
    description: 'Vandalism, property destruction',
    malayalam: 'സ്വത്ത് നാശനഷ്ടം'
  },
  [CrimeCategory.OTHER]: {
    label: 'Other',
    description: 'Other criminal activities',
    malayalam: 'മറ്റുള്ളവ'
  }
};

export const EMERGENCY_CONTACTS = {
  POLICE: '100',
  FIRE: '101',
  AMBULANCE: '102',
  WOMEN_HELPLINE: '1091',
  CHILD_HELPLINE: '1098',
  CYBER_CRIME: '1930'
};