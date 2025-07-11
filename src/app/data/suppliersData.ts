interface Supplier {
  id: number;
  status: 'Active' | 'Inactive';
  name: string;
  services: string;
  contact: string;
  phone: string;
  email: string;
}

const suppliersData: Supplier[] = [
{
    id: 1,
    status: 'Active',
    name: 'AIG Hospitals',
    services:'Decoration',
    contact: 'Ahmad Rosser',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
  {
    id: 2,
    status: 'Inactive',
    services:'Audio Music',
    name: 'Neurological Society of India (NSI)',
    contact: 'T.S Kumar',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
  {
    id: 3,
    status: 'Active',
    name: 'Association of Nuclear Medicine Physicians of India (ANMPI)',
    services:'Video',
    contact: 'Dr G Surya Teja',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
  {
    id: 4,
    status: 'Inactive',
    name: 'AIG Hospitals',
    services:'Photography',
    contact: 'Ahmad Rosser',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
  {
    id: 5,
    status: 'Active',
    services:'Catering',
    name: 'Neurological Society of India (NSI)',
    contact: 'T.S Kumar',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
  {
    id: 6,
    status: 'Inactive',
    name: 'Association of Nuclear Medicine Physicians of India (ANMPI)',
    services:'Cleaning',
    contact: 'Dr G Surya Teja',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
  {
    id: 7,
    status: 'Active',
    name: 'AIG Hospitals',
    services:'Decoration',
    contact: 'Ahmad Rosser',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
  {
    id: 8,
    status: 'Inactive',
    services:'Audio Music',
    name: 'Neurological Society of India (NSI)',
    contact: 'T.S Kumar',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
  {
    id: 9,
    status: 'Active',
    name: 'Association of Nuclear Medicine Physicians of India (ANMPI)',
    services:'Video',
    contact: 'Dr G Surya Teja',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
  {
    id: 10,
    status: 'Inactive',
    name: 'AIG Hospitals',
    services:'Photography',
    contact: 'Ahmad Rosser',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
  {
    id: 11,
    status: 'Active',
    services:'Catering',
    name: 'Neurological Society of India (NSI)',
    contact: 'T.S Kumar',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
  {
    id: 12,
    status: 'Inactive',
    name: 'Association of Nuclear Medicine Physicians of India (ANMPI)',
    services:'Cleaning',
    contact: 'Dr G Surya Teja',
    phone: '565433226',
    email: 'abc@gmail.com',
  },
]
export default suppliersData
