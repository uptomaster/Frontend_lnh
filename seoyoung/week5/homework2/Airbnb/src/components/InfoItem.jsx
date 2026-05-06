const InfoItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="font-bold text-xl">{icon}</div>
      <h3 className="font-bold text-xl text-gray-700">{title}</h3>
      <p className="text-md text-gray-700">{description}</p>
    </div>
  );
};

export default InfoItem;
