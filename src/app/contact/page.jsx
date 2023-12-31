
import OurLocation from "@/Components/OurLocation";
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
                    <div>
                        <OurLocation />
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
                            <button className="text-white  font-bold font-inter py-2 sm:py-4 px-[22px] bg-gradient-to-l to-[#835D23] from-[#B58130] duration-500 transition-colors hover:bg-gradient-to-r">
                                <span className="flex gap-1 items-center justify-center text-xl">
                                    Send Message
                                    <IoIosSend className="text-3xl" />
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