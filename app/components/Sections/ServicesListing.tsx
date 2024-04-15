"use client";
import Link from "next/link";
import { RiEditLine } from "react-icons/ri";


const ServicesListing = () => {
    const dataServices = [
        {
            id: 1,
            title_en: "Innovative Designs",
        },
        {
            id: 2,
            title_en: "Exceptional Products",
        }
    ];

    return (
        <div>
            <h3 className="text-lg mb-5">Services</h3>
            <ul>
                {dataServices.map((item, index) => (
                    <li key={item.id} className="flex flex-wrap items-center justify-between border-t-[1px] last:border-b-[1px] px-2 py-2 gap-4 hover:bg-[#f7f7f7]">
                        <span>{index + 1}</span>
                        <span className="md:flex-1">{item.title_en}</span>
                        <Link href={`/services/${item.id}`} className="hover:text-[rgb(var(--second-rgb))]"><RiEditLine size={18} /></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default ServicesListing;