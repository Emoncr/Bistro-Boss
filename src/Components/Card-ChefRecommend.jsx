import React from 'react'

const ChefRecommendCard = () => {
    return (
        <div className='max-w-[424px] mx-auto min-[520px]:mr-auto min-[520px]:ml-0'>
            <div className="image_container">
                <img className='lg:min-h-[300px] max-h-[300px] w-full h-full object-cover ' src="/dynamic images/chef recomand Image.png" alt="Card Image" />
            </div>
            <div className="card_body bg-[#F3F3F3] px-5 py-6 sm:px-8 sm:py-6 lg:px-10 lg:py-8">
                <h4 className='text-brandDark text-base sm:text-xl lg:text-[24px] font-inter font-semibold  text-center truncate'>Caeser Salad</h4>
                <p className='text-sm sm:text-base font-inter font-normal text-center mt-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>

                <div className="btn-container flex items-center justify-center mt-6">
                    <button className='brand_btn_yellow'>
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChefRecommendCard