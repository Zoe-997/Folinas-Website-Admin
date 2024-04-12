"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

import FileListTabContent from "./FileListTabContent";
import ToolTip from "../Commons/ToolTip";

const FileList = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [fileDelete, setFileDelete] = useState<number[]>([]);
    const fileType = [
        {id: 1, title: "Images"},
        {id: 2, title: "Files"},
        {id: 3, title: "Media"},
        {id: 4, title: "Media2"},
    ];

    const dataFiles = [
        {
            id: 1,
            title: "Image 1",
            link: "https://www.pexels.com/photo/narrow-alley-in-between-old-buildings-12704502/",
            type: 1,
            size: "396.45 KB",
            public_time: "Feb, 6, 2024"
        },
        {
            id: 2,
            title: "Image 2",
            link: "https://www.pexels.com/photo/photo-of-breakfast-with-pancakes-and-a-cup-of-coffee-next-to-a-book-and-a-smartphone-16088378/",
            type: 1,
            size: "400 KB",
            public_time: "Feb, 6, 2024"
        },
        {
            id: 3,
            title: "Flashship POD Variant List",
            link: "https://docs.google.com/spreadsheets/d/1kzveL2qPN3MekbIZbz49j00snPwlj4U-uknKiFMWmNA/edit#gid=1534614345",
            type: 2,
            size: "100 KB",
            public_time: "Apr, 6, 2024"
        },
        {
            id: 4,
            title: "02-01_24-07-55_Shipping label.pdf",
            link: "https://drive.google.com/file/d/1LL4B96wKNOWIt_V0wd8TfNTrer7OH3a8/view?usp=sharing",
            type: 2,
            size: "10 MB",
            public_time: "Jub, 6, 2023"
        },
        {
            id: 5,
            title: "JD Coder Folinas",
            link: "https://docs.google.com/document/d/11NXEueDLCYU1pUd9IaTseWDAZWfLYLlGoT9znk5lLH4/edit",
            type: 2,
            size: "18 KB",
            public_time: "Mar, 6, 2024"
        },
        {
            id: 6,
            title: "Sinh nhat t2",
            link: "https://drive.google.com/drive/folders/11WijgVUdgYiULh0ZmMCDKQ8jB2E39W06",
            type: 3,
            size: "396.45 KB",
            public_time: "Feb, 6, 2024"
        }
    ];

    const getFileDelete = (file: number[]) => {
        setFileDelete(file)
    }

    const handleDeleteFile = () => {
        console.log('fileDelete:', fileDelete);    
    }

    const handleAddFile = () => {
        console.log('handleAddFile');        
    }
    
    return (
        <div className="mt-5">
            <div className="flex flex-wrap items-center mb-5 gap-4">
                <ul className="flex flex-wrap items-center gap-4">
                    {fileType.map((type) => (
                        <li key={type.id} onClick={() =>setActiveTab(type.id)} 
                            className={`cursor-pointer ${type.id === activeTab && 'text-[rgb(var(--second-rgb))] font-bold'} `}
                        >
                            {type.title}
                        </li>
                    ))}
                </ul>

                <div className="flex-1 flex flex-wrap items-center justify-end gap-4">
                    <button onClick={handleAddFile}
                        className="group relative rounded-full w-[30px] h-[30px] flex items-center justify-center border p-1 transition-all hover:text-[rgb(var(--second-rgb))] hover:border-[rgb(var(--second-rgb))]"
                    >
                        <FaPlus />
                        <ToolTip title="Add file" />
                    </button>
                    <button onClick={handleDeleteFile}
                        className={`rounded bg-[rgb(var(--btn-bg))] text-[rgb(var(--btn-text))] py-1 px-3${!fileDelete.length ? ' opacity-75 pointer cursor-no-drop' : ''}`}
                    >
                        Delete files {fileDelete.length ? `(${fileDelete.length})` : ''}
                    </button>
                </div>
            </div>
            
            {fileType?.map((type) => {
                return (
                    <React.Fragment key={type.id}>
                        {type.id === activeTab && 
                            <FileListTabContent data={dataFiles.filter((item) => item.type === type.id)} getFileDelete={getFileDelete} />
                        }
                    </React.Fragment>
                )
            })}
        </div>
    );
}
 
export default FileList;