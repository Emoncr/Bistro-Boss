"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const OrderOnlineSlider = () => {
    //====SLider Functions=====//
    function SamplePrevArrow({ onClick }) {
        return (
            <div className='hidden'>
                <BsArrowLeft className='text-white text-xl sm:text-xl group-hover:text-brand-blue ' />
            </div>
        )
    }
    function SampleNextArrow({ onClick }) {
        return (
            <div className='hidden'>
                <BsArrowRight className='text-white text-xl sm:text-xl group-hover:text-brand-blue ' />
            </div>
        )
    }

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              <ul style={{ bottom: -35, position: 'relative', }}>
                {dots}
              </ul>
            </div>
          ),
      
    };
    return (
        <div className='slider_cotnainer slider_custom_dot'>
            <Slider className=' mx-auto sm:max-w-full' {...settings}>
                <div >
                    <img className='h-[350px] md:h-[450px] w-full object-fill' src="/images/slide1.jpg" alt="Hero Image" />
                </div>
                <div >
                    <img className='h-[350px] md:h-[450px] w-full object-fill' src="/images/slide2.jpg" alt="Hero Image" />
                </div>
                <div >
                    <img className=' h-[350px] md:h-[450px] w-full object-fill' src="/images/slide3.jpg" alt="Hero Image" />
                </div>
                <div >
                    <img className='h-[350px] md:h-[450px] w-full object-fill' src="/images/slide5.jpg" alt="Hero Image" />
                </div>
                <div >
                    <img className='h-[350px] md:h-[450px] w-full object-fill' src="/images/slide4.jpg" alt="Hero Image" />
                </div>
            </Slider>
        </div>
    )
}

export default OrderOnlineSlider