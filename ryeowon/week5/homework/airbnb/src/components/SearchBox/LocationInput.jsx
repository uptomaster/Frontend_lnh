import { useState } from "react";

function LocationInput() {
  const [menu, setmenu] = useState([]);

  const onChange = async (e) => {
    const value = e.target.value;

    if (!value.trim()) { //입력값 없으면 요청 x
      setmenu([]);
      return;
    }

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=서울 ${value}&format=json&limit=5&accept-language=ko` //주소에 요청 보내기
    );

    const data = await response.json(); //응답을 json 객체로 변환, 배열 형태로 들어옴
    setmenu(data); //받아온 데이터가 화면에 리렌더링되도록 state 변경
  };

  return (
    <div className="w-[354px] py-[9px] px-[16px] border border-gray-300 rounded-xl my-2 flex-1 flex flex-col justify-center">
      <label className="text-[12px]">위치</label>

      <input
        type="text"
        placeholder="근처 추천 장소"
        onChange={onChange}
        className="w-[322px] h-[24px]"
      />

      <ul>
        {menu.map((item) => ( //menu 자체가 배열이니까 바로 map() 적용, item = 배열 요소 하나하나. 각 요소의 아이디를 키로 쓰고 이름을 렌더링하기
          <li key={item.place_id}> 
            {item.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocationInput;