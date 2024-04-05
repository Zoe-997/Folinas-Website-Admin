import Link from "next/link";
import { IconType } from "react-icons";
import { IoCloseOutline } from "react-icons/io5";

interface ToolItemModal {
    label: string;
    icon?: IconType;
    link: string;
}

interface HeaderToolItemProps {
    icon: IconType;
    data: ToolItemModal[];
    isOpen: boolean;
    onToggle: () => void;
}

const HeaderToolItem = ({ icon: Icon, data, isOpen, onToggle }: HeaderToolItemProps) => {
    
    return (
        <div className="relative">
            <button
                onClick={onToggle}
                className="w-[36px] h-[36px] rounded-full bg-[rgb(var(--btn-bg))] text-[rgb(var(--btn-text))] flex items-center justify-center relative z-[2]"
                title="Toggle Modal"
            >
                {isOpen ? <IoCloseOutline /> : <Icon />}
            </button>
            <div className={`absolute right-0 top-[calc(100%+10px)] bg-white transition-all z-[1] duration-500 shadow-[0_10px_15px_-3px_rgba(0,0,0,.1),_0_4px_6px_-4px_rgba(0,0,0,.1)] w-[150px] p-3 rounded ${isOpen ? 'scale-1' : 'scale-0'}`}>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link} className="flex flex-wrap items-center gap-1">
                                {item.icon && <item.icon />}
                                <span className="flex-1">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HeaderToolItem;
