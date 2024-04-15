import type { Metadata } from 'next';
import ServicesIntroduction from '@/app/components/Sections/ServicesIntroduction';
import ServicesListing from '@/app/components/Sections/ServicesListing';
 
export const metadata: Metadata = {
  title: 'Services - Admin Folinas LLC',
  description: 'All files from image, video, ... are saved in here.',
}

export default function ServicesHome() {
  return (
    <>
      <div className="mb-10"><ServicesIntroduction /></div>
      <ServicesListing />
    </>
  );
}
