import React from 'react'
import ChefRecommendCard from './Card-ChefRecommend'

const ChefRecommends = () => {
  return (
    <section className='py-10 sm:py-16 lg:py-[130px]'>
      <div className="container">
        <div className="heading_container">
          <p className='tiny_heading'>---Should Try---</p>
          <div className='divider_1'></div>
          <h2 className='heading'>CHEF RECOMMENDS</h2>
          <div className='divider_2 '></div>
        </div>
        <div className="card_container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <ChefRecommendCard />
          <ChefRecommendCard />
          <ChefRecommendCard />
        </div>
      </div>
    </section>
  )
}

export default ChefRecommends