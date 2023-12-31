import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";

const OurLocation = () => {
    return (
        <div>
            <div className="heading_container">
                <p className='tiny_heading'>---Visit Us---</p>
                <div className='divider_1'></div>
                <h2 className='heading '>OUR LOCATION</h2>
                <div className='divider_2 '></div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start ">
                <div className="bg-white border border-[#E8E8E8] max-w-full mx-auto md:max-w-[424px] w-full">
                    <div className="bg-brandPrimary w-full py-6 flex items-center justify-center  relative">
                        <IoCall className="text-3xl text-white text-center" />
                    </div>
                    <div className="bg-[#F3F3F3] mx-8  pt-10 pb-[86px]">
                        <p className="text-brandDark text-center text-2xl font-medium font-inter leading-normal">PHONE</p>
                        <p className="text-center font-inter text-base font-normal text-[#444] mt-4 leading-[26px]">+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className="bg-white border border-[#E8E8E8] max-w-full mx-auto md:max-w-[424px] w-full">
                    <div className="bg-brandPrimary w-full py-6 flex items-center justify-center z-10 relative">
                        <FaLocationDot className="text-3xl text-white text-center" />
                    </div>
                    <div className="bg-[#F3F3F3] mx-8  pt-10 pb-[86px]">
                        <p className="text-brandDark text-center text-2xl font-medium font-inter leading-normal">ADDRESS</p>
                        <p className="text-center font-inter text-base font-normal text-[#444] leading-[26px] mt-4">+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className="bg-white border border-[#E8E8E8] max-w-full mx-auto md:max-w-[424px] w-full">
                    <div className="bg-brandPrimary w-full py-6 flex items-center justify-center z-10 relative">
                        <IoIosTime className="text-3xl text-white text-center" />
                    </div>
                    <div className="bg-[#F3F3F3] mx-8  pt-10 pb-[53px]">
                        <p className="text-brandDark text-center text-2xl font-medium font-inter leading-normal ">WORKING HOURS</p>
                        <p className="text-center font-inter text-base font-normal text-[#444] mt-4 leading-[26px]">Mon - Fri: 08:00 - 22:00</p>
                        <p className="text-center font-inter text-base font-normal text-[#444] mt-1 leading-[26px]">Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurLocation