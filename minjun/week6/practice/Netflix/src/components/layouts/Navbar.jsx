import { useState } from 'react'; // 상태 관리를 위해 추가
import { Link } from 'react-router-dom';

const Navbar = () => {
  // useState 사용해서 메뉴의 열림/닫힘 관리
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 border-b border-gray-600 left-0 right-0 h-16 md:h-20 bg-black text-white flex items-center justify-between px-4 md:px-10 z-50">
      
      <div className="flex items-center">
        <Link to="/" className="font-semibold text-xl md:text-2xl shrink-0 mr-10">
          MovieList🎬
        </Link>
        
        {/* 모바일일 때 메뉴 숨김*/}
        <div className="hidden md:flex space-x-10">
          <Link to="/top100" className="text-gray-300 hover:text-white transition-colors duration-300">
            Top 100
          </Link>
          <Link to="/mypage" className="text-gray-300 hover:text-white transition-colors duration-300">
            My Page
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/login" className="hidden md:block text-sm md:text-base">Login</Link>
        
        {/* 
           햄버거 버튼 추가
           - md:hidden: 데스크톱에서는 숨김
           - 클릭 시 isOpen 상태를 반전시킴
        */}
        <button 
          className="md:hidden text-2xl p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'} 
          {/* 햄버거 버튼을 눌러 메뉴가 열리면, X로 닫을 수 있게 했음 */}
        </button>
      </div>

      {/* 
         모바일 메뉴 펼치기 구현 
         - isOpen이 true일 때만 렌더링
         - md:hidden: 큰 화면에서는 숨김
      */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black border-b border-gray-600 flex flex-col p-4 space-y-4 md:hidden animate-fadeIn">
          <Link to="/top100" onClick={() => setIsOpen(false)} className="hover:text-red-500">Top 100</Link>
          <Link to="/mypage" onClick={() => setIsOpen(false)} className="hover:text-red-500">My Page</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-red-500">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;