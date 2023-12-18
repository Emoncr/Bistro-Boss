import ChefRecommendCard from '@/Components/Card-ChefRecommend'
import React from 'react'

const OurShop = () => {
    return (
        <>
            <section className='our_shop_bg bg-cover bg-no-repeat bg-center py-12 pt-20 sm:py-28 sm:pt-[240px]'>
                <div className="container  ">
                    <div className='bg-[#15151599] py-36 px-3 '>
                        <h1 className=' text-white text-3xl sm:text-5xl lg:text-[88px] font-cinzel font-bold text-center '>OUR SHOP</h1>
                        <p className=' text-white text-[18px] sm:text-2xl font-cinzel font-semibold text-center'>Would you like to try a dish?</p>
                    </div>
                </div>
            </section>
            <section className=' py-12 sm:py-20 lg:py-130 '>
                <div className="container">
                    <div className=" mx-auto flex items-center justify-center flex-wrap gap-3 sm:gap-8 md:gap-[57px] ">
                        <button className='text-brandDark text-sm sm:text-base lg:text-[24px] font-inter font-medium uppercase '>salad</button>
                        <button className='text-brandDark text-sm sm:text-base lg:text-[24px] font-inter font-medium uppercase '>pizza</button>
                        <button className='text-brandDark text-sm sm:text-base lg:text-[24px] font-inter font-medium uppercase '>soups</button>
                        <button className='text-brandDark text-sm sm:text-base lg:text-[24px] font-inter font-medium uppercase '>desserts</button>
                        <button className='text-brandDark text-sm sm:text-base lg:text-[24px] font-inter font-medium uppercase '>drinks</button>
                    </div>
                    <div className="grid grid-cols-1 min-[520px]:grid-cols-2  min-[920px]:grid-cols-3 gap-6 mt-6 sm:mt-10 lg:mt-15">
                        <ChefRecommendCard />
                        <ChefRecommendCard />
                        <ChefRecommendCard />
                        <ChefRecommendCard />
                        <ChefRecommendCard />
                        <ChefRecommendCard />
                        <ChefRecommendCard />
                        <ChefRecommendCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurShop