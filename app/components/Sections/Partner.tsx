"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { RiEditLine, RiDeleteBin6Line } from "react-icons/ri";

type DataPartner = {
    id: number;
    image: string;
    link: string;
    title: string;
};

const Partner = () => {
    const [partner, setPartner] = useState<any>([]);

    const thead = ["id", "title", "image", "link", "action"];

    const dataPartner: DataPartner[] = [
        {
            id: 1,
            image: "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?v=1614559651",
            link: "#",
            title: "TikTok"
        },
        {
            id: 2,
            image: "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?v=1614559651",
            link: "#",
            title: "PrintCare"
        },
        {
            id: 3,
            image: "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?v=1614559651",
            link: "#",
            title: "FlashShip"
        }
    ];

    const handleEdit = (id: number) => {}
    const handleRemove = (id: number) => {}

    useEffect(() => {
        setPartner(dataPartner);
    }, []);

    return (
        <table className="w-full text-left">
            <thead>
                <tr className="border">
                    {thead.map((item, index) => (
                        <th key={index} className={`p-2 capitalize${index === 0 || index === thead.length - 1 ? ' text-center': ''}`}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataPartner.map((partner) => (
                    <tr key={partner.id} className="border">
                        <td className="p-2 text-center">{partner.id}</td>
                        <td className="p-2">{partner.title}</td>
                        <td className="p-2">
                            <div className="w-[70px] h-[70px] rounded overflow-hidden relative"><Image src={partner.image} alt={partner.title} fill /></div>
                        </td>
                        <td className="p-2">
                            <Link href={partner.link} target="_blank" className="border inline-block rounded p-1"><FaLink size={16} /></Link>
                        </td>
                        <td className="p-2">
                            <div className="flex flex-wrap justify-center gap-4">
                                <button className="hover:text-[rgb(var(--second-rgb))]" onClick={() => handleEdit(partner.id)}><RiEditLine size={18} /></button>
                                <button className="hover:text-[rgb(var(--second-rgb))]" onClick={() => handleRemove(partner.id)}><RiDeleteBin6Line size={18} /></button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default Partner;