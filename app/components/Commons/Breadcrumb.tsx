
'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import Container from "./Container";
import Link from 'next/link';

const Breadcrumb = () => {
    const pathname = usePathname();
    const pathnameSplit = pathname.split('/');
    const pathnameIgnore = [""];
    const breadcrumbs = pathnameSplit.filter((item) => !pathnameIgnore.includes(item));
    
    const searchParams = useSearchParams();
    const paramName = searchParams.get('name');
    const CurrentBreadcrumbsName = breadcrumbs.length && breadcrumbs[breadcrumbs.length - 1].replace('-', ' ');
    const pageTitle = paramName || CurrentBreadcrumbsName;

    if (!breadcrumbs.length) return false;
    return (
        <div>
            <ul className="flex flex-wrap items-center font-[600]">
                <li><Link href='/' title='home'>Home</Link></li>
                {breadcrumbs?.map((item, index) => {                            
                    return (
                        <li key={index} className="last:line-clamp-1 text-start">
                            &nbsp;/&nbsp;
                            {breadcrumbs.length - 1 !== index && <Link href={`/${item}`} title={item}>{item.replace('-', ' ')}</Link>}
                            {breadcrumbs.length - 1 === index && <span>{pageTitle}</span>}
                        </li>
                    )
                })}
            </ul>
            {breadcrumbs.length > 0 ? <h2 className="text-lg md:text-2xl capitalize">{pageTitle}</h2> : <h1 className="text-lg md:text-2xl  capitalize">{pageTitle}</h1>}
        </div>
    );
}
 
export default Breadcrumb;