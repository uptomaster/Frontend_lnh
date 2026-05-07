import { useState } from 'react';
import './App.css';
import { initialStays } from './data/stays';
import StayCard from './components/stay/StayCard';

function App() {
  const [priceOffset, setPriceOffset] = useState(0);

  const handleIncrease = () => {
    setPriceOffset(prev => prev + 10000);
  };

  const handleDecrease = () => {
    setPriceOffset(prev => prev - 10000);
  };

  return (
    <div className="airbnb-section">
      <header className="section-header">
        <h1>넓은 공간을 갖춘 숙소</h1>
        <p>꿈에 그리던 휴가를 위한 편안한 독채 숙소를 찾아보세요.</p>
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

      <footer className="controls-wrapper">
        <button className="more-btn">더 살펴보기</button>
        <div className="js-controls">
          <span className="control-label">전체 숙소 가격 조정</span>
          <button onClick={handleDecrease} className="circle-btn">-</button>
          <button onClick={handleIncrease} className="circle-btn">+</button>
        </div>
      </footer>
    </div>
  );
}

export default App;