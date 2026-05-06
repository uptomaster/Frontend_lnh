const PlaceItem = ({
  image,
  geustFavorite,
  title,
  star,
  description,
  bed,
  date,
  price,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="relative">
        <div className="absolute font-bold shadow-xl top-3 left-3 bg-white z-10 px-2 py-1 rounded-2xl text-[12px] md:text-[10px] lg:text-[13px]">
          {geustFavorite ? '🏆 게스트 선호' : ' 게스트 선호'}
        </div>

        <img
          src={image}
          className="w-full aspect-square object-cover rounded-xl"
        />
      </div>
      <div className="flex justify-between">
        <h3 className="font-bold text-[17px] text-gray-700 truncate">
          {title}
        </h3>
        <p className="text-[15px] text-gray-700">★ {star}</p>
      </div>

      <div>
        <p className=" truncate text-[15px] text-gray-700">{description}</p>
        <p className=" text-[15px] text-gray-700">{bed}</p>
        <p className=" text-[15px] text-gray-700">{date}</p>
      </div>
      <p className="text-[15px]">총액 \ {price}</p>
    </div>
  );
};

export default PlaceItem;
