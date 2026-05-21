const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo">airbnb</div>
  
        <div className="navSearch">
          <span>서울</span>
          <span>숙소</span>
          <span>인원 추가</span>
          <button>검색</button>
        </div>
  
        <div className="navRight">당신의 공간을 에어비앤비하세요</div>
      </nav>
    );
  };
  
  export default Navbar;