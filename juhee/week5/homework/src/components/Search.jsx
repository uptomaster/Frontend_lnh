import SearchButton from "./SearchButton";
import "./Search.css";

const Search = () => {
  return (
    <div className="Search">
      <div className="text">
        <h1 className="title">서울 숙소 찾기</h1>
        <div className="explan">
          멋진 여행의 시작은 에어비앤비, 어떤 여행이든 딱 맞는 특별한 숙소를
          찾아보세요
        </div>
      </div>

      <SearchButton num={1} title={"위치"} text={"Seoul, Korea"} />
      <SearchButton
        num={2}
        title={"체크인"}
        text={"날짜 추가"}
        title2={"체크아웃"}
        text2={"날짜 추가"}
      />
      <SearchButton
        num={2}
        title={"성인"}
        text={"1"}
        title2={"어린이"}
        text2={"0"}
      />
      <button className="bottomButton">검색하기</button>
    </div>
  );
};

export default Search;
