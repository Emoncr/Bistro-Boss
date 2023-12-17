"use client"


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";













const SliderTestimonial = () => {

    //====SLider Functions=====//
    function SamplePrevArrow({ onClick }) {
        return (
            <div
                className='absolute top-1/2 left-0 z-10  -translate-y-1/2 p-2 sm:p-4 rounded-e-md  flex items-center justify-center cursor-pointer '
                onClick={onClick}
            >
                <SlArrowLeft className='text-[#007AFF] text-2xl sm:text-3xl' />
            </div>
        )
    }
    function SampleNextArrow({ onClick }) {
        return (
            <div
                className='absolute top-1/2 right-0 z-10  -translate-y-1/2 p-2 sm:p-4 rounded-s-md  flex items-center justify-center cursor-pointer   duration-300'
                onClick={onClick}
            >
                <SlArrowRight className='text-[#007AFF] text-2xl sm:text-3xl' />
            </div>
        )
    }

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        appendDots: dots => (
            <div style={{ bottom: -30, }}>
                <ul style={{ margin: "0px", color: '#fff' }}> {dots} </ul>
            </div>
        ),
    };





    return (
        <>
            <Slider {...settings}>
                <div>
                    <div className="image_container flex justify-center mt-7 sm:mt-12 ">
                        <img className='w-32 sm:w-auto' src="/dynamic images/rating.png" alt="rating" />
                    </div>
                    <div className="image_container flex justify-center mt-7 sm:mt-12">
                        <img className='w-20 sm:w-auto' src="/icons/quote-left 1.png" alt="quote icon" />
                    </div>
                    <p className='mt-5 sm:mt-10 grid grid-cols-1 text-center text-[#444] text-base sm:text-xl font-normal font-inter max-w-[1096px] mx-auto'>
                        Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        <span className='text-[#CD9003] font-inter text-2xl sm:text-[32px] font-medium text-center mt-1'>JANE DOE</span>
                    </p>
                </div>
                <div>
                    <div className="image_container flex justify-center mt-7 sm:mt-12 ">
                        <img className='w-32 sm:w-auto' src="/dynamic images/rating.png" alt="rating" />
                    </div>
                    <div className="image_container flex justify-center mt-7 sm:mt-12">
                        <img className='w-20 sm:w-auto' src="/icons/quote-left 1.png" alt="quote icon" />
                    </div>
                    <p className='mt-5 sm:mt-10 grid grid-cols-1 text-center text-[#444] text-base sm:text-xl font-normal font-inter max-w-[1096px] mx-auto'>
                        Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        <span className='text-[#CD9003] font-inter text-2xl sm:text-[32px] font-medium text-center mt-1'>JANE DOE</span>
                    </p>
                </div>
                <div>
                    <div className="image_container flex justify-center mt-7 sm:mt-12 ">
                        <img className='w-32 sm:w-auto' src="/dynamic images/rating.png" alt="rating" />
                    </div>
                    <div className="image_container flex justify-center mt-7 sm:mt-12">
                        <img className='w-20 sm:w-auto' src="/icons/quote-left 1.png" alt="quote icon" />
                    </div>
                    <p className='mt-5 sm:mt-10 grid grid-cols-1 text-center text-[#444] text-base sm:text-xl font-normal font-inter max-w-[1096px] mx-auto'>
                        Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        <span className='text-[#CD9003] font-inter text-2xl sm:text-[32px] font-medium text-center mt-1'>JANE DOE</span>
                    </p>
                </div>
            </Slider>
        </>
    )
}

export default SliderTestimonial