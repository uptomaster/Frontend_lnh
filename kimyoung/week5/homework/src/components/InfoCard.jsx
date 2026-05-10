function InfoCard({ icon, title, text }) {
  return (
    <div className="info-card">
      <div className="info-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

export default InfoCard;
