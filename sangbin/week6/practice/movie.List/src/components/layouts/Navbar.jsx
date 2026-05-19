import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 dt:h-20 bg-black text-white border-b border-gray-600 z-50">
      <div className="h-full flex items-center justify-between px-4 tb:px-6 dt:px-10">
        {/* 로고: 모바일/데스크탑 공통 */}
        <Link
          to="/"
          onClick={closeMenu}
          className="font-semibold text-xl dt:text-2xl"
        >
          MovieList🎬
        </Link>

        {/* 데스크탑: 메뉴 + 로그인 (tb 이상에서 가로 표시) */}
        <div className="hidden tb:flex items-center gap-6 dt:gap-10">
          <Link to="/top100" className="hover:text-gray-300">Top 100</Link>
          <Link to="/mypage" className="hover:text-gray-300">My Page</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        </div>

        {/* 모바일: 햄버거 버튼 (tb 미만에서만 표시) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="tb:hidden text-2xl"
          aria-label="메뉴 토글"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isOpen && (
        <div className="tb:hidden absolute top-16 left-0 right-0 bg-black border-t border-gray-700 flex flex-col px-6 py-4 space-y-4">
          <Link to="/top100" onClick={closeMenu}>Top 100</Link>
          <Link to="/mypage" onClick={closeMenu}>My Page</Link>
          <Link to="/login" onClick={closeMenu}>Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
