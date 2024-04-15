import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Our Story - Admin Folinas LLC',
  description: 'All files from image, video, ... are saved in here.',
}

export default function FilesHome() {
  const columnTable = [
    { title: "Image"},
    { title: "Description", html: true }
  ];

  const dataTable = [
    {
      Image: "https://www.pexels.com/photo/narrow-alley-in-between-old-buildings-12704502/",
      Description: "<p>15/09/2023, With many years of experience and a commitment to continuous improvement, we have created a solid mark in the industry, always putting product quality first. Our success is a testament to our trustworthiness and reputation on leading platforms in the industry.</p><br/><p>At <strong>Folinas</strong>, our team possesses extensive expertise in technology, design, marketing and customer service. We are proud to create a professional, motivating, and exciting working environment for enthusiastic young professionals. This helps us maintain our leadership position in the ever-evolving e-commerce industry.</p>"
    },
    {
      Image: "https://www.pexels.com/photo/narrow-alley-in-between-old-buildings-12704502/",
      Description: "<p>2024, With many years of experience and a commitment to continuous improvement, we have created a solid mark in the industry, always putting product quality first. Our success is a testament to our trustworthiness and reputation on leading platforms in the industry.</p><br/><p>At <strong>Folinas</strong>, our team possesses extensive expertise in technology, design, marketing and customer service. We are proud to create a professional, motivating, and exciting working environment for enthusiastic young professionals. This helps us maintain our leadership position in the ever-evolving e-commerce industry.</p>"
    }
  ];

  return (
    <>
      Our store
    </>
  );
}
