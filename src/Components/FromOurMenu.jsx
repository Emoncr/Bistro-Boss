import MenuItem from "./MenuItem"

const FromOurMenu = () => {
  return (
    <section className="pt-12 pb-16  sm:pt-90 sm:pb-130" >
      <div className="container">
        <div className="heading_container">
          <p className='tiny_heading'>---Check it out---</p>
          <div className='divider_1'></div>
          <h2 className='heading'>FROM OUR MENU</h2>
          <div className='divider_2 '></div>
        </div>

        <div className="menu_container mt-8 sm:mt-12">
          <MenuItem />
        </div>

      </div>
    </section>
  )
}

export default FromOurMenu