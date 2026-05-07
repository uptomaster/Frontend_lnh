function StayCard({ stay }) {
  return (
    <div className="stay-card">
      <div className="stay-image-box">
        <img src={stay.image} alt={stay.name} />
        <span>{stay.badge}</span>
      </div>

      <div className="stay-info">
        <div className="stay-title-row">
          <h3>{stay.name}</h3>
          <p>{stay.rating}</p>
        </div>

        <p>{stay.description}</p>
        <p>{stay.bed}</p>
        <p>{stay.date}</p>

        <strong>총액 ₩{stay.price.toLocaleString()}</strong>
      </div>
    </div>
  );
}

export default StayCard;
