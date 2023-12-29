"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react';
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";


const SiteNavbar = () => {
    const pathname = usePathname();
    const [menuActive, setMenuActive] = useState(false)



    return (
        <>
            {/* <div className={`feature_info  transition-max-h ${isFeatureActive ? 'max-h-screen' : 'max-h-0'} overflow-hidden duration-500 ease-in-ou`}/> */}
            {
                pathname !== "/login" &&
                <div
                    className={`py-4 sm:py-6 md:pt-8 md:pb-7 px-3 md:px-10 bg-brandSecoundry  md:bg-[#15151580]  md:absolute top-0 w-full z-10 shadow-sm md:shadow-none
                     transition-all duration-500 ease-in-out`
                    }

                >

                    {/* ======== Navbar Desktop ========= */}
                    <nav className="nav_container  items-center justify-between hidden md:flex">
                        <div className="logo_container w-full md:max-w-[100px] lg:max-w-[100px] xl:max-w-[150px] 2xl:max-w-[200px]">
                            <img src="/Logos/Logo.png" alt="Logo" />
                        </div>
                        <div className="nav_item  ">
                            <ul className='flex items-center justify-end gap-5 2xl:gap-4 xl:gap-3 md:gap-3 '>
                                <li>
                                    <Link
                                        className='font-inter 2xl:text-[18px] xl:text-base text-sm font-extrabold text-white uppercase'
                                        href={"/"}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='font-inter 2xl:text-[18px] xl:text-base text-sm font-extrabold text-white uppercase'
                                        href={"/contact"}>
                                        CONTACT us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='font-inter 2xl:text-[18px] xl:text-base text-sm font-extrabold text-white uppercase'
                                        href={"/dashboard"}>
                                        DASHBOARD
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='font-inter 2xl:text-[18px] xl:text-base text-sm font-extrabold text-white uppercase'
                                        href={"/our_menu"}
                                    >
                                        Our Menu
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='font-inter 2xl:text-[18px] xl:text-base text-sm font-extrabold text-white uppercase'
                                        href={"/our_shop"}>
                                        Our Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='font-inter 2xl:text-[18px] xl:text-base text-sm font-extrabold text-white uppercase'
                                        href={"/"}>
                                        Cart
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='font-inter 2xl:text-[18px] xl:text-base text-sm font-extrabold text-white uppercase'
                                        href={"/login"}>
                                        SIGN In
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link
                                        className='font-inter 2xl:text-[18px] xl:text-base text-sm font-extrabold text-white uppercase'
                                        href={"/"}>
                                        Pro
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </nav>

                    {/* ======== Navbar Mobile ========= */}
                    <nav className="nav_container  items-center justify-between flex md:hidden px-2 ">
                        <div className="logo_container w-[120px] sm:w-[200px]">
                            <img src="/Logos/Logo.png" alt="Logo" />
                        </div>
                        <div>
                            <button
                                className='text-white text-xl p-1'
                                onClick={() => setMenuActive(!menuActive)}
                            >
                                {
                                    menuActive ? <ImCross className='text-red-700' /> : <VscThreeBars />
                                }

                            </button>
                        </div>


                        {
                            menuActive &&
                            <div className="nav_item absolute top-[60px] sm:top-[90px] left-0 right-0 py-10 px-10  bg-brandSecoundry z-50 md:hidden ">
                                <ul className='flex flex-col items-start justify-end gap-6 sm:gap-9 '>
                                    <li>
                                        <Link
                                            onClick={() => setMenuActive(false)}
                                            className='font-inter 2xl:text-[18px] xl:text-base text-base font-extrabold text-white uppercase  underline'
                                            href={"/"}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={() => setMenuActive(false)}
                                            className='font-inter 2xl:text-[18px] xl:text-base text-base font-extrabold text-white uppercase underline'
                                            href={"/contact"}>
                                            CONTACT us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={() => setMenuActive(false)}
                                            className='font-inter 2xl:text-[18px] xl:text-base text-base font-extrabold text-white uppercase  underline'
                                            href={"/dashboard"}>
                                            DASHBOARD
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={() => setMenuActive(false)}
                                            className='font-inter 2xl:text-[18px] xl:text-base text-base font-extrabold text-white uppercase underline'
                                            href={"/our_menu"}
                                        >
                                            Our Menu
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={() => setMenuActive(false)}
                                            className='font-inter 2xl:text-[18px] xl:text-base text-base font-extrabold text-white uppercase underline'
                                            href={"/our_shop"}>
                                            Our Shop
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={() => setMenuActive(false)}
                                            className='font-inter 2xl:text-[18px] xl:text-base text-base font-extrabold text-white uppercase underline'
                                            href={"/"}>
                                            Cart
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={() => setMenuActive(false)}
                                            className='font-inter 2xl:text-[18px] xl:text-base text-base font-extrabold text-white uppercase underline'
                                            href={"/login"}>
                                            SIGN In
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </nav>



                </div>
            }
        </>
    )
}

export default SiteNavbar