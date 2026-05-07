import { useState } from "react";

import Layout from "./components/Layout";
import SearchSection from "./components/SearchSection";
import InfoCard from "./components/InfoCard";
import StayCard from "./components/StayCard";
import MoreButton from "./components/MoreButton";
import PriceControlButton from "./components/PriceControlButton";

import room1 from "./assets/room1.jpg";
import room2 from "./assets/room2.jpg";
import room3 from "./assets/room3.jpg";
import room4 from "./assets/room4.jpg";

function App() {
  const [stays, setStays] = useState([
    {
      id: 1,
      image: room1,
      badge: "게스트 선호",
      name: "강동구의 아파트",
      description: "신축건물/무료주차/엘리베이터",
      bed: "침대 3개",
      date: "5월 12일~17일",
      rating: "★ 5.0",
      price: 609693,
    },
    {
      id: 2,
      image: room2,
      badge: "게스트 선호",
      name: "천호2동의 아파트",
      description: "감성 인테리어/주차/아늑한 숙소",
      bed: "퀸사이즈 침대 1개",
      date: "5월 5일~10일",
      rating: "★ 4.97",
      price: 571144,
    },
    {
      id: 3,
      image: room3,
      badge: "게스트 선호",
      name: "종로구의 아파트",
      description: "안암스테이/루프탑/편의시설",
      bed: "침대 2개",
      date: "5월 17일~22일",
      rating: "★ 5.0",
      price: 825000,
    },
    {
      id: 4,
      image: room4,
      badge: "게스트 선호",
      name: "구로구의 집",
      description: "깔끔한 숙소/쾌적한 공간",
      bed: "침대 3개",
      date: "6월 27일~7월 2일",
      rating: "★ 5.0",
      price: 495000,
    },
  ]);

  const changePrice = (amount) => {
    setStays(
      stays.map((stay) => {
        const nextPrice = stay.price + amount;

        return {
          ...stay,
          price: nextPrice < 0 ? 0 : nextPrice,
        };
      }),
    );
  };

  return (
    <Layout>
      <SearchSection />

      <section className="info-section">
        <InfoCard
          icon="▣"
          title="유연한 일정 변경이 가능한 숙소"
          text="환불 정책이 유연한 숙소를 예약하면 여행 계획이 변경될 경우 쉽게 예약을 조정할 수 있습니다."
        />

        <InfoCard
          icon="♜"
          title="원하는 편의시설을 갖춘 숙소"
          text="온수 욕조, 수영장, 바비큐 시설 등 원하는 편의시설을 갖춘 숙소를 찾아보세요."
        />

        <InfoCard
          icon="☆"
          title="실제 후기 읽기"
          text="숙소에 머물렀던 사람들의 실제 후기를 참고하여 마음에 드는 숙소를 찾아보세요."
        />
      </section>

      <section className="stay-section">
        <h2>서울의 게스트 선호 숙소</h2>

        <p className="stay-subtitle">
          평점, 후기, 신뢰도를 바탕으로 에어비앤비에서 가장 사랑받는 숙소입니다.
        </p>

        <div className="stay-list">
          {stays.map((stay) => (
            <StayCard key={stay.id} stay={stay} />
          ))}
        </div>

        <div className="button-area">
          <MoreButton />

          <PriceControlButton text="+" onClick={() => changePrice(10000)} />
          <PriceControlButton text="-" onClick={() => changePrice(-10000)} />
        </div>
      </section>
    </Layout>
  );
}

export default App;
