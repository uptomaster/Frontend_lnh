import './StayCard.css'

const formatPrice = (price) => price.toLocaleString()

// 개별 숙소 카드
function StayCard({ stay }) {
  const { image, name, rating, description, date, price } = stay

  return (
    <article className="card">
      <div className="card-image-wrap">
        <img src={image} alt={name} />
      </div>
      <div className="card-info">
        <div className="info-top">
          <strong>{name}</strong>
          <span>★ {rating}</span>
        </div>
        <p className="desc">{description}</p>
        <p className="date">{date}</p>
        <p className="price">총액 ₩ {formatPrice(price)}</p>
      </div>
    </article>
  )
}

export default StayCard
