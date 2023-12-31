"use client"

import { useState } from "react";
import { FaTable } from "react-icons/fa";
import PaymentForm from "./PaymentForm";
const ReservationForm = () => {

    const [isFormSubmited, setIsFormSubmited] = useState(false);



    return (
        <>
            {
                isFormSubmited
                    ?
                    <PaymentForm />
                    :
                    <form onSubmit={()=>setIsFormSubmited(true)}>
                        <div className=' max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-6'>
                            <label className="text-[#444] font-inter text-xl font-semibold flex flex-col">Date*
                                <input
                                    type="date"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="input_feild border mt-3 text-[#A1A1A1] font-inter text-sm sm:text-base font-medium border-[#E8E8E8] rounded-lg"
                                />
                            </label>
                            <label className="text-[#444] font-inter text-xl font-semibold flex flex-col">Time*
                                <input
                                    type="time"
                                    name="time"
                                    required
                                    placeholder="Enter your name"
                                    className="input_feild border mt-3 text-[#A1A1A1] font-inter text-sm sm:text-base font-medium border-[#E8E8E8] rounded-lg"
                                />
                            </label>
                            <label className="text-[#444] font-inter text-xl font-semibold flex flex-col">Guest*
                                <input
                                    type="number"
                                    name="time"
                                    min={1}
                                    required
                                    placeholder="1"
                                    className="input_feild border mt-3  font-inter font-medium border-[#E8E8E8] rounded-lg"
                                />
                            </label>
                            <label className="text-[#444] font-inter text-xl font-semibold flex flex-col">Name*
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="input_feild border mt-3  font-inter  font-medium border-[#E8E8E8] rounded-lg"
                                />
                            </label>
                            <label className="text-[#444] font-inter text-xl font-semibold flex flex-col">Phone*
                                <input
                                    type="tel"
                                    name="name"
                                    required
                                    placeholder="Phone"
                                    className="input_feild border mt-3  font-inter font-medium border-[#E8E8E8] rounded-lg"
                                />
                            </label>
                            <label className="text-[#444] font-inter text-xl font-semibold flex flex-col">Email*
                                <input
                                    type="email"
                                    name="name"
                                    required
                                    placeholder="Email"
                                    className="input_feild border mt-3  font-inter font-medium border-[#E8E8E8] rounded-lg"
                                />
                            </label>
                        </div>

                        <div className="btn_container flex items-center justify-center mt-5 sm:mt-8">
                            <button
                                className='brand_btn_mix'
                                type='submit'
                            >
                                <span className="flex items-center justify-center gap-1">Book A Table <FaTable /> </span>
                            </button>
                        </div>
                    </form>
            }
        </>
    )
}

export default ReservationForm