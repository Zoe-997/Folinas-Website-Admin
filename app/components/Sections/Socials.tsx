"use client";
import Link from "next/link";
import { useState } from "react";
import { FaLink, FaFacebookF, FaTwitter, FaTiktok , FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { RiEditLine } from "react-icons/ri";

const Socials = () => {
    // const [socialData, setSocialData] = useState<any>([]);
    const socialIcon = [
        {
            icon: FaTwitter,
            title: 'twitter'
        },
        {
            icon: FaFacebookF,
            title: 'facebook'
        },
        {
            icon: FaTiktok,
            title: 'tiktok'
        },
        {
            icon: TfiYoutube,
            title: 'youtube'
        },
        {
            icon: FaInstagram,
            title: 'instagram'
        }
    ];

    const dataSocial = socialIcon.map((item, index) => (
        {
            id: index,
            icon: item.icon,
            title: item.title,
            link: "#"
        }
    ));

    const handleEdit = (id: number) => {}

    return (
        <ul className="w-full">
            {dataSocial.map((item, index) => (
                <li key={index} className="flex flex-wrap items-center gap-4 border-b-[1px] py-2">
                    <item.icon />
                    <span className="flex-1 capitalize font-semibold">{item.title}</span>
                    <Link href={item.link} target="_blank" className="p-1"><FaLink size={16} /></Link>
                    <button className="p-1 hover:text-[rgb(var(--second-rgb))]" onClick={() => handleEdit(item.id)}><RiEditLine size={18} /></button>
                </li>
            ))}
        </ul>
    );
}
 
export default Socials;