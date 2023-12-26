import React from 'react'
import OrderOnlineSlider from './OrderOnlineSlider'

const OrderOnline = () => {
  return (
    <section className='py-20 pb-28 md:pb-[137px]'>
      <div className="container mx-auto">
        <div className="heading_container">
          <p className='tiny_heading'>---From 11:00am to 10:00pm---</p>
          <div className='divider_1'></div>
          <h2 className='heading'>Order Online</h2>
          <div className='divider_2'></div>
        </div>
        <div className="order_online_slider mt-12">
          <OrderOnlineSlider />
        </div>
      </div>
    </section>
  )
}

export default OrderOnline