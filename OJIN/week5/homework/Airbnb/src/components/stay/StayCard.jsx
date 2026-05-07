function StayCard({ stay }) {
  const { image, title, beds, dates, prices } = stay;

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-[20px] mb-3">
        <img
          src={image}
          alt={title}
          className="h-[220px] w-full object-cover"
        />
      </div>
      <div className="mx-1 gap-[2px]">
        <h3 className="text-[16px]">{title}</h3>
        <div className="text-[16px] text-gray-400">{beds}</div>
        <div className="text-[16px] text-gray-400">{dates}</div>
        <div className="flex text-[16px]">
          <p>총액</p>
          {prices}
        </div>
      </div>
    </div>
  );
}

export default StayCard;
