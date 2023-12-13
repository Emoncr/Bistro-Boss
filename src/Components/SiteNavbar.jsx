import Link from 'next/link'
import React from 'react'

const SiteNavbar = () => {
    return (
        <div className='pt-8 pb-7 px-3 md:px-10  bg-[#15151580]'>
            <div className="nav_container flex items-center justify-between">
                <div className="logo_container">
                    <img src="/Logos/Logo.png" alt="Logo" />
                </div>
                <div className="nav_items_mobile">
                    <ul>
                        <li>
                            <Link href={"/"}>
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SiteNavbar