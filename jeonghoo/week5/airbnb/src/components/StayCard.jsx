const StayCard = ({ stay, priceOffset }) => {
    const changedPrice = Math.max(stay.price + priceOffset, 0);
  
    return (
      <article className="card">
        <div className="imageBox">
          <img src={stay.image} alt={`${stay.name} 숙소 사진`} />
  
          {stay.isGuestFavorite && <div className="guestBadge">게스트 선호</div>}
        </div>
  
        <div className="textBox">
          <div className="name">
            <p className="placeName">{stay.name}</p>
            <p className="rating">{stay.rating}</p>
          </div>
  
          <p className="description">{stay.description}</p>
          <p className="bed">{stay.bed}</p>
          <p className="date">{stay.date}</p>
          <p className="price">
            총액 <span>₩{changedPrice.toLocaleString('ko-KR')}</span>
          </p>
        </div>
      </article>
    );
  };
  
  export default StayCard;