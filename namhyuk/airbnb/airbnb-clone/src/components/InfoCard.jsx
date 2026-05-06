const infoItems = [
  { title: "유연한 일정 변경", desc: "환불 정책이 유연한 숙소를 예약하면 계획 변경 시 편리합니다." },
  { title: "원하는 편의시설", desc: "온수 욕조, 수영장 등 원하는 시설을 갖춘 숙소를 찾으세요." },
  { title: "실제 후기 읽기", desc: "숙소에 머물렀던 사람들의 멋진 경험을 참고해 보세요." }
];

export default function InfoCard() {
  return (
    <section className="info-section">
      {infoItems.map((item, idx) => (
        <div key={idx} className="info-item">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
}