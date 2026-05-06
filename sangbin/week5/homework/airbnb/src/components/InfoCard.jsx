import './InfoCard.css'

// 가운데 영역의 정보 Card — 제목 + 설명만
function InfoCard({ title, description }) {
  return (
    <article className="info-card">
      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-desc">{description}</p>
    </article>
  )
}

export default InfoCard
