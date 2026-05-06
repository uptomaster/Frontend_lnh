import DatePickerComponent from "./DatePicker";
import GuestSelect from "./GuestSelect";
import LocationInput from "./LocationInput";

function SearchBox() {
    return (
        <div className="p-[32px]">
            <h1 className="text-[32px] font-semibold leading-[44px]"> 서울 숙소 찾기 </h1>
            <p className="my-[3px] text-base text-[#717171] font-[10px] leading-5"> 멋진 여행의 시작은 에어비앤비. 어떤 여행에든 딱 맞는 특별한 숙소를 찾아보세요. </p>
            <div className="w-[354px] pt-[5px]">
                <LocationInput />
                <DatePickerComponent />
                <GuestSelect />
                <button className="w-full bg-gradient-to-r to-[#d50765] from-[#ef2953] text-white py-3 rounded-lg mt-2 shadow-[10px] shadow-inner">
                    검색하기
                </button>
            </div>
        </div>
    )
}

export default SearchBox;