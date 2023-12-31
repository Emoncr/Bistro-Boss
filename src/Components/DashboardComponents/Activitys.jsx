import React from 'react'
import { FaShoppingCart, FaStar, FaCalendarAlt, FaWallet } from 'react-icons/fa'

const Activitys = () => {
    return (
        <div className='mt-10 md:mt-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className='bg-[#FFEDD5]  rounded-s-lg md:rounded-l-lg px-3 
                    py-20 '>
                    <div className='flex items-center justify-center'>
                        <img className='border-[3px] border-brandPrimary rounded-full' src="/dynamic images/rating.png" alt="User Images" />
                    </div>
                    <h3 className=' mt-5 md:mt-8 lg:mt-12 text-brandDark text-2xl md:text-3xl font-bold font-cinzel uppercase text-center '>Biplob Hasan Emon</h3>
                </div>
                <div className='bg-[#FEF9C3] px-3 
                    py-20 border-brandPrimary rounded-s-lg md:rounded-l-lg'>
                    <p className='text-brandDark text-2xl sm:text-3xl lg:text-[40px] font-semibold  font-cinzel uppercase text-center'>Your Activities</p>

                    <div className='flex flex-col items-center justify-center gap-2 mt-5'>
                        <p className='text-xl sm:text-2xl font-semibol;d font-cinzel flex items-cenetr justify-center text-center font-semibold text-[#0088FE] gap-1'>
                            <FaShoppingCart />
                            <span>Orders: 6</span>
                        </p>
                        <p className='text-xl sm:text-2xl font-semibol;d font-cinzel flex items-cenetr justify-center text-center font-semibold text-[#00C4A1] gap-1'>
                            <FaStar />
                            <span>Reviews: 2</span>
                        </p>
                        <p className='text-xl sm:text-2xl font-semibol;d font-cinzel flex items-cenetr justify-center text-center font-semibold text-[#FFBB28] gap-1'>
                            <FaCalendarAlt />
                            <span>Bookings: 1</span>
                        </p>
                        <p className='text-xl sm:text-2xl font-semibol;d font-cinzel flex items-cenetr justify-center text-center font-semibold text-[#FF8042] gap-1'>
                            <FaWallet />
                            <span>Payment:3</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activitys