import type { Metadata } from 'next'
import MainTools from '@/app/components/Sections/MainTools';
import FileList from '@/app/components/Sections/FileList';
 
export const metadata: Metadata = {
  title: 'Files - Admin Folinas LLC',
  description: 'All files from image, video, ... are saved in here.',
}

export default function FilesHome() {
  return (
    <>
      <FileList />
    </>
  );
}
