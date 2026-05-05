import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    /* 높이와 좌우 여백 반응형*/
    <nav className="fixed top-0 border-b border-gray-600 left-0 right-0 h-16 md:h-20 bg-black text-white flex items-center justify-between px-4 md:px-10 z-50">
      
      {/* 메뉴 간격 반응형 조절 */}
      <div className="space-x-4 md:space-x-10 flex items-center">
        {/* 로고 텍스트 크기 조절 */}
        <Link to="/" className="font-semibold text-xl md:text-2xl shrink-0">
          MovieList🎬
        </Link>
        
        {/*메뉴 텍스트 크기 조절 */}
        <Link to="/top100" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-300">
          Top 100
        </Link>
        <Link to="/mypage" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors duration-300">
          My Page
        </Link>
      </div>
      
      {/* 로그인 버튼 텍스트 크기 조절 */}
      <Link to="/login" className="text-sm md:text-base shrink-0">Login</Link>
    </nav>
  );
};

export default Navbar;