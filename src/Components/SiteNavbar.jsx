"use client"
import Link from 'next/link'
import React from 'react'

const SiteNavbar = () => {
    return (
        <>
            <div className='pt-8 pb-7 px-3 md:px-10  bg-[#15151580] absolute top-0 w-full z-10'>
                <nav className="nav_container  items-center justify-between hidden md:flex">
                    <div className="logo_container">
                        <img src="/Logos/Logo.png" alt="Logo" />
                    </div>
                    <div className="nav_item  ">
                        <ul className='flex items-center justify-end gap-5'>
                            <li>
                                <Link
                                    className='font-inter text-xl font-extrabold text-white uppercase'
                                    href={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='font-inter text-xl font-extrabold text-white uppercase'
                                    href={"/contact"}>
                                    CONTACT us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='font-inter text-xl font-extrabold text-white uppercase'
                                    href={"/dashboard"}>
                                    DASHBOARD
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='font-inter text-xl font-extrabold text-white uppercase'
                                    href={"/our_menu"}
                                >
                                    Our Menu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='font-inter text-xl font-extrabold text-white uppercase'
                                    href={"/our_shop"}>
                                    Our Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='font-inter text-xl font-extrabold text-white uppercase'
                                    href={"/"}>
                                    Cart
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='font-inter text-xl font-extrabold text-white uppercase'
                                    href={"/"}>
                                    SIGN In
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='font-inter text-xl font-extrabold text-white uppercase'
                                    href={"/"}>
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default SiteNavbar