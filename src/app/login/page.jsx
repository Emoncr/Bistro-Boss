import React from 'react'
import { FaFacebookF,FaGoogle,FaGithub  } from "react-icons/fa";
const Login = () => {
    return (
        <section className='py-16 pb-28 lg:py-28 login_bg bg-cover bg-no-repeat bg-center px-4 md:px-7 lg:px-10'>
            <div className="container mx-auto loginBoxShadow  ">
                <div className='grid gird-cols-1 md:grid-cols-2 py-10 pt-5 md:pt-20 md:py-20 gap-6'>
                    <div className='image_container flex items-center justify-center'>
                        <img src="/images/login img.png" alt="Login Image" />
                    </div>
                    <div className="form_container max-w-[536px] mx-auto w-full">
                        <h4 className='font-inter text-brandDark text-3xl md:text-[40px] font-bold text-center'>Login</h4>
                        <form className='mt-5 mx-5'>
                            <label htmlFor="name" className="text-[#444] font-inter text-xl font-semibold flex flex-col">Email*
                                <input
                                    type="email"
                                    name="name"
                                    required
                                    placeholder="Type here"
                                    className="input_feild mt-2 sm:mt-4"
                                />
                            </label>
                            <label htmlFor="name" className="text-[#444] font-inter text-xl font-semibold flex flex-col mt-6">Password*
                                <input
                                    type="email"
                                    name="name"
                                    required
                                    placeholder="Enter your password"
                                    className="input_feild mt-2 sm:mt-4"
                                />
                            </label>


                            <button
                                type='submit'
                                className='w-full py-4 sm:py-6 rounded-lg bg-brandPrimary/70 mt-5 text-white text-base sm:text-xl font-bold font-inter'
                            >
                                Sign In
                            </button>

                        </form>
                        <div>
                            <p className='text-brandPrimary text-base sm:text-xl font-inter sm:mt-8 mt-4   font-medium text-center'>New here?
                                <span
                                    className='font-bold hover:underline cursor-pointer ml-1'>
                                    Create a New Account
                                </span>
                            </p>
                            <p className='text-[#444] text-base sm:text-xl font-inter sm:mt-6 mt-3  font-medium text-center'>
                                Or sign in with
                            </p>

                            <div className='flex items-center justify-center mt-6 gap-5'>
                                <button className='w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] border-2 border-[#444] rounded-full flex items-center justify-center text-[#444] text-xl sm:text-2xl hover:bg-[#444]/10' >
                                    <FaFacebookF />
                                </button>
                                <button className='w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] border-2 border-[#444] rounded-full flex items-center justify-center text-[#444] text-xl sm:text-2xl hover:bg-[#444]/10' >
                                    <FaGoogle />
                                </button>
                                <button className='w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] border-2 border-[#444] rounded-full flex items-center justify-center text-[#444] text-xl sm:text-2xl hover:bg-[#444]/10' >
                                    <FaGithub  />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login