import React from 'react'
import SliderTestimonial from './Slider-testimonial'

const Testimonial = () => {
    return (
        <section className='py-10 pb-70 sm:py-16 sm:pb-[90px] lg:py-[130px] lg:pb-[160px]'>
            <div className="container">
                <div className="heading_container">
                    <p className='tiny_heading'>---What Our Clients Say---</p>
                    <div className='divider_1'></div>
                    <h2 className='heading '>TESTIMONIALS</h2>
                    <div className='divider_2 '></div>
                </div>
                <div className="slider_container">
                    <SliderTestimonial />
                </div>
            </div>
        </section>
    )
}

export default Testimonial