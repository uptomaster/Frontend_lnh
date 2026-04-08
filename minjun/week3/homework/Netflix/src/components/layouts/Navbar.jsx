import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 border-b-1 border-gray-600 left-0 right-0 h-20 bg-black text-white flex items-center justify-between px-10 z-50">
      <div className="space-x-10 flex items-center">
        <Link to="/" className="font-semibold text-2xl">
          MovieList🎬
        </Link>
        {/* 메뉴들에 hover하면 색이 부드럽게 변하도록 했음 */}
       <Link to="/top100" className="text-gray-300 hover:text-white transition-colors duration-300">
          Top 100
        </Link>
        <Link to="/mypage" className="text-gray-300 hover:text-white transition-colors duration-300">
          My Page
        </Link>
      </div>
      
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
