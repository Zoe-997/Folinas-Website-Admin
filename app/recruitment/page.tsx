import type { Metadata } from 'next';
import RecruitmentListing from '@/app/components/Sections/RecruitmentListing';
 
export const metadata: Metadata = {
  title: 'Recruitment - Admin Folinas LLC',
  description: 'All files from image, video, ... are saved in here.',
}

export default function RecruitmentHome() {
  return (
    <>
      <RecruitmentListing />
    </>
  );
}
