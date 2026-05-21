import './Navbar.css'

// 상단 내비게이션 — 텍스트 로고 + 호스트 메뉴
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="logo" href="#">airbnb</a>
        <a className="host-link" href="#">당신의 공간을 에어비앤비하세요</a>
      </div>
    </header>
  )
}

export default Navbar
