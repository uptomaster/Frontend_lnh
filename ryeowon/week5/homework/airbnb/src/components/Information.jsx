function Information({maintext, infotext, src}) {
    return (
        <div className="py-[12px]">
            <img src={src} alt="로고" className="pb-[24px] w-[24px] y-[24px]"/>
            <h2 className="text-[22px] pb-[12px]"> {maintext} </h2>
            <div className="text-[18px] pb-[4px] font-light"> {infotext} </div>
        </div>
    )
}

export default Information;