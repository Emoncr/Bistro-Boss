"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


const Hero = () => {

  //====SLider Functions=====//
  function SamplePrevArrow({ onClick }) {
    return (
      <div className='hidden'>
      </div>
    )
  }
  function SampleNextArrow({ onClick }) {
    return (
      <div className='hidden'>
      </div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ bottom: 104, position: 'relative', }}>
          {dots}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              <ul style={{ bottom: 80, position: 'relative', }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              <ul style={{ bottom: 80, position: 'relative', }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              <ul style={{ bottom: 70, position: 'relative', }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              <ul style={{ bottom: 50, position: 'relative', }}>
                {dots}
              </ul>
            </div>
          ),
        }
      }
    ]

  };


  return (
    <section >
      <div className="hero_container slider_custom_dot">
        <Slider className='w-full' {...settings}>
          <div >
            <img className=' h-[350px] sm:h-[450px] md:h-[500px] lg:h-[650px] xl:h-[804px] w-full object-fill' src="/images/01.jpg" alt="Hero Image" />
          </div>
          <div >
            <img className=' h-[350px] sm:h-[450px] md:h-[500px] lg:h-[650px] xl:h-[804px] w-full object-fill' src="/images/02.jpg" alt="Hero Image" />
          </div>
          <div >
            <img className='  h-[350px] sm:h-[450px] md:h-[500px] lg:h-[650px] xl:h-[804px] w-full object-fill' src="/images/03.png" alt="Hero Image" />
          </div>
          <div >
            <img className='  h-[350px] sm:h-[450px] md:h-[500px] lg:h-[650px] xl:h-[804px] w-full object-fill' src="/images/04.jpg" alt="Hero Image" />
          </div>
          <div >
            <img className='  h-[350px] sm:h-[450px] md:h-[500px] lg:h-[650px] xl:h-[804px] w-full object-fill' src="/images/05.png" alt="Hero Image" />
          </div>
          <div >
            <img className='  h-[350px] sm:h-[450px] md:h-[500px] lg:h-[650px] xl:h-[804px] w-full object-fill' src="/images/06.png" alt="Hero Image" />
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Hero