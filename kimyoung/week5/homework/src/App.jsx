import Layout from "./components/Layout";
import SearchSection from "./components/SearchSection";
import InfoCard from "./components/InfoCard";

function App() {
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
    </Layout>
  );
}

export default App;
