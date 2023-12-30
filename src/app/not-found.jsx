import Link from 'next/link'
import React from 'react'
import { FaHome } from "react-icons/fa";
const notFound = () => {
    return (
        <section className='h-screen flex items-center justify-center'>
            <div className="container ">
                <div className="img-container flex items-center justify-center">
                    <img src="/images/notFound.png" alt="Not Found Images" />
                </div>
                <div className='mt-5 flex items-center justify-center'>
                    <Link href={"/"} className='py-2 md:py-3 px-5 md:px-10 bg-brandDark text-white font-inter font-bold text-base sm:text-xl uppercase'>
                        <span className='flex items-center justify-center gap-1 '>
                            Back To Home <FaHome className='mb-1'/>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default notFound