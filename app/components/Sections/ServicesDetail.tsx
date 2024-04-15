"use client";
import React, { useState, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type DataService = {
    [key: string]: string | number;
};

const ServicesDetail = () => {
    const router = useRouter()
    const [language, setLanguage] = useState("en");
    const [dataForm, setDataForm] = useState<any>({});

    const dataOrganize: DataService = {
        id: 1,
        title_en: "Innovative Designs",
        title_vi: "Thiết kế sáng tạo",
        content_en: "<p>Our team takes immense pride in our capacity to transform concepts into distinct and polished designs.</p><br/><br/><p>We generate and encapsulate value by presenting trendy ideas, blending imaginative perspectives with exceptional design expertise. What’s more, when you opt for our products, you gain access to a diverse range of pre-made design choices and the opportunity to personalize them with your own artwork, designs, or preferred quotes. With our print-on-demand services, the possibilities are limitless for unleashing your creativity.</p>",
        content_vi: "<p>Nhóm của chúng tôi vô cùng tự hào về khả năng biến các ý tưởng thành những thiết kế khác biệt và bóng bẩy.</p><br/><br/><p>Chúng tôi tạo ra và gói gọn giá trị bằng cách trình bày những ý tưởng hợp thời, kết hợp những quan điểm giàu trí tưởng tượng với chuyên môn thiết kế đặc biệt. Hơn nữa, khi bạn chọn sản phẩm của chúng tôi, bạn có quyền truy cập vào nhiều lựa chọn thiết kế được tạo sẵn và cơ hội cá nhân hóa chúng bằng tác phẩm nghệ thuật, thiết kế hoặc trích dẫn ưa thích của riêng bạn. Với dịch vụ in theo yêu cầu của chúng tôi, khả năng sáng tạo của bạn là vô hạn.</p>"
    }

    const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    };

    const handleChangeInput = (e: any) => {
        const { name, value } = e.target;
        setDataForm((prevData: any) => ({
            ...prevData,
            [`${name}_${language}`]: value
        }) as DataService);
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
                    <label htmlFor="description" className="block md:min-w-[150px] md:inline-block text-end">Content:</label>
                    <ReactQuill theme="snow" value={dataForm[`content_${language}`]} onChange={setDataForm} className="md:flex-1 *:!h-auto"  />
                </div>
            </form> 
            <div className="flex flex-wrap gap-4">
                <label className="block md:min-w-[150px] md:inline-block text-end"></label>
                <button onClick={handleSubmit}
                    className="px-5 py-1 bg-[rgb(var(--btn-bg))] text-[rgb(var(--btn-text))] hover:bg-[rgb(var(--btn-bg-hv))] hover:text-[rgb(var(--btn-text-hv))] rounded"
                >Submit</button>
                <button className="px-5 py-1 hover:bg-[rgb(var(--btn-bg))] hover:text-[rgb(var(--btn-text))] border rounded"
                    onClick={() => router.push('/services')}
                >Cancel</button>
            </div>            
        </div>
    );
}
 
export default ServicesDetail;