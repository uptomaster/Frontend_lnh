import React, { useState } from "react";
import AccommodationCard from "./AccommodationCard";
import heroImg from "../assets/hero.png";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";

const initialData = [
  {
    id: 1,
    img: img1,
    location: "강동구의 아파트",
    title: "신축건물/무료주차/엘리베이터...",
    beds: "침대 3개",
    dates: "5월 12일~17일",
    basePrice: 609693,
    star: "5.0 (48)",
  },
  {
    id: 2,
    img: img2,
    location: "천호2동의 아파트",
    title: "[소곤한집]은은한감성/주차...",
    beds: "퀸사이즈 침대 3개",
    dates: "5월 5일~10일",
    basePrice: 571144,
    star: "4.97 (61)",
  },
  {
    id: 3,
    img: img3,
    location: "종로구의 아파트",
    title: "701호 안한스테이 동묘...",
    beds: "퀸사이즈 침대 2개",
    dates: "5월 17일~22일",
    basePrice: 825000,
    star: "5.0 (9)",
  },
  {
    id: 4,
    img: img4,
    location: "구로구의 집",
    title: "Lain Stay/#역세권#4인숙소...",
    beds: "퀸사이즈 침대 2개",
    dates: "6월 27일~7월 2일",
    basePrice: 495000,
    star: "5.0 (14)",
  },
];

const HouseCard = () => {
  const [priceOffset, setPriceOffset] = useState(0);

  const handlePlus = () => setPriceOffset((prev) => prev + 10000);
  const handleMinus = () => {
    const minPrice = Math.min(...initialData.map((item) => item.basePrice));
    if (minPrice + priceOffset - 10000 > 0) {
      setPriceOffset((prev) => prev - 10000);
    }
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="search-box">
          <h2>서울 숙소 찾기</h2>
          <p>
            멋진 여행의 시작은 에어비앤비. 어떤 여행에든 딱 맞는 특별한 숙소를
            찾아보세요.
          </p>
          <div className="search-inputs">
            <div className="input-row">
              위치
              <br />
              <strong>Seoul, Korea</strong>
            </div>
            <div className="input-flex">
              <div className="input-col">
                체크인
                <br />
                <span>날짜 추가</span>
              </div>
              <div className="input-col">
                체크아웃
                <br />
                <span>날짜 추가</span>
              </div>
            </div>
            <div className="input-flex">
              <div className="input-col">
                성인
                <br />
                <span>2</span>
              </div>
              <div className="input-col">
                어린이
                <br />
                <span>0</span>
              </div>
            </div>
          </div>
          <button className="btn-search">검색하기</button>
        </div>
        <div className="hero-image">
          {/* 에러 방지를 위해 실제 사진이 없으면 회색 배경이 나옵니다 */}
          <img src={heroImg} />
        </div>
      </section>

      {/* 2. 중간 3열 아이콘 정보 영역 */}
      <section className="features-section">
        <div className="feature-item">
          <div className="icon">🗓</div>
          <h3>유연한 일정 변경이 가능한 숙소</h3>
          <p>
            환불 정책이 유연한 숙소를 예약하면 여행 계획이 변경될 경우 쉽게
            예약을 조정할 수 있습니다.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">🏊</div>
          <h3>원하는 편의시설을 갖춘 숙소</h3>
          <p>
            온수 욕조, 수영장, 바비큐 시설 등 수십 가지 편의시설 중에서 내가
            원하는 시설을 갖춘 숙소를 찾으세요.
          </p>
        </div>
        <div className="feature-item">
          <div className="icon">⭐</div>
          <h3>실제 후기 읽기</h3>
          <p>
            숙소에 머물렀던 사람들의 멋진 경험을 참고하여 마음에 드는 숙소를
            찾아보세요.
          </p>
        </div>
      </section>

      {/* 3. 숙소 리스트 영역 */}
      <section className="list-section">
        <div className="list-header">
          <h2>서울의 게스트 선호 숙소</h2>
          <p>
            평점, 후기, 신뢰도를 바탕으로 에어비앤비에서 가장 사랑받는 숙소로
            손꼽히는 곳입니다.
          </p>
        </div>

        <div className="grid">
          {initialData.map((item) => (
            <AccommodationCard
              key={item.id}
              item={item}
              displayPrice={item.basePrice + priceOffset}
            />
          ))}
        </div>
      </section>

      {/* 4. 하단 버튼 영역 */}
      <div className="footer-actions">
        <button className="btn-more">더 찾아보기</button>
        <div className="price-controls">
          <button onClick={handleMinus}>-</button>
          <span className="price-label">가격 조절</span>
          <button onClick={handlePlus}>+</button>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
