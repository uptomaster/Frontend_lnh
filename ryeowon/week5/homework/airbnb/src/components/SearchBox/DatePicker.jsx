import { useState } from "react"
import DatePicker from "react-datepicker"; //달력 라이브러리
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent() {
    const [checkIn, setcheckIn] = useState(null);
    const [checkOut, setcheckOut] = useState(null);

    return (
        <div>
            <label> 체크인 </label>
            <DatePicker //얘는 input이나 select처럼 html이 자체적으로 값 관리해주지 않음 -> 직접 상태 관리 필요
                selected={checkIn}
                onChange={(date)=>setcheckIn(date)} //유저가 날짜 클릭하면 DatePicker 컴포넌트가 알아서 날짜를 Date 객체로 만들어서 전달해줌
                maxDate={checkOut}
                placeholderText="날짜 추가"
                dateFormat="M월 d일 (eee)"
            />
            <label> 체크아웃 </label>
            <DatePicker
                selected={checkOut}
                onChange={(date)=>setcheckOut(date)}
                minDate={checkIn}
                placeholderText="날짜 추가"
                dateFormat="M월 d일 (eee)"
            />
        </div>
    )
}

export default DatePickerComponent;