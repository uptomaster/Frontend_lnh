import { useState } from "react";
import HotelCard from "./HotelCard";
import home1 from "../../assets/home1.jpeg";
import home2 from "../../assets/home2.jpeg";
import home3 from "../../assets/home3.jpeg";
import home4 from "../../assets/home4.jpeg";

function Hotel({ title, info }) {
  const hotels = [
    {
      id: 1,
      src: home1,
      name: "서울의 집",
      star: "5.0",
      reviewNum: "8",
      intro: "[고척돔 도보10분] 따뜻한 조명이 머무르는...",
      bed: 2,
      frommonth: 5,
      fromday: 17,
      tomonth: 5,
      today: 22,
      total: "431,052",
    },
    {
      id: 2,
      src: home2,
      name: "서울의 집",
      star: "4.94",
      reviewNum: "111",
      intro: "[주차O/3bed/무료짐보관] KspoDome/...",
      bed: 3,
      frommonth: 5,
      fromday: 17,
      tomonth: 5,
      today: 22,
      total: "461,841",
    },
    {
      id: 3,
      src: home3,
      name: "Guri-si의 아파트",
      star: "5.0",
      reviewNum: "28",
      intro: "[Basilla_210] 구리/ 잠실20분/성수50분/...",
      bed: 1,
      frommonth: 5,
      fromday: 11,
      tomonth: 5,
      today: 16,
      total: "480,000",
    },
    {
      id: 4,
      src: home4,
      name: "서울의 집",
      star: "4.93",
      reviewNum: "41",
      intro: "다온101",
      bed: 2,
      frommonth: 5,
      fromday: 10,
      tomonth: 5,
      today: 15,
      total: "300,377",
    },
  ];

  const [prices, setPrices] = useState(
    hotels.map((item) => Number(item.total.replaceAll(",", ""))),
  );

  const onClickPlus = () => {
    setPrices(prices.map((price) => price + 10000));
  };

  const onClickMinus = () => {
      setPrices(prices.map((price) => Math.max(price - 10000, 0)));
  };

  return (
    <div className="py-[50px]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[32px]">{title}</h2>
        <div className="text-[18px] font-light pb-[24px]">{info}</div>

        <div className="grid grid-cols-4 gap-[24px]">
          {hotels.map((item, index) => (
            <HotelCard key={item.id} {...item} price={prices[index]} />
          ))}
        </div>
        <div>
          <div className="my-[20px]">
            <a
              href="#"
              className="border border-gray-800 rounded-lg px-[20px] py-[11px] inline-flex items-center justify-center"
            >
              {" "}
              더 찾아보기{" "}
            </a>
            <button
              id="plus"
              className="mx-[25px] cursor-pointer"
              onClick={onClickPlus}
            >
              {" "}
              +{" "}
            </button>
            <button
              id="minus"
              className="mx-[8px] cursor-pointer"
              onClick={onClickMinus}
            >
              {" "}
              –{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
