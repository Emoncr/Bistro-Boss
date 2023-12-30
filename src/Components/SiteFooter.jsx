"use client"
import { usePathname } from 'next/navigation';
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from "react-icons/fa";




const SiteFooter = () => {
    const pathName = usePathname()
    return (
        <>
            {
                pathName !== "/login" || "/dashboard" &&

                <footer>
                    <div className="content_container grid grid-cols-1 sm:grid-cols-2">
                        <div className='bg-[#1F2937] py-12 sm:py-24 '>
                            <div className="cotnent flex items-center flex-col justify-center md:px-5">
                                <h5 className='text-white font-inter text-2xl sm:text-[32px] font-medium'>  CONTACT US </h5>
                                <p className='flex items-center flex-col justify-center mt-3 sm:mt-6 text-white font-inter font-medium text-base sm:text-xl leading-9'>
                                    <span>123 ABS Street, Uni 21, Bangladesh</span>
                                    <span>+88 123456789</span>
                                    <span>Mon - Fri: 08:00 - 22:00</span>
                                    <span>Sat - Sun: 10:00 - 23:00</span>
                                </p>
                            </div>
                        </div>
                        <div className='bg-[#111827] py-12 sm:py-24 flex items-center flex-col justify-start'>
                            <div className='md:px-5'>
                                <h5 className='text-white text-center font-inter text-2xl sm:text-[32px] font-medium'>Follow US</h5>
                                <p className='mt-3 sm:mt-6 text-white font-inter font-medium text-base sm:text-xl leading-9'>Join us on social media</p>
                                <p className='flex items-center  justify-center mt-3 sm:mt-6 text-white text-3xl gap-8 leading-9'>
                                    <FaFacebookF />
                                    <BsInstagram />
                                    <BsTwitter />
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            }
        </>
    )
}

export default SiteFooter