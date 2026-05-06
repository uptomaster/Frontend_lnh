function HotelCard({src, name, star, reviewNum, intro, bed, frommonth, fromday, tomonth, today, total}) {
    return(
        <div>
            <img src={src} alt="숙소 사진" className="aspect-square object-cover rounded-2xl"/>
            <div className="flex justify-between my-[7px]">
                <span> {name} </span>
                <p > ★ {star} ({reviewNum}) </p>
            </div>
            <ul className="text-gray-500">
                <li>{intro}</li>
                <li>침대 {bed}개</li>
                <li>
                    {frommonth==tomonth ? `${frommonth}월 ${fromday}일 ~ ${today}일` : `${frommonth}월 ${fromday}일 ~ ${tomonth}월 ${today}일`}
                </li>
            </ul>
            <p className="my-[7px]"> 총액 ₩{total}</p>
        </div>
    )
}

export default HotelCard;