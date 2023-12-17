
const MenuItem = () => {
    return (
        <>
            <div className="item_container grid grid-cols-12 gap-2 max-w-[648px]">
                <div className="w-full mx-auto col-span-10 ">

                    <div className="menu_content relative pl-15 xl:pl-[152px]  before:absolute  before:bg-[#D9D9D9] before:h-12 before:w-12 xl:before:w-[118px] xl:before:h-[104px] before:rounded-r-[200px] before:rounded-bl-[200px] before:left-0" >


                        <p className="text-sm lg:text-xl text-brandDark font-cinzel font-semibold truncate">
                            ROAST DUCK BREAST ------------------
                        </p>

                        <p className="text-[10px] lg:text-base text-[#737373] font-inter font-normal">
                            Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce
                        </p>


                    </div>
                </div>
                <div className="col-span-2">
                    <p className="text-[#BB8506] text-sm lg:text-xl font-inter font-medium text-right">$14.5</p>
                </div>
            </div>

        </>
    )
}

export default MenuItem