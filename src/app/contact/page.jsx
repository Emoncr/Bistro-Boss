import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
const Contact = () => {
    return (
        <>
            <section className='contact_bg bg-cover bg-no-repeat bg-center py-12 pt-20 sm:py-28 sm:pt-[240px]'>
                <div className="container  ">
                    <div className='bg-[#15151599] py-36 px-3 '>
                        <h1 className=' text-white text-3xl sm:text-5xl lg:text-[88px] font-cinzel font-bold text-center '>CONTACT US</h1>
                        <p className=' text-white text-[18px] sm:text-2xl font-cinzel font-semibold text-center'>Would you like to try a dish?</p>
                    </div>
                </div>
            </section>
            <section className=' py-12 sm:py-20 lg:py-130 lg:pb-72'>
                <div className="container">
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
                                <p className="text-brandDark text-center text-2xl font-medium font-inter leading-normal">PHONE</p>
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
                    <div className="mt-16 md:mt-[130px]">
                        <div className="heading_container">
                            <p className='tiny_heading'>---Send Us a Message---</p>
                            <div className='divider_1'></div>
                            <h2 className='heading '>CONTACT FORM</h2>
                            <div className='divider_2 '></div>
                        </div>
                    </div>
                    <form className="form_cotainer bg-[#F3F3F3] pt-10 md:pt-20 pb-10 px-10 lg:px-20 md:pb-[62px] mt-11">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <label htmlFor="name" className="text-[#444] font-inter text-xl font-semibold flex flex-col">Name*
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="input_feild mt-4"
                                />
                            </label>
                            <label htmlFor="name" className="text-[#444] font-inter text-xl font-semibold flex flex-col">Email*
                                <input
                                    type="email"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="input_feild mt-4"
                                />
                            </label>
                        </div>
                        <div className="grid grid-cols-1 gap-6 mt-6">
                            <label htmlFor="name" className="text-[#444] font-inter text-xl font-semibold flex flex-col">Phone*
                                <input
                                    type="phone"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="input_feild mt-4"
                                />
                            </label>
                            <label htmlFor="name" className="text-[#444] font-inter text-xl font-semibold flex flex-col">Message*
                                <textarea
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="input_feild h-[300px] mt-4"
                                />
                            </label>
                        </div>
                        <div className="submit_btn_container mt-40 sm:mt-16 lg:mt-28 flex items-center justify-center">
                            <button className="text-white  font-bold font-inter py-2 sm:py-4 px-[22px] bg-gradient-to-l from-yellow-700 to-yellow-900">
                                <span className="flex gap-1 items-center justify-center text-xl">
                                    Send Message
                                    <IoIosSend className="text-3xl"/>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact