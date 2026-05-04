import { Link } from 'react-router-dom';
import { useState } from 'react'; // react-router-dom이 아니라 'react'에서 가져와야 함

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 border-b border-zinc-800 left-0 right-0 h-20 bg-black text-white flex items-center justify-between px-10 z-50">
      {/* 데스크톱 메뉴 */}
      <div className="hidden md:flex space-x-10 items-center">
        <Link to="/" className="font-semibold text-2xl text-red-600">
          NETFLIX
        </Link>
        <Link to="/top100" className="hover:text-gray-300">Top 100</Link>
        <Link to="/mypage" className="hover:text-gray-300">My Page</Link>
      </div>

      <Link to="/login" className="hidden md:block bg-red-600 px-4 py-1 rounded text-sm font-semibold">
        Login
      </Link>

      {/* 모바일 로고 (md:hidden으로 수정) */}
      <Link 
        to="/" 
        className="md:hidden font-semibold text-xl text-red-600"
        onClick={() => setIsOpen(false)}
      > 
        NETFLIX
      </Link>

      {/* 햄버거 버튼 */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl focus:outline-none">
        {isOpen ? '✕' : '☰'}
      </button>

      {/* 모바일 드롭다운 메뉴 (반응형 포인트) */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-zinc-900 flex flex-col p-6 space-y-6 border-b border-zinc-800 animate-in fade-in slide-in-from-top-4">
          <Link to="/top100" onClick={() => setIsOpen(false)} className="text-lg">Top 100</Link>
          <Link to="/mypage" onClick={() => setIsOpen(false)} className="text-lg">My Page</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="text-lg font-bold text-red-500">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;