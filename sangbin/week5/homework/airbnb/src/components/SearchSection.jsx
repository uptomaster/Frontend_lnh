import './SearchSection.css'

// 검색 영역 (UI 전용 — 실제 동작 X)
function SearchSection() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="search-section">
      <h1 className="search-title">서울 숙소 찾기</h1>
      <p className="search-lead">
        멋진 여행의 시작은 에어비앤비. 어떤 여행에든 딱 맞는 특별한 숙소를 찾아보세요.
      </p>

      <form className="search-form" onSubmit={handleSubmit}>
        <div className="field">
          <span className="field-label">위치</span>
          <span className="field-value">Seoul, Korea</span>
        </div>

        <div className="field-row">
          <div className="field">
            <span className="field-label">체크인</span>
            <span className="field-value placeholder">날짜 추가</span>
          </div>
          <div className="field">
            <span className="field-label">체크아웃</span>
            <span className="field-value placeholder">날짜 추가</span>
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <span className="field-label">성인</span>
            <span className="field-value">2</span>
          </div>
          <div className="field">
            <span className="field-label">어린이</span>
            <span className="field-value">0</span>
          </div>
        </div>

        <button type="submit" className="search-submit">검색하기</button>
      </form>
    </section>
  )
}

export default SearchSection
