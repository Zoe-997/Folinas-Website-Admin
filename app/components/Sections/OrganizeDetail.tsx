"use client";
import React, { useState, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation'

type DataOrganize = {
    [key: string]: string | number;
};

const OrganizeDetail = () => {
    const router = useRouter()
    const [language, setLanguage] = useState("en");
    const [dataForm, setDataForm] = useState<DataOrganize>({});

    const dataOrganize: DataOrganize = {
        id: 1,
        title_en: "Who We Are?",
        title_vi: "Chúng tôi là ai?",
        description_en: "The POD industry-leading technology ecosystem creates solutions across the entire value chain, starting with retail, distribution, and services.",
        description_vi: "Hệ sinh thái công nghệ hàng đầu ngành POD tạo ra các giải pháp trên toàn bộ chuỗi giá trị, bắt đầu từ bán lẻ, phân phối, và dịch vụ."
    }

    const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    };

    const handleChangeInput = (e: any) => {
        const { name, value } = e.target;
        setDataForm(prevData => ({
            ...prevData,
            [`${name}_${language}`]: value
        }) as DataOrganize);
    };
    
    const handleSubmit = () => {
        console.log(dataForm);   
    }

    useEffect(() => {
        setDataForm(dataOrganize);
    }, []);

    return (
        <div className="w-full">
            <form className="w-full">
                <div className="mb-5 flex flex-wrap gap-4 items-center">
                    <label htmlFor="language" className="block md:min-w-[150px] md:inline-block text-end">Choose language:</label>
                    <select name="language" id="language" className="border px-3 py-2 md:min-w-[200px] outline-none focus:border-[rgb(var(--second-rgb))]" 
                        onChange={handleChangeLanguage}
                        value={language}
                    >
                        <option value="vi">Tiếng Việt</option>
                        <option value="en">English</option>
                    </select>
                </div>

                <div className="mb-5 flex flex-wrap gap-4 items-center">
                    <label htmlFor="title" className="block md:min-w-[150px] md:inline-block text-end">Title:</label>
                    <input type="text" id="title" name="title" value={dataForm[`title_${language}`]} className="border md:flex-1 px-3 py-2 outline-none focus:border-[rgb(var(--second-rgb))]"
                        onChange={handleChangeInput}
                    />
                </div>
        
                <div className="mb-5 flex flex-wrap gap-4">
                    <label htmlFor="description" className="block md:min-w-[150px] md:inline-block text-end">Description:</label>
                    <textarea id="description" name="description" rows={5} value={dataForm[`description_${language}`]}
                        className="border md:flex-1 p-3 outline-none focus:border-[rgb(var(--second-rgb))]" 
                        onChange={handleChangeInput}
                    />
                </div>

            </form> 
            <div className="flex flex-wrap gap-4">
                <label className="block md:min-w-[150px] md:inline-block text-end"></label>
                <button onClick={handleSubmit}
                    className="px-5 py-1 bg-[rgb(var(--btn-bg))] text-[rgb(var(--btn-text))] hover:bg-[rgb(var(--btn-bg-hv))] hover:text-[rgb(var(--btn-text-hv))] rounded"
                >Submit</button>
                <button className="px-5 py-1 hover:bg-[rgb(var(--btn-bg))] hover:text-[rgb(var(--btn-text))] border rounded"
                    onClick={() => router.push('/organize')}
                >Cancel</button>
            </div>            
        </div>
    );
}
 
export default OrganizeDetail;