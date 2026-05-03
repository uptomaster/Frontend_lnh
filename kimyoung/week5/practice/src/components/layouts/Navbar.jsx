import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 메뉴를 닫는 함수
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-black text-white flex items-center justify-between px-6 md:px-10 z-50 border-b border-gray-800">
      {/* 1. 로고: 왼쪽 끝 배치 */}
      <Link
        to="/"
        className="font-semibold text-xl md:text-2xl z-[70]"
        onClick={closeMenu}
      >
        MovieList🎬
      </Link>

      {/* 2. 데스크탑 메뉴: md(768px) 이상에서만 보임 */}
      <div className="hidden md:flex space-x-10 items-center">
        <Link to="/Top100" className="hover:text-gray-400 transition">
          Top 100
        </Link>
        <Link to="/MyPage" className="hover:text-gray-400 transition">
          My Page
        </Link>
        <Link
          to="/Login"
          className="bg-white text-black px-4 py-1.5 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Login
        </Link>
      </div>

      {/* 3. 모바일 햄버거 버튼: md 미만에서만 보임, 우측 끝 배치 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl focus:outline-none p-2 z-[70]"
        aria-label="메뉴 열기"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* 4. 모바일 전체 화면 메뉴 오버레이 */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 z-[60] animate-in fade-in slide-in-from-top-5">
          <Link
            to="/Top100"
            className="text-2xl font-bold hover:text-red-500"
            onClick={closeMenu}
          >
            Top 100
          </Link>
          <Link
            to="/MyPage"
            className="text-2xl font-bold hover:text-red-500"
            onClick={closeMenu}
          >
            My Page
          </Link>
          <Link
            to="/Login"
            className="text-2xl font-bold text-gray-400"
            onClick={closeMenu}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
