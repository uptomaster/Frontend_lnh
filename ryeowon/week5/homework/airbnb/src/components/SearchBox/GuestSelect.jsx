function GuestSelect() {
    return (
        <div className="flex border border-gray-300 rounded-xl my-2 items-center">
            <div className="flex-1 px-[16px] py-[9px] flex flex-col justify-center">
                <label className="text-[12px]"> 성인 </label>
                <div>
                    <select className="text-[15px] w-full">
                        {Array.from ( {length: 17}, (_, i) => ( //Array.from(배열 비슷한것, 반환함수)
                        <option key={i} value={i}>{i}</option> //{length: 17}은 길이가 17인 배열 같은 객체 -> [undefined, undefined...] 17칸 짜리 배열 만들어짐
                        ))}
                    </select>
                </div>
            </div>
            <div className="w-[1px] h-[23px] bg-gray-300 "></div>
            <div className="flex-1 px-[16px] py-[9px] flex flex-col justify-center">
                <label className="text-[12px]"> 어린이 </label>
                <div>
                    <select className="text-[15px] w-full">
                        {Array.from ( {length: 7}, (_, i) => ( //두번째 인자는 배열을 어떻게 채울지 결정, 여기서는 각 인덱스와 값을 i로 채우기
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default GuestSelect;