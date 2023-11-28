'use client'
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
    const pathName = usePathname();
  
    const pathSegments = pathName.split('/').filter((segment) => segment);
    console.log(pathSegments)

    return (
        <nav className="flex items-center text-blue-500 text-sm space-x-2" aria-label="Breadcrumb">
  {pathSegments.map((segment, index) => (
    <>
      <a
        href={'/' + pathSegments.slice(0, index + 1).join('/')}
        className={`hover:underline ${index < pathSegments.length - 1 && 'text-gray-400'} ${
          index === pathSegments.length - 1 && 'font-semibold'
        }`}
      >
        {segment}
      </a>
      {index < pathSegments.length - 1 && (
        <span className="text-gray-400">/</span>
      )}
    </>
  ))}
</nav>

    )
}

export default Breadcrumb;