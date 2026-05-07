const SearchSection = () => {
    return (
      <section className="searchSection">
        <h1>에어비앤비에서 서울의 숙소를 찾아보세요</h1>
  
        <div className="searchBox">
          <div>
            <p>여행지</p>
            <strong>서울</strong>
          </div>
  
          <div>
            <p>체크인</p>
            <strong>날짜 추가</strong>
          </div>
  
          <div>
            <p>체크아웃</p>
            <strong>날짜 추가</strong>
          </div>
  
          <div>
            <p>여행자</p>
            <strong>게스트 추가</strong>
          </div>
  
          <button>검색</button>
        </div>
      </section>
    );
  };
  
  export default SearchSection;