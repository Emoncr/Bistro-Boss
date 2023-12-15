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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
   
  };


  return (
    <section >
      <div className="hero_container">
        <Slider className='w-full' {...settings}>
          <div >
            <img className=' h-[220px] sm:h-[350px] md:h-[450px] lg:h-[650px] xl:h-[804px] w-full object-fill' src="/images/01.jpg" alt="Hero Image" />
          </div>
          <div >
            <img className=' h-[220px] sm:h-[350px] md:h-[450px] lg:h-[650px] xl:h-[804px] w-full object-fill' src="/images/02.jpg" alt="Hero Image" />
          </div>
          <div >
            <img className='  h-[220px] sm:h-[350px] md:h-[450px] lg:h-[650px] xl:h-[804px] w-full object-fill' src="/images/03.png" alt="Hero Image" />
          </div>
          <div >
            <img className='  h-[220px] sm:h-[350px] md:h-[450px] lg:h-[650px] xl:h-[804px] w-full object-fill' src="/images/04.jpg" alt="Hero Image" />
          </div>
          <div >
            <img className='  h-[220px] sm:h-[350px] md:h-[450px] lg:h-[650px] xl:h-[804px] w-full object-fill' src="/images/05.png" alt="Hero Image" />
          </div>
          <div >
            <img className='  h-[220px] sm:h-[350px] md:h-[450px] lg:h-[650px] xl:h-[804px] w-full object-fill' src="/images/06.png" alt="Hero Image" />
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Hero