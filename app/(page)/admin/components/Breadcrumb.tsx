'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
    const pathName = usePathname();
  
    const pathSegments = pathName.split('/').filter((segment) => segment);
    console.log(pathSegments)

    return (
        <nav className="flex text-blue-500" aria-label="Breadcrumb">
            {pathSegments.map((segment, index) => (
                <>
                 <a href={'/' + pathSegments.slice(0, index + 1).join('/')} className={`hover:underline  ${index < pathSegments.length - 1 && 'text-gray-400'}`} key={index}>{segment}</a>
                {index < pathSegments.length - 1 && <span className="mx-2 text-gray-400">&gt;</span>}
                </>
               
            ))}
        </nav>
    )
}

export default Breadcrumb;