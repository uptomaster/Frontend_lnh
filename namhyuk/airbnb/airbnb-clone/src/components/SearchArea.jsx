export default function SearchArea() {
  return (
    <section className="search-section">
      {/* 오른쪽 배치되는 이미지 */}
      <div className="search-bg-image"></div>

      {/* 이미지 왼쪽에 겹쳐지는 카드 */}
      <div className="search-card">
        <h2 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '8px' }}>서울 숙소 찾기</h2>
        <p style={{ fontSize: '14px', color: '#717171', marginBottom: '24px' }}>
          멋진 여행의 시작은 에어비앤비. 어떤 여행이든 딱 맞는 특별한 숙소를 찾아보세요.
        </p>

        <div className="search-input-group">
          {/* 위치 */}
          <div className="input-item" style={{ borderBottom: '1px solid #ebebeb' }}>
            <label>위치</label>
            <input type="text" placeholder="Seoul, Korea" readOnly />
          </div>
          
          {/* 날짜 */}
          <div style={{ display: 'flex', borderBottom: '1px solid #ebebeb' }}>
            <div className="input-item" style={{ flex: 1, borderRight: '1px solid #ebebeb' }}>
              <label>체크인</label>
              <input type="text" placeholder="날짜 추가" readOnly />
            </div>
            <div className="input-item" style={{ flex: 1 }}>
              <label>체크아웃</label>
              <input type="text" placeholder="날짜 추가" readOnly />
            </div>
          </div>

          {/* 인원 선택 (드롭박스) */}
          <div style={{ display: 'flex' }}>
            <div className="input-item" style={{ flex: 1, borderRight: '1px solid #ebebeb' }}>
              <label>성인</label>
              <select className="input-select" defaultValue="2">
                {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div className="input-item" style={{ flex: 1 }}>
              <label>어린이</label>
              <select className="input-select" defaultValue="0">
                {[0, 1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>
        </div>

        <button className="search-submit-btn" style={{ marginTop: '24px' }}>
          검색하기
        </button>
      </div>
    </section>
  );
}