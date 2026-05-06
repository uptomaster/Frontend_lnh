const HotelCard = ({ image, title, rating, description, bed, date, price }) => {
  return (
    <section className="airbnb_content">
      
        <img src={image} className="w-[230px]"/>
    

      <p>
        {title}
        <span className="rating">{rating}</span>
        <br />
        <span className="explain_gray">
          {description}
          <br />
          {bed}
          <br />
          {date}
        </span>
      </p>

      <span className="total_price">
        총액 <span className="price">{price}</span>
      </span>
    </section>
  );
};

export default HotelCard;