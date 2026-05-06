export default function SearchArea() {
  return (
    <section className="search-section">
      {/* 배경 이미지 영역 */}
      <div className="search-bg-image">

        {/* 하얀색 검색 카드 */}
        <div className="search-card">
          <h2>서울 숙소 찾기</h2>
          <p>멋진 여행의 시작은 에어비앤비. 특별한 숙소를 찾아보세요.</p>

          {/* 입력 그룹 (위치, 날짜) */}
          <div className="search-input-group">
            <div className="input-item" style={{ borderBottom: '1px solid #b0b0b0' }}>
              <label>위치</label>
              <input type="text" placeholder="Seoul, Korea" readOnly />
            </div>

            <div style={{ display: 'flex' }}>
              <div className="input-item" style={{ flex: 1, borderRight: '1px solid #b0b0b0' }}>
                <label>체크인</label>
                <input type="text" placeholder="날짜 추가" readOnly />
              </div>
              <div className="input-item" style={{ flex: 1 }}>
                <label>체크아웃</label>
                <input type="text" placeholder="날짜 추가" readOnly />
              </div>
            </div>
          </div>

          <button className="search-submit-btn">
            검색하기
          </button>
        </div>

      </div>
    </section>
  );
}