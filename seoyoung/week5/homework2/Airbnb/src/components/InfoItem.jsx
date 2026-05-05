const InfoItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-3">
      <div>{icon}</div>
      <h3 className="font-bold text-[17px] text-gray-700">{title}</h3>
      <p className=" text-[15px] text-gray-700">{description}</p>
    </div>
  );
};

export default InfoItem;
