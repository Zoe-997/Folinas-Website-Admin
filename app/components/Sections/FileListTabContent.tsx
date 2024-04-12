"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink, FaCheck } from "react-icons/fa6";
import { arraysHaveSameItems } from "@/app/libs/function";
import NoData from "../Commons/NoData";

interface FileListTabContentProps {
    data: {
        id: number,
        title: string,
        link: string,
        size: string;
        type: number;
        public_time: string;
    }[];
    getFileDelete: any;
}

const FileListTabContent = ({ data, getFileDelete }: FileListTabContentProps) => {
    const [checkAll, setCheckAll] = useState(false);
    const [checkAllItem, setCheckAllItem] = useState(false);
    const [fileSelected, setFileSelected] = useState<number[]>([]);
    const dataId = data.map((item) => item.id);
    

    const handleCheckItem = (id: number) => {        
        const isIdSelected = fileSelected.includes(id);
        let updateFileSelected = [...fileSelected];
       
        if (!isIdSelected) {
            updateFileSelected.push(id);
        } else {       
            updateFileSelected = updateFileSelected.filter((itemId) => itemId !== id);            
        }
        setFileSelected(updateFileSelected);
    };    

    useEffect(() => {
        getFileDelete(fileSelected);
        if (arraysHaveSameItems(dataId, fileSelected)) {
            setCheckAllItem(true);
        } else {
            setCheckAllItem(false);
        }
    }, [fileSelected]);

    useEffect(() => {
        if (checkAll) {
            setFileSelected(dataId);
        } else {
            setFileSelected([]);
        }
    }, [checkAll]);

    if (!data.length) return <NoData />
    
    return (
        <table className="w-full text-left">
            <thead>
                <tr className="border">
                    <th className="p-2 w-[20px]">
                        <span className={`cursor-pointer rounded border w-[20px] h-[20px] p-[2px] block ${(checkAll || checkAllItem)&&'bg-[rgb(var(--second-rgb))]'}`} 
                            onClick={() => setCheckAll(!checkAll)}
                        >
                            {(checkAll || checkAllItem) && <FaCheck className="text-white" />}
                        </span>
                    </th>
                    <th className="p-2">File name</th>
                    <th className="p-2">Date added</th>
                    <th className="p-2">Size</th>
                    <th className="p-2">Link</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} className="border">
                        <td className="p-2 w-[20px]">
                            <span className={`cursor-pointer rounded border w-[20px] h-[20px] p-[2px] block ${(fileSelected.includes(item.id))&&'bg-[rgb(var(--second-rgb))]'}`} 
                                onClick={() => handleCheckItem(item.id)}
                            >
                                {(fileSelected.includes(item.id)) && <FaCheck className="text-white" />}
                            </span>
                        </td>
                        <td className="p-2">
                            {/* {item.id === 1 && <Image src={item.link} alt={item.title} width={30} height={30} />} */}
                            {item.title}
                        </td>
                        <td className="p-2">{item.public_time}</td>
                        <td className="p-2">{item.size}</td>
                        <td className="p-2">
                            <Link href={item.link} target="_blank" className="border inline-block rounded p-1"><FaLink size={16} /></Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default FileListTabContent;