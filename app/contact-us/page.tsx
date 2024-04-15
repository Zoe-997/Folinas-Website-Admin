import type { Metadata } from 'next';
import Socials from '@/app/components/Sections/Socials';
import ContactInformation from '@/app/components/Sections/ContactInformation';
 
export const metadata: Metadata = {
  title: 'ContactHome - Admin Folinas LLC',
  description: 'All files from image, video, ... are saved in here.',
}

export default function ContactHome() {
  return (
    <div className="mt-10 flex flex-wrap justify-between">
      <div className="w-full md:w-[48%]">
        <h3 className="text-lg mb-5">Social</h3>
        <Socials />
      </div>
      <div className="w-full md:w-[48%]">
        <h3 className="text-lg mb-5">Information</h3>
        <ContactInformation />
      </div>
    </div>
  );
}
