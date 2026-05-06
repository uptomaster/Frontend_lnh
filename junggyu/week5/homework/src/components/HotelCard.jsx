const HotelCard = ({ image, title, rating, description, bed, date, price }) => {
  return (
    <section className="">
      <img src={image} className="" />

      <div className="">
        <div className="flex justify-between items-center">
          <p className="">{title}</p>
          <p className="">{rating}</p>
        </div>

        <p className="">{description}</p>
        <p className="">{bed}</p>
        <p className="">{date}</p>
      </div>

      <div className="">
        <p className="">총액</p>
        <p className="">{price}</p>
      </div>
    </section>
  );
};

export default HotelCard;