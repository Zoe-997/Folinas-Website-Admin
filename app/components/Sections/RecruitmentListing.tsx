"use client";
import Link from "next/link";
import { RiEditLine, RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import ToolTip from "../Commons/ToolTip";

const RecruitmentListing = () => {
    const dataRecruitment = [
        {
            id: 1,
            title: "Software Engineer"
        },
        {
            id: 2,
            title: "Facebook Ads POD Advertising"
        }
    ];

    
    const handleAddJob = () => {
        console.log('handleAddJob');        
    }

    return (
        <div>
            <div className="mb-3 flex flex-wrap items-center">
                <h3 className="text-lg md:flex-1">Recruitment list ({dataRecruitment.length})</h3>
                <button onClick={handleAddJob}
                        className="group relative rounded-full w-[30px] h-[30px] flex items-center justify-center border p-1 transition-all hover:text-[rgb(var(--second-rgb))] hover:border-[rgb(var(--second-rgb))]"
                    >
                    <FaPlus />
                    <ToolTip title="Add job" />
                </button>
            </div>
            <ul>
                {dataRecruitment.map((item) => (
                    <li key={item.id} className="flex flex-wrap items-center gap-4 p-2 border-t-[1px] last:border-b-[1px] hover:bg-[#f7f7f7]">
                        <span className="flex-1">{item.title}</span>
                        <Link href={`/services/${item.id}`} className="hover:text-[rgb(var(--second-rgb))]"><RiEditLine size={18} /></Link>
                        <button onClick={() => {}} className="hover:text-[rgb(var(--second-rgb))]"><RiDeleteBin6Line size={18} /></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default RecruitmentListing;