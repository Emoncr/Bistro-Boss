
const MenuItem = () => {
    return (
        <div className="item_container flex flex-row items-start gap-1 justify-between">
            <div className="heading_container flex flex-row items-start gap-1 ">
                <div className='bg-[#D9D9D9] h-9 w-9 border-none rounded-r-[200px] rounded-bl-[200px]'>
                </div>
                <div className="max-w-[200px]">
                    <p className="text-sm text-brandDark font-cinzel font-semibold truncate">ROAST DUCK BREAST ----</p>
                    <p className="text-[10px] text-[#737373] font-inter font-normal truncate">
                        Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce
                    </p>
                </div>
            </div>
            <div>
                <p className="text-[#BB8506] text-sm font-inter font-medium">$14.5</p>
            </div>
        </div>
    )
}

export default MenuItem