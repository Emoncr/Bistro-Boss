import React from 'react'

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


                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login