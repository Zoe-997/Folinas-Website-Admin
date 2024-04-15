import type { Metadata } from 'next';
import Link from 'next/link';
import { RiEditLine } from "react-icons/ri";
 
export const metadata: Metadata = {
  title: 'Organize Us - Admin Folinas LLC',
  description: 'All files from image, video, ... are saved in here.',
}

export default function OrganizeHome() {
  const dataOrganize = [
    {
      id: 1,
      title_en: "Who We Are?",
      title_vi: "Chúng tôi là ai?",
      description_en: "The POD industry-leading technology ecosystem creates solutions across the entire value chain, starting with retail, distribution, and services.",
      description_vi: "Hệ sinh thái công nghệ hàng đầu ngành POD tạo ra các giải pháp trên toàn bộ chuỗi giá trị, bắt đầu từ bán lẻ, phân phối, và dịch vụ."
    },
    {
      id: 2,
      title_en: "Why We Exist?",
      title_vi: "Vì sao chúng tôi tồn tại?",
      description_en: "The ascendency of the nation depends on its technological sophistication.",
      description_vi: "Uy thế của quốc gia phụ thuộc vào sự tinh vi về công nghệ của nó."
    },
    {
      id: 3,
      title_en: "Whom Do We Serve?",
      title_vi: "Chúng tôi phục vụ ai?",
      description_en: "Everyone around the world from individuals and small business owners to major corporate partners.",
      description_vi: "Mọi người ở khắp thế giới từ các cá nhân và chủ doanh nghiệp nhỏ đến các đối tác doanh nghiệp lớn."
    }
  ];

  return (
    <ul className="grid grid-cols-3 gap-8 mt-10">
      {dataOrganize.map((item) => (
        <li key={item.id} className="w-full md:flex-1 border rounded h-full">
          <div className="border-b-[1px] p-3 flex flex-wrap items-center">
            <h3 className="flex-1">{item.title_en}</h3>
            <Link className="cursor-pointer px-3"
              href={{
                pathname: `/organize/${item.id}`,
                query: {
                    name: item.title_en
                }
              }}
            >
              <RiEditLine />
            </Link>
          </div>

          <div className="p-3">{item.description_en}</div>
        </li>
      ))}
    </ul>
  );
}
