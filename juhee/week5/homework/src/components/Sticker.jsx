import "./Sticker.css";

const Sticker = ({ showEmoji }) => {
  return <span className="sticker">게스트 선호 {showEmoji && "🏆"}</span>;
};

export default Sticker;
