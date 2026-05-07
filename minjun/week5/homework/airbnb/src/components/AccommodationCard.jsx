import React from "react";

const AccommodationCard = ({ item, displayPrice }) => {
  return (
    <div className="airbnb-card">
      <div className="card-image-wrapper">
        <img src={item.img} alt={item.location} className="card-image" />
        <div className="heart-icon">♡</div>
      </div>

      <div className="card-info">
        <div className="info-header">
          <span className="location">{item.location}</span>
          <span className="star">★ {item.star}</span>
        </div>

        <p className="sub-text">{item.title}</p>
        <p className="sub-text">{item.beds}</p>
        <p className="sub-text">{item.dates}</p>

        <div className="price-box">
          <span className="price-label">총액 </span>
          <span className="current-price">
            ₩{displayPrice.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;
