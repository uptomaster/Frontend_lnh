import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import SearchArea from "./components/SearchArea";
import InfoCard from "./components/InfoCard";
import RoomCard from "./components/RoomCard";
import { initialRooms } from "./data/roomData";

function App() {
  // 기존 maxPrice 대신 priceOffset(가격 변동분)을 상태로 사용
  const [priceOffset, setPriceOffset] = useState(0);

  // 10,000원 단위로 조절, 가장 저렴한 숙소가 0원 미만이 되지 않게 방어
  const handlePrice = (val) => {
    setPriceOffset(prev => {
      const nextOffset = prev + val;
      const minPrice = Math.min(...initialRooms.map(r => r.price));
      
      // 최저가 숙소 + 변동분이 0보다 작으면 업데이트 하지 않음
      if (minPrice + nextOffset < 0) return prev;
      return nextOffset;
    });
  };

  // map으로 모든 숙소의 가격을 한 번에 업데이트
  const updatedRooms = initialRooms.map(room => ({
    ...room,
    price: room.price + priceOffset
  }));

  return (
    <Layout>
      <div className="container">
        <SearchArea />
        <InfoCard />

        <div className="list-header-flex">
          <div>
            <h1 className="text-xl font-bold">서울의 게스트 선호 숙소</h1>
            {/* 현재 가격 변동 상태 */}
            <p className="text-gray">
              {priceOffset === 0 ? "기본 가격 기준" : `₩${Math.abs(priceOffset).toLocaleString()} ${priceOffset > 0 ? '인상됨' : '인하됨'}`}
            </p>
          </div>
        </div>

        <div className="room-grid">
          {/* 필터링된 배열 대신 가격이 수정된 배열 렌더링 */}
          {updatedRooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* 더 찾아보기 옆에 가격 조절 버튼 배치 */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '16px', 
          padding: '60px 0' 
        }}>
          <button className="search-submit-btn" style={{ width: 'auto', padding: '12px 24px' }}>
            더 찾아보기
          </button>
          
          <div className="price-controller" style={{ margin: 0 }}>
            <button className="price-btn" onClick={() => handlePrice(-10000)}>-</button>
            <span className="font-bold" style={{ minWidth: '80px', textAlign: 'center' }}>가격 조절</span>
            <button className="price-btn" onClick={() => handlePrice(10000)}>+</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;