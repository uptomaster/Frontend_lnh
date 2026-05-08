const HotelCard = ({ key, image, title, rating, description, bed, date, price }) => {
  return (
    <section className="">
      <img src={image} className="rounded-[16px] w-full aspect-[1/1] object-cover" />

      <div className="pt-[12px]">
        <div className="flex justify-between items-center">
          <p className="text-[16px] font-semibold text-[#222222]">{title}</p>
          <p className="text-[16px] font-semibold text-[#222222]">{rating}</p>
        </div>

        <p className="text-[16px] text-[#6A6A6A]">{description}</p>
        <p className="text-[16px] text-[#6A6A6A]">{bed}</p>
        <p className="text-[16px] text-[#6A6A6A]">{date}</p>
      </div>

      <div className="pt-[8px] flex items-center gap-[6px]">
        <p className="text-[16px] font-semibold text-[#222222]">총액</p>
        <p className="">₩{price.toLocaleString()}</p>
      </div>
    </section>
  );
};

export default HotelCard;