import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Button from "./components/Button";
import TextCard from "./components/TextCard";
import { textCard } from "./data/textCard.js";
import { imageCard } from "./data/imageCard.js";
import PhotoCard from "./components/PhotoCard.jsx";
import { useState } from "react";

function App() {
  const [price, setPrice] = useState(0);

  const minus = () => {
    if (price > 10000) {
      setPrice(price - 10000);
    }
  };
  return (
    <>
      <Navbar />
      <div className="main">
        <div>
          <Search />
          <img src="" alt="" />
        </div>

        <div className="textCardList">
          {textCard.map((text) => (
            <TextCard key={text.id} text={text.text} title={text.title} />
          ))}
        </div>

        <div className="bottomText">
          <h2>서울의 게스트 선호 숙소</h2>
          <div>
            평점, 후기, 신뢰도를 바탕으로 에어비앤비에서 가장 사랑받는 숙소로
            손꼽히는 곳입니다.
          </div>
        </div>
        <div className="imageCardList">
          {imageCard.map((item) => (
            <PhotoCard key={item.id} price={price} {...item} />
          ))}
        </div>

        <div className="buttonList">
          <Button text={"더 알아보기"} />
          <Button onclick={() => setPrice(price + 10000)} text={"+"} />
          <Button onclick={minus} text={"-"} />
        </div>
      </div>
    </>
  );
}

export default App;
