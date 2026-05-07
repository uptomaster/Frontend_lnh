import { useState } from "react";
import "./App.css";
import { initialStays } from "./data/stays"; // stays.js와 일치
import StayCard from "./components/stay/StayCard"; // StayCard.jsx와 일치 (대문자 확인!)

function App() {
  const [priceOffset, setPriceOffset] = useState(0);

  return (
    <div className="airbnb-section">
      <header className="section-header">
        <h1>서울의 게스트 선호 숙소</h1>
        <p>평점, 후기, 신뢰도를 바탕으로 에어비앤비에서 가장 사랑받는 숙소로 손꼽히는 곳입니다.</p>
      </header>

      <main className="card-grid">
        {initialStays.map((stay) => (
          <StayCard 
            key={stay.id} 
            stay={stay} 
            priceOffset={priceOffset} 
          />
        ))}
      </main>
      
      {/* 가격 조절 버튼은 다음 커밋에서 만들게요! */}
    </div>
  );
}

export default App;
