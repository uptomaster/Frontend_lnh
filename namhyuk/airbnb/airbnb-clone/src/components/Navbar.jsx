export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          {/* 에어비앤비 로고 색상 적용을 위한 클래스 */}
          <span className="logo-text">airbnb</span>
        </div>
        
        <div className="nav-menu">
          <span className="host-link">당신의 공간을 에어비앤비하세요</span>
        </div>
      </div>
    </nav>
  );
}