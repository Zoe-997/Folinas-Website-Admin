'use client';
import { useState, ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const HeaderSearch = () => {
    const [openSearchModal, setOpenSearchModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(searchQuery);        
    };

    return (
        <div className="max-w-[250px]">
            <div className={`bg-white transition-all z-[1] duration-500 shadow-[var(--box-shadow)]`}>
                <form onSubmit={handleSearch} className="flex flex-wrap border-[1px] px-2 py-2 w-full rounded">
                    <input type="text" placeholder="Search..." className="text-sm w-full flex-1 px-1 outline-none border-r-[1px]" onChange={handleInputChange} />
                    <button type="submit" className="px-3 hover:text-[rgb(var(--second-rgb))]"><FiSearch /></button>
                </form>
            </div>
        </div>
    );
}
 
export default HeaderSearch;