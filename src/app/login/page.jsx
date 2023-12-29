"use client"

import LoginForm from '@/Components/LoginForm';
import SingInForm from '@/Components/SingInForm';
import React, { useState } from 'react'
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";


const Login = () => {
    const [isLogin, setIsLogin] = useState(true);




    return (
        <section className='py-16 pb-28 lg:py-28 login_bg bg-cover bg-no-repeat bg-center px-4 md:px-7 lg:px-10'>
            <div className="container mx-auto loginBoxShadow  ">
                <div className='grid gird-cols-1 md:grid-cols-2 py-10 pt-5 md:pt-20 md:py-20 gap-6'>
                    <div className='image_container flex items-center justify-center'>
                        <img src="/images/login img.png" alt="Login Image" />
                    </div>
                    <div className="form_container max-w-[536px] mx-auto w-full">
                        <div>
                            {
                                isLogin ? <LoginForm /> : <SingInForm />
                            }
                        </div>
                        <div>
                            
                            {
                                isLogin ?
                                    <p className='text-brandPrimary text-base sm:text-xl font-inter sm:mt-8 mt-4   font-medium text-center'>New here?
                                        <span
                                            onClick={() => setIsLogin(!isLogin)}
                                            className='font-bold hover:underline cursor-pointer ml-1'>
                                            Create a New Account
                                        </span>
                                    </p>
                                    :
                                    <p className='text-brandPrimary text-base sm:text-xl font-inter sm:mt-8 mt-4   font-medium text-center'>Already registered?
                                        <span
                                            onClick={() => setIsLogin(!isLogin)}
                                            className='font-bold hover:underline cursor-pointer ml-1'>
                                            Go to log in
                                        </span>
                                    </p>
                            }



                            <p className='text-[#444] text-base sm:text-xl font-inter sm:mt-6 mt-3  font-medium text-center'>
                                Or sign in with
                            </p>

                            <div className='flex items-center justify-center mt-6 gap-5'>
                                <button className='w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] border-2 border-[#444] rounded-full flex items-center justify-center text-[#444] text-xl sm:text-2xl hover:bg-brandSecoundry/20' >
                                    <FaFacebookF />
                                </button>
                                <button className='w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] border-2 border-[#444] rounded-full flex items-center justify-center text-[#444] text-xl sm:text-2xl hover:bg-brandSecoundry/20' >
                                    <FaGoogle />
                                </button>
                                <button className='w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] border-2 border-[#444] rounded-full flex items-center justify-center text-[#444] text-xl sm:text-2xl hover:bg-brandSecoundry/20' >
                                    <FaGithub />
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