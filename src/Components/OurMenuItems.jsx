import React from 'react'
import MenuItem from './MenuItem'

const OurMenuItems = () => {
    return (
        <section className='pb-12'>
            <div className='our_menu_item_bg bg-center bg-cover bg-no-repeat py-16 md:py-80 lg:py-44'>
                <div className="container">
                    <div className="bg-brandDark/60 px-5 max-w-[1096px] mx-auto py-10 md:py-16 lg:pt-[102px] lg:pb-[130px] ">
                        <h2 className='text-3xl md:text-[45px] text-white font-cinzel font-semibold text-center '>DESSERTS</h2>
                        <p className='font-inter text-sm sm:text-base font-semibold text-center text-white max-w-[841px] mx-auto'>
                            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container pt-10 sm:pt-16 lg:pt-28">
                <div>
                    <div className="menu_container grid gap-y-5 xl:gap-y-12 gap-x-6 xl:gap-x-8 grid-cols-1 sm:grid-cols-2 ">
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                    </div>
                    <div className="btn_container flex items-center justify-center mt-10 lg:mt-70">
                        <button className='brand_btn_dark '>
                            ORDER YOUR FAVOURITE FOOD
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default OurMenuItems