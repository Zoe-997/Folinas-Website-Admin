import { MdOutlineReportGmailerrorred } from "react-icons/md";

const NoData = () => {
    return (
        <div className="flex flex-wrap gap-3 items-center justify-center border p-5 text-[#ab0505]">
            <MdOutlineReportGmailerrorred size={30} /> <i>Không có dữ liệu</i>
        </div>
    );
}
 
export default NoData;