const InfoItem = ({ icon, title, description }) => {
  return (
    <div>
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default InfoItem;
