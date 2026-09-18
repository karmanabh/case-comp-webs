import { DeliveryHub } from '../types';

export const DELIVERY_HUBS: DeliveryHub[] = [
  {
    id: 'north-campus',
    name: 'Delhi University (North Campus)',
    region: 'Delhi',
    pincodePrefix: ['110007', '110009'],
    status: 'Active',
    estimatedTime: '22-28 mins',
    landmark: 'Serving Hindu, Hansraj, Stephen’s, Kamla Nagar PG clusters & Hudson Lane'
  },
  {
    id: 'south-campus',
    name: 'South Campus & Satya Niketan',
    region: 'Delhi',
    pincodePrefix: ['110021', '110023'],
    status: 'Active',
    estimatedTime: '25-30 mins',
    landmark: 'Venkateswara, ARSD, Satya Niketan student apartments, Shanti Niketan'
  },
  {
    id: 'mukherjee-nagar',
    name: 'Mukherjee Nagar & GTB Nagar',
    region: 'Delhi',
    pincodePrefix: ['110009'],
    status: 'Active',
    estimatedTime: '20-25 mins',
    landmark: 'UPSC Aspirant clusters, Batra Cinema lane, Nehru Vihar PGs'
  },
  {
    id: 'saket-hauz-khas',
    name: 'Saket & Hauz Khas',
    region: 'Delhi',
    pincodePrefix: ['110017', '110016'],
    status: 'Active',
    estimatedTime: '30-35 mins',
    landmark: 'IIT Delhi, SDA Market, Saket District Centre, Neb Sarai'
  },
  {
    id: 'laxmi-nagar',
    name: 'Laxmi Nagar & Preet Vihar',
    region: 'Delhi',
    pincodePrefix: ['110092'],
    status: 'Active',
    estimatedTime: '25-30 mins',
    landmark: 'CA student hub, Shakarpur, Nirman Vihar'
  },
  {
    id: 'cyber-city',
    name: 'Cyber City & DLF Phase 1-3 (Gurugram)',
    region: 'Delhi NCR',
    pincodePrefix: ['122002', '122008'],
    status: 'Active',
    estimatedTime: '25-32 mins',
    landmark: 'Cyber Hub offices, Sikanderpur, Belvedere Towers, Udyog Vihar'
  },
  {
    id: 'noida-sec-62',
    name: 'Sector 62 & Electronic City (Noida)',
    region: 'Delhi NCR',
    pincodePrefix: ['201309', '201301'],
    status: 'Active',
    estimatedTime: '28-35 mins',
    landmark: 'IT Parks, JSS Academy, Sector 63 tech offices, Cleo County'
  },
  {
    id: 'upcoming-bengaluru',
    name: 'Koramangala & HSR Layout (Bengaluru)',
    region: 'Upcoming',
    pincodePrefix: ['560034', '560102'],
    status: 'Coming Soon',
    estimatedTime: 'Kitchen Launching Q4',
    landmark: 'Over 12,000 students and founders on waitlist'
  },
  {
    id: 'upcoming-pune',
    name: 'Viman Nagar & Hinjewadi (Pune)',
    region: 'Upcoming',
    pincodePrefix: ['411014', '411057'],
    status: 'Coming Soon',
    estimatedTime: 'Kitchen Launching Q4',
    landmark: 'Symbiosis campus & Phase 1 IT Park waitlist'
  }
];
