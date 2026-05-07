import React from 'react';

const StayCard = ({ stay, priceOffset }) => {
  const currentPrice = Math.max(0, stay.basePrice + priceOffset);

  return (
    <article className="card">
      <div className="img-container">
        <img src={stay.img} alt={stay.loc} />
        {stay.badge && <span className="badge">{stay.badge}</span>}
      </div>
      <div className="info">
        <div className="info-top">
          <span className="loc">{stay.loc}</span>
          <span className="rating">★ {stay.rating}</span>
        </div>
        <p className="desc">{stay.desc}</p>
        <p className="gray">{stay.beds}</p>
        <p className="gray">{stay.dates}</p>
        <p className="price">
          총액 <span>₩{currentPrice.toLocaleString()}</span>
        </p>
      </div>
    </article>
  );
};

export default StayCard;