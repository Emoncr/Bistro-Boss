import MenuItem from '@/Components/MenuItem'
import OurMenuItems from '@/Components/OurMenuItems'
import PageHeader from '@/Components/PageHeader'
import React from 'react'

const OurMenu = () => {
    return (
        <>
            <PageHeader />

            {/* Todays Offer items */}
            <section className='pt-11 sm:pt-20 md:pt-130 pb-12 '>
                <div className="container">
                    <div className="heading_container">
                        <p className='tiny_heading'>---Don't miss---</p>
                        <div className='divider_1'></div>
                        <h2 className='heading '>TODAY'S OFFER</h2>
                        <div className='divider_2 '></div>
                    </div>
                    <div className="menu_container mt-8 sm:mt-12 grid gap-y-5 xl:gap-y-12 gap-x-6 xl:gap-x-8 grid-cols-1 sm:grid-cols-2 ">
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                    </div>
                    <div className="btn_container flex items-center justify-center mt-10 md:mt-70">
                        <button className='brand_btn_dark '>
                            ORDER YOUR FAVOURITE FOOD
                        </button>
                    </div>
                </div>
            </section>

            <OurMenuItems />
            <OurMenuItems />
            <OurMenuItems />
            <OurMenuItems />
            <OurMenuItems />
            <OurMenuItems />
        </>
    )
}

export default OurMenu