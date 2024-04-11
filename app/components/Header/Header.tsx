"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

import Container from "../Commons/Container";
import Logo from "./Logo";
import HeaderTools from "./HeaderTools";

const Header = () => {
    const pathname = usePathname();
    const pathnameIgnore = ["", "en", "vi"];
    const [collapseSidebar, setCollapseSidebar] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(0);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const pathnameSplit = pathname.split('/');
    const breadcrumbs = pathnameSplit.filter((item) => !pathnameIgnore.includes(item));

    const handleToggleSidebar = () => {
        setCollapseSidebar(!collapseSidebar)
        const htmlElement = document.getElementsByTagName('html')[0];
        if (collapseSidebar) htmlElement.classList.add('collapsedSidebar');
        else htmlElement.classList.remove('collapsedSidebar');
    };

    useEffect(() => {
        function updateHeight() {
            if (elementRef.current) {
                const { height } = elementRef.current.getBoundingClientRect();                       
                setHeight(height);
            }
        }

        function handleScroll() {
            setScrollPosition(window.scrollY);
            updateHeight();
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);    

    return (
        <header ref={elementRef} className="shadow-[0_10px_15px_-3px_rgba(0,0,0,.1),_0_4px_6px_-4px_rgba(0,0,0,.1)] py-2" style={{ minHeight: scrollPosition > 100 ? `${Math.round(height)}px` : 'initial' }}>
            <Container fullWidth>
                <div className="flex flex-wrap items-center gap-3">
                    <button className="hover:text-[rgb(var(--second-rgb))] transition-all" onClick={() => handleToggleSidebar()}><TfiLayoutGrid4Alt size={20} /></button>
                    <Logo pathName={breadcrumbs} />
                    <HeaderTools className="flex-1" />
                </div>
            </Container>
        </header>
    );
}
 
export default Header;