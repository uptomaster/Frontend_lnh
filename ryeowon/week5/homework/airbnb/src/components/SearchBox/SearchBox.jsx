import DatePickerComponent from "./DatePicker";
import GuestSelect from "./GuestSelect";
import LocationInput from "./LocationInput";

function SearchBox() {
    return (
        <div>
            <h1> 서울 숙소 찾기 </h1>
            <p> 멋진 여행의 시작은 에어비앤비. 어떤 여행에든 딱 맞는 특별한 숙소를 찾아보세요. </p>
            <LocationInput />
            <DatePickerComponent />
            <GuestSelect />
            <button> 검색하기 </button>
        </div>
    )
}

export default SearchBox;