import type { Metadata } from 'next';
import Partner from '@/app/components/Sections/Partner';
 
export const metadata: Metadata = {
  title: 'Partner - Admin Folinas LLC',
  description: 'All files from image, video, ... are saved in here.',
}

export default function PartnerHome() {
  return (
    <div className="mt-10">
      <Partner />
    </div>
  );
}
