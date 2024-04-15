"use client";
import Image from 'next/image';
import React, { useEffect, useState, ChangeEvent } from 'react';
import { LuUpload } from "react-icons/lu";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ServicesIntroduction = () => {
    const [language, setLanguage] = useState('en');
    const [value, setValue] = useState<any>({});
    const defaultData: any = {
        image: "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?v=1614559651",
        content_en: "<p>Amazon, Etsy, eBay, TikTok Shops are comprehensive eCommerce sites that drive sales and brand growth. Here, sellers can conveniently sell products directly and reach a rich source of customers. In addition, customers can also explore products, product details, payment and post-payment activities,... .</p><br><p>At the same time, not only is it convenient for customers to buy, but sellers are also provided with many utilities to manage and monitor their stalls as well as other marketing and business activities.</p>",
        content_vi: "<p>Amazon, Etsy, eBay, TikTok Shops là các trang thương mại điện tử toàn diện giúp thúc đẩy doanh số bán hàng và tăng trưởng thương hiệu. Tại đây, người bán có thể thuận tiện bán sản phẩm trực tiếp và tiếp cận được nguồn khách hàng phong phú. Ngoài ra, khách hàng còn có thể tìm hiểu sản phẩm, chi tiết sản phẩm, hoạt động thanh toán và trả sau,….</p><br><p>Đồng thời, không chỉ thuận tiện cho khách hàng mua hàng mà người bán còn được cung cấp nhiều tiện ích để quản lý, giám sát gian hàng của mình cũng như các hoạt động tiếp thị, kinh doanh khác.</p>"
    };

    const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    };

    const handleSubmit = () => {
        console.log(value);   
    }

    useEffect(() => {
        setValue(defaultData);
    }, []);

    return (
        <div>
            <h3 className="text-lg mb-5">Services Introduction</h3>
            <form className="flex flex-wrap gap-7">
                <div className="mb-5 md:mb-0 md:w-[150px] md:h-[150px]">
                    <label htmlFor="image" className="group block overflow-hidden cursor-pointer border rounded w-full h-full font-semibold hover:border-[rgb(var(--second-rgb))] relative">
                        {defaultData?.image && <Image src={defaultData.image} alt="Services Introduction" fill />}
                        <div className={`relative w-full h-full z-10 p-3 flex items-center justify-center gap-3${defaultData?.image ? ' bg-[rgba(0,_0,_0,_0.2)] opacity-0 group-hover:opacity-100 text-white' : ''}`}>
                            <LuUpload size={18} />
                            Image
                        </div>
                    </label>
                    <input type="file" name="image" id="image" hidden accept="image/*" />
                </div>
                
                <div className="w-full md:flex-1">
                    <label htmlFor="language" className="block md:inline-block mr-3">Choose language:</label>
                    <select name="language" id="language" className="border px-3 py-2 md:min-w-[200px] outline-none focus:border-[rgb(var(--second-rgb))]" 
                        onChange={handleChangeLanguage}
                        value={language}
                    >
                        <option value="vi">Tiếng Việt</option>
                        <option value="en">English</option>
                    </select>
                    <br/><br/>
                    <label htmlFor="introduction" className="font-semibold block mb-3">Introduction: </label>
                    <ReactQuill theme="snow" value={defaultData[`content_${language}`]} onChange={setValue} />
                </div>
            </form>
            <div className="flex flex-wrap gap-7 mt-10">
                <label className="block md:min-w-[150px] md:inline-block text-end"></label>
                <button onClick={handleSubmit}
                    className="px-5 py-1 bg-[rgb(var(--btn-bg))] text-[rgb(var(--btn-text))] hover:bg-[rgb(var(--btn-bg-hv))] hover:text-[rgb(var(--btn-text-hv))] rounded"
                >Update</button>
            </div>
        </div>
    );
}
 
export default ServicesIntroduction;