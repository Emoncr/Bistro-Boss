"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoMdHome } from 'react-icons/io'


const UserDashboardNav = () => {
    const currentPath = usePathname()
    return (
        <>
            <ul>
                <li>
                    <Link href={"/dashboard"}
                        className={`
                        ${currentPath === "/dashboard" ? "bg-brandSecoundry text-white" : "text-brandDark bg-transparent"} 
                        px-2 sm:px-4 lg:px-8  py-2 md:py-3  flex items-center justify-start text-sm sm:text-base lg:text-xl font-inter font-bold gap-1 hover:bg-brandLite hover:text-white duration-300`}
                    >
                        <IoMdHome className='mb-1' />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/dashboard"}
                        className={`
                        ${currentPath === "/" ? "bg-brandSecoundry text-white" : "text-brandDark bg-transparent"} 
                        px-2 sm:px-4 lg:px-8  py-2 md:py-3  flex items-center justify-start text-sm sm:text-base lg:text-xl font-inter font-bold gap-1 hover:bg-brandLite  duration-300 mt-2`}
                    >
                        <IoMdHome className='mb-1' />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/dashboard"}
                        className={`
                        ${currentPath === "/" ? "bg-brandSecoundry text-white" : "text-brandDark bg-transparent"} 
                        px-2 sm:px-4 lg:px-8  py-2 md:py-3  flex items-center justify-start text-sm sm:text-base lg:text-xl font-inter font-bold gap-1 hover:bg-brandLite  duration-300 mt-2`}
                    >
                        <IoMdHome className='mb-1' />
                        <span>Home</span>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default UserDashboardNav