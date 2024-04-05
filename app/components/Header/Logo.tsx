import Link from "next/link";
import Image from "next/image";

import LogoImage from "@/public/images/logo.png";

interface LogoProps {
    pathName: string[];
}

const Logo = ({pathName}: LogoProps) => {
    const HeaderLogoImage = (
        <Image
            src={LogoImage}
            alt="Logo"
            className="max-h-[30px] w-auto"
            width={1020}
            height={536}
            priority={false}
        />
    )
    
    return (
        <>
            {pathName.length === 0 ? <h1>{HeaderLogoImage}</h1> : <Link href="/">{HeaderLogoImage}</Link>}
        </>
    );
}
 
export default Logo;