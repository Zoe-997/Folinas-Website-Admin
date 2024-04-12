import Link from "next/link";
import { LuClock9 } from "react-icons/lu";
import { PiArticle } from "react-icons/pi";
import { FaRegFile } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineContactPhone, MdOutlineDirectionsBoat } from "react-icons/md";

const Sidebar = ({ className }: { className?: string;}) => {
    const sidebarData = [
        {
            label: 'Dashboard',
            link: '/',
            icon: AiOutlineDashboard
        },
        {
            label: 'Files',
            link: '/files',
            icon: FaRegFile
        },
        {
            label: 'Our Story',
            link: '/our-story',
            icon: LuClock9
        },
        {
            label: 'Organize Us',
            link: '/',
            icon: FaRegBuilding
        },
        {
            label: 'Partners',
            link: '/',
            icon: MdOutlineDashboardCustomize
        },
        {
            label: 'Contact',
            link: '/',
            icon: MdOutlineContactPhone
        },
        {
            label: 'Services',
            link: '/',
            icon: RiCustomerServiceFill
        },
        {
            label: 'Recruitment',
            link: '/',
            icon: MdOutlineDirectionsBoat
        },
        {
            label: 'Blogs',
            link: '/',
            icon: PiArticle
        }
    ];     
    
    return (
        <aside className={`${className?className:''} bg-[#F3F5F7] w-full md:min-h-screen transition-all duration-500`}>
            <ul className="py-5">
                {sidebarData.map((item, index) => (
                    <li key={index} className="py-3 px-[15px]">
                        <Link href={item.link} className="flex flex-wrap items-center gap-3 transition-all overflow-hidden">
                            {item.icon && <item.icon size={18} />}
                            <span className="flex-1 transition-all duration-700">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
 
export default Sidebar;