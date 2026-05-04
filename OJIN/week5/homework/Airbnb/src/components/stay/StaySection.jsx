import PriceControlButton from "./PriceControlButton";
import StayCard from "./StayCard";
import stays from "../../data/stays";
import { useState } from "react";

function StaySection() {
  const [price, setPrice] = useState(0);

  const handleIncrease = () => {
    setPrice((price) => price + 10000);
  };
  const handleDecrease = () => {
    setPrice((price) => price - 10000);
  };

  //   map을 통해 stay 데이터들을 순회하며 가격을 가져옴. 이때 replace를 통해 ₩와 ,를 제거하고 숫자만 가지고 옴
  const adjustedStays = stays.map((stay) => {
    const basePrice = Number(stay.prices.replace(/[^\d]/g, ""));

    // 가격 조절 버튼으로 변경된 값을 반영하고, 삼항 연산자로 0원 이하로 내려가지 않도록 처리. prices는 ₩와 ,를 포함한 문자열로 다시 반환
    return {
      ...stay,
      prices: `₩${(basePrice + price < 0 ? 0 : basePrice + price).toLocaleString("ko-KR")}`,
    };
  });

  return (
    <section className="px-6 py-8 md:px-10 md:py-12 lg:px-20 lg:py-12">
      <div>
        <div>
          <h2 className="pb-2 text-[32px]">서울의 게스트 선호 숙소</h2>
          <div className="text-[16px] pb-4 md:text-[18px] md:pb-6">
            평점, 후기, 신뢰도를 바탕으로 에어비앤비에서 가장 사랑받는 숙소로
            손꼽히는 곳입니다.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 px-6 md:px-3 md:grid-cols-3 lg:grid-cols-4">
          {adjustedStays.map((stay) => (
            <StayCard key={stay.id} stay={stay} />
          ))}
        </div>
      </div>
      <div className="mt-8 flex gap-10">
        <button
          type="button"
          className="text-[14px] border border-black rounded-[12px] px-6 py-3 cursor-pointer"
        >
          더 찾아보기
        </button>
        <PriceControlButton
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </div>
    </section>
  );
}

export default StaySection;
