import React from 'react'
import { FaWallet } from "react-icons/fa"
import { FaShop } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const OverviewBoxs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 lg:gap-6 mt-6">
            <div className="dashboard_box1 py-8 xl:py-11 flex items-center justify-center rounded-lg">
                <div className="flex items-center justify-center gap-3 ">
                    <p className="text-[40px] xl:text-[55px] text-white">
                        <FaWallet />
                    </p>
                    <p className="font-inter font-extrabold text-white  text-xl  sm:text-2xl lg:text-2xl xl:text-[40px] flex flex-col items-start justify-center leading-[1] ">
                        205
                        <span className="text-base sm:text-2xl  ">Menu</span>
                    </p>
                </div>
            </div>


            <div className="dashboard_box2 py-8 xl:py-11 flex items-center justify-center rounded-lg">
                <div className="flex items-center justify-center gap-3 ">
                    <p className="text-[40px] xl:text-[55px] text-white">
                        <FaShop />
                    </p>
                    <p className="font-inter font-extrabold text-white  text-xl  sm:text-2xl lg:text-2xl xl:text-[40px] flex flex-col items-start justify-center leading-[1] ">
                        103
                        <span className="text-base sm:text-2xl  ">Shop</span>
                    </p>
                </div>
            </div>



            <div className="dashboard_box3 py-8 xl:py-11 flex items-center justify-center rounded-lg">
                <div className="flex items-center justify-center gap-3 ">
                    <p className="text-[40px] xl:text-[55px] text-white">
                        <IoMdMail />
                    </p>
                    <p className="font-inter font-extrabold text-white  text-xl  sm:text-2xl lg:text-2xl xl:text-[40px] flex flex-col items-start justify-center leading-[1] ">
                        03
                        <span className="text-base sm:text-2xl  ">Contact</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default OverviewBoxs