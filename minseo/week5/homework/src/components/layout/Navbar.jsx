import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Belo.svg" alt="logo" className="logo" />
        <div className="nav-menu">
          <span>당신의 공간을 에어비앤비하세요</span>
          <div className="icon-group">🌐 👤 ☰</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;