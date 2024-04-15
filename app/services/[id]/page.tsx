import type { Metadata } from 'next';
import ServicesDetail from '@/app/components/Sections/ServicesDetail';
 
export const metadata: Metadata = {
  title: 'Services - Admin Folinas LLC',
  description: 'All files from image, video, ... are saved in here.',
}

export default function ServicesHome() {
  return (
    <ServicesDetail />
  );
}
