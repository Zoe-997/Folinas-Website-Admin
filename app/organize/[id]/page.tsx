import OrganizeDetail from '@/app/components/Sections/OrganizeDetail';
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Organize Us - Admin Folinas LLC',
  description: 'All files from image, video, ... are saved in here.',
}

export default function OrganizeDetailHome() {
  return (
    <div className="flex flex-wrap gap-8 mt-10">
      <OrganizeDetail />
    </div>
  );
  
}
