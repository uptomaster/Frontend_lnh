const infoItems = [
  { title: "유연한 일정 변경이 가능한 숙소", desc: "환불 정책이 유연한 숙소를 예약하면 여행 계획이 변경될 경우 쉽게 예약을 조정할 수 있습니다." },
  { title: "원하는 편의시설을 갖춘 숙소", desc: "온수 욕조, 수영장, 바비큐 시설 등 수십 가지 편의시설 중에서 내가 원하는 시설을 갖춘 숙소를 찾으세요." },
  { title: "실제 후기 읽기", desc: "숙소에 머물렀던 사람들의 멋진 경험을 참고하여 마음에 드는 숙소를 찾아보세요." }
];

export default function InfoCard() {
  return (
    <section className="info-section">
      <div className="container">
        <div className="info-grid">
          {infoItems.map((item, index) => (
            <div key={index} className="info-item">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}