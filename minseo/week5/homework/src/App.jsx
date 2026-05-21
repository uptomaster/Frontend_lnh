import { useState } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { initialStays } from './data/stays';
import StayCard from './components/stay/StayCard';

function App() {
  const [priceOffset, setPriceOffset] = useState(0);

  const handleAdjust = (amount) => {
    setPriceOffset(prev => prev + amount);
  };

  return (
    <div className="airbnb-app">
      <Navbar />
      
      {/* Search Hero Section (UI) */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="search-card">
            <h2>서울 숙소 찾기</h2>
            <p>멋진 여행의 시작은 에어비앤비. 어떤 여행에든 딱 맞는 특별한 숙소를 찾아보세요.</p>
            <div className="search-inputs">
              <div className="input-field">위치<span>Seoul, Korea</span></div>
              <div className="input-row">
                <div className="input-field">체크인<span>날짜 추가</span></div>
                <div className="input-field">체크아웃<span>날짜 추가</span></div>
              </div>
              <div className="input-row">
                <div className="input-field">성인<span>2</span></div>
                <div className="input-field">어린이<span>0</span></div>
              </div>
            </div>
            <button className="search-btn">검색하기</button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-grid container">
        <div className="info-item">📅 <h3>유연한 일정 변경이 가능한 숙소</h3><p>환불 정책이 유연한 숙소를 예약하면 여행 계획이 변경될 경우 쉽게 예약을 조정할 수 있습니다.</p></div>
        <div className="info-item">🏢 <h3>원하는 편의시설을 갖춘 숙소</h3><p>온수 욕조, 수영장, 바비큐 시설 등 수십 가지 편의시설 중에서 내가 원하는 시설을 갖춘 숙소를 찾으세요.</p></div>
        <div className="info-item">⭐ <h3>실제 후기 읽기</h3><p>숙소에 머물렀던 사람들의 멋진 경험을 참고하여 마음에 드는 숙소를 찾아보세요.</p></div>
      </section>

      {/* Lodging Section */}
      <section className="lodging-section container">
        <header className="lodging-header">
          <h2>서울의 게스트 선호 숙소</h2>
          <p>평점, 후기, 신뢰도를 바탕으로 에어비앤비에서 가장 사랑받는 숙소로 손꼽히는 곳입니다.</p>
        </header>

        <div className="stay-grid">
          {initialStays.map(stay => (
            <StayCard key={stay.id} stay={stay} priceOffset={priceOffset} />
          ))}
        </div>

        <footer className="footer-controls">
          <button className="more-btn">더 찾아보기</button>
          <div className="price-controls">
            <span>가격 조절(±1만)</span>
            <button onClick={() => handleAdjust(-10000)} className="circle-btn">-</button>
            <button onClick={() => handleAdjust(10000)} className="circle-btn">+</button>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;