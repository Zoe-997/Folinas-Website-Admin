'use client';
import { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { RiSettings3Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

import HeaderSearch from "./HeaderSearch";
import HeaderToolItem from "./HeaderToolItem";


const HeaderTools = ({ className }: { className: string }) => {
    const [openModal, setOpenModal] = useState<number | null>(null);
    const notificationData = [
        {
            label: "Notification 1",
            icon: IoMdNotifications,
            link: '/'
        },
        {
            label: "Notification 2",
            icon: IoMdNotifications,
            link: '/'
        }
    ];

    const SettingsData = [
        {
            label: "Settings 1",
            icon: RiSettings3Line,
            link: '/'
        },
        {
            label: "Settings 2",
            icon: RiSettings3Line,
            link: '/'
        }
    ];

    const accountData = [
        {
            label: "Account 1",
            icon: FiUser,
            link: '/'
        },
        {
            label: "Account 2",
            icon: FiUser,
            link: '/'
        }
    ];

    const handleToggleModal = (index: number) => {
        setOpenModal(openModal === index ? null : index);
    };

    return (
        <div className={`${className} justify-end flex flex-wrap gap-3`}>
            <HeaderSearch />
            <HeaderToolItem icon={IoMdNotifications} data={notificationData} isOpen={openModal === 0} onToggle={() => handleToggleModal(0)} />
            <HeaderToolItem icon={RiSettings3Line} data={SettingsData} isOpen={openModal === 1} onToggle={() => handleToggleModal(1)} />
            <HeaderToolItem icon={FiUser} data={accountData} isOpen={openModal === 2} onToggle={() => handleToggleModal(2)} />
        </div>
    );
}
 
export default HeaderTools;