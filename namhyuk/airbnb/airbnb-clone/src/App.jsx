import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import SearchArea from "./components/SearchArea";
import InfoCard from "./components/InfoCard";
import RoomCard from "./components/RoomCard";
import { initialRooms } from "./data/roomData";

function App() {
  const [maxPrice, setMaxPrice] = useState(1000000);

  const handlePrice = (val) => setMaxPrice(prev => Math.max(0, prev + val));
  const filteredRooms = initialRooms.filter(room => room.price <= maxPrice);

  return (
    <Layout>
      <div className="container">
        <SearchArea />
        <InfoCard />

        <div className="list-header-flex">
          <div>
            <h1 className="text-xl font-bold">서울의 게스트 선호 숙소</h1>
            <p className="text-gray">{maxPrice.toLocaleString()}원 이하 검색 결과</p>
          </div>
          <div className="price-controller">
            <button className="price-btn" onClick={() => handlePrice(-50000)}>-</button>
            <span className="font-bold">₩{maxPrice.toLocaleString()}</span>
            <button className="price-btn" onClick={() => handlePrice(50000)}>+</button>
          </div>
        </div>

        <div className="room-grid">
          {filteredRooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <button className="search-submit-btn" style={{ width: 'auto', padding: '12px 24px' }}>더 찾아보기</button>
        </div>
      </div>
    </Layout>
  );
}

export default App;