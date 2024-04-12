import { useEffect, useState } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { arraysHaveSameItems } from "@/app/libs/function";
import NoData from "../Commons/NoData";

interface FileItem {
    id: number;
    title: string;
    link: string;
    size: string;
    type: number;
    public_time: string;
}

interface FileListProps {
    data: FileItem[];
    getFileDelete: any;
    columnTitles: string[]; // Mảng các tiêu đề cột
}

const FileListTabContent = ({ data, getFileDelete, columnTitles }: FileListProps) => {
    const [checkAll, setCheckAll] = useState(false);
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
                        <span className={`cursor-pointer rounded border w-[20px] h-[20px] p-[2px] block ${(checkAll || arraysHaveSameItems(dataId, fileSelected)) && 'bg-[rgb(var(--second-rgb))]'}`} 
                            onClick={() => setCheckAll(!checkAll)}
                        >
                            {(checkAll || arraysHaveSameItems(dataId, fileSelected)) && <FaCheck className="text-white" />}
                        </span>
                    </th>
                    {columnTitles.map((title, index) => (
                        title !== "Link" && // Bỏ qua cột "Link"
                        <th key={index} className="p-2">{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item: any, index: number) => (
                    <tr key={index} className="border">
                        <td className="p-2 w-[20px]">
                            <span className={`cursor-pointer rounded border w-[20px] h-[20px] p-[2px] block ${(fileSelected.includes(item.id))&&'bg-[rgb(var(--second-rgb))]'}`} 
                                onClick={() => handleCheckItem(item.id)}
                            >
                                {(fileSelected.includes(item.id)) && <FaCheck className="text-white" />}
                            </span>
                        </td>
                        {columnTitles.map((columnTitle, colIndex) => (
                            columnTitle !== "Link" && // Bỏ qua cột "Link"
                            <td key={colIndex} className="p-2">
                                {item[columnTitle.toLowerCase()]} {/* Giả sử giá trị của các cột là lowercase của tiêu đề */}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default FileListTabContent;
