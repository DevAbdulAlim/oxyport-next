'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
    const pathName = usePathname();
  
    const pathSegments = pathName.split('/').filter((segment) => segment);
    console.log(pathSegments)

    return (
        <nav className="flex" aria-label="Breadcrumb">
            {pathSegments.map((segment, index) => (
                <>
                 <a href={'/' + pathSegments.slice(0, index + 1).join('/')} key={index}>{segment}</a>
                {index < pathSegments.length - 1 && <span>/</span>}
                </>
               
            ))}
        </nav>
    )
}

export default Breadcrumb;