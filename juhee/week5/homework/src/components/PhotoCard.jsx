import Sticker from "./Sticker";
import "./PhotoCard.css";

const PhotoCard = ({
  price,
  img,
  name,
  explain,
  feature,
  date,
  rate,
  showEmoji,
}) => {
  return (
    <div className="card">
      <div className="imageBox">
        <img src={img} alt="" />
        <Sticker showEmoji={showEmoji} />
      </div>

      <div className="bottom">
        <div className="top">
          <div className="name">{name}</div>
          <div className="rate">⭐ {rate}</div>
        </div>

        <div className="sub">{explain}</div>
        <div className="sub">{feature}</div>
        <div className="sub">{date}</div>

        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default PhotoCard;
