import "./App.css";
import Layout from "./components/Layout";
import SearchArea from "./components/SearchArea";
import InfoCard from "./components/InfoCard";

function App() {
  return (
    <Layout>
      <SearchArea />
      <InfoCard />
      
      <section className="room-list-header">
        <h1>서울의 게스트 선호 숙소</h1>
        <p>평점, 후기, 신뢰도를 바탕으로 에어비앤비에서 가장 사랑받는 숙소로 손꼽히는 곳입니다.</p>
      </section>

      {/* RoomCard 리스트 */}
    </Layout>
  );
}

export default App;