import "./TextCard.css";

const TextCard = ({ title, text }) => {
  return (
    <div className="TextCard">
      <h2>{title}</h2>
      <div className="text">{text}</div>
    </div>
  );
};

export default TextCard;
