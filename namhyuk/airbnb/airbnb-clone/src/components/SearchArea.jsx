export default function SearchArea() {
  return (
    <section className="search-section">
      <div className="search-bg-image">
        <div className="search-card">
          <h2>서울 숙소 찾기</h2>
          <p>멋진 여행의 시작은 에어비앤비. 어떤 여행에든 딱 맞는 특별한 숙소를 찾아보세요.</p>
          
          <div className="search-input-group">
            <div className="input-item full">
              <label>위치</label>
              <input type="text" placeholder="Seoul, Korea" readOnly />
            </div>
            <div className="input-row">
              <div className="input-item">
                <label>체크인</label>
                <input type="text" placeholder="날짜 추가" readOnly />
              </div>
              <div className="input-item">
                <label>체크아웃</label>
                <input type="text" placeholder="날짜 추가" readOnly />
              </div>
            </div>
            <div className="input-row">
              <div className="input-item">
                <label>성인</label>
                <select disabled><option>2</option></select>
              </div>
              <div className="input-item">
                <label>어린이</label>
                <select disabled><option>0</option></select>
              </div>
            </div>
          </div>
          <button className="search-submit-btn">검색하기</button>
        </div>
      </div>
    </section>
  );
}