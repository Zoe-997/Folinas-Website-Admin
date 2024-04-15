'use client';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";

const ContactInformation = () => {
    const dataContact = [
        {
            id: 1,
            icon: FaMapMarkerAlt,
            title: 'Google map',
            value: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29795.53267999111!2d105.805641!3d21.01501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0073c731ef%3A0x2b5e8b8e47773783!2sFolinas!5e0!3m2!1sen!2sus!4v1713156333304!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id: 2,
            icon: FaPhoneAlt,
            title: 'Phone number',
            value: '(+84) 096 357 7853'
        },
        {
            id: 3,
            icon: MdEmail,
            title: 'Email address',
            value: 'contact@folinas.com'
        }
    ];

    const handleEdit = (id: number) => {}

    return (
        <ul className="w-full">
            {dataContact.map((item) => (
                <li key={item.id} className="flex flex-wrap items-center gap-4 border-b-[1px] py-2">
                    <item.icon size={18} />
                    <span className="flex-1 capitalize font-semibold">{item.title}</span>
                    <span className="*:h-[200px]" dangerouslySetInnerHTML={{__html: item.value}}></span>
                    <button className="p-1 hover:text-[rgb(var(--second-rgb))]" onClick={() => handleEdit(item.id)}><RiEditLine size={18} /></button>
                </li>
            ))}
        </ul>
    );
}
 
export default ContactInformation;