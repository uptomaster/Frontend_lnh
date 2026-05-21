import React from "react";
import logoImg from "../../assets/logo.png"; // 준비하신 로고 파일명에 맞게 수정하세요

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* 텍스트 대신 이미지를 넣고 크기를 조절합니다 */}
          <img src={logoImg} alt="logo" style={{ height: "32px" }} />
        </div>
        <div className="navbar-user">
          <span
            style={{ fontSize: "14px", fontWeight: "600", marginRight: "15px" }}
          >
            당신의 공간을 에어비앤비하세요
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
