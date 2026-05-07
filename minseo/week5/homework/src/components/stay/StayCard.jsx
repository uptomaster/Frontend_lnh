import React from 'react';

const StayCard = ({ stay, priceOffset }) => {
  const currentPrice = Math.max(0, stay.basePrice + priceOffset);

  return (
    <article className="stay-card">
      <div className="img-box">
        <img src={stay.img} alt={stay.loc} />
        {stay.badge && <span className="stay-badge">🏅 {stay.badge}</span>}
      </div>
      <div className="stay-info">
        <div className="stay-title">
          <span className="stay-loc">{stay.loc}</span>
          <span className="stay-rating">★ {stay.rating}</span>
        </div>
        <p className="stay-desc">{stay.desc}</p>
        <p className="stay-gray">{stay.beds}</p>
        <p className="stay-gray">{stay.dates}</p>
        <p className="stay-price">
          총액 <strong>₩{currentPrice.toLocaleString()}</strong>
        </p>
      </div>
    </article>
  );
};

export default StayCard;