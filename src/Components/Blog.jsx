import React from 'react'

const Blog = () => {
  return (
    <section className='blog_section py-10 sm:py-16 lg:py-[130px] bg-cover bg-no-repeat bg-center'>
      <div className="container">
        <div className="heading_container">
          <p className='tiny_heading'>---Check it out---</p>
          <div className='divider_1 bg-white'></div>
          <h2 className='heading text-white'>FROM OUR MENU</h2>
          <div className='divider_2 bg-white'></div>
        </div>
        <div className=' mt-10 lg:mt-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16 items-center'>
            <div className="image-container">
              <img src="/images/blog hero image.png" alt="Blog Image" />
            </div>
            <div>
              <p className='font-inter text-white text-xl md:text-2xl font-normal '>March 20, 2023</p>
              <h4 className='font-inter text-white  text-xl md:text-2xl font-normal uppercase'>WHERE CAN I GET SOME?</h4>
              <p className='font-inter text-white text-base md:text-xl font-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
              <div className="btn_container">
                <button
                  className='brand_btn_dark border-b-white text-white mt-6 hover:border-transparent duration-300'
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog