import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 border-b-1 border-black left-0 right-0 h-20 bg-gradient-to-r from-[#000428] to-[#004e92] text-white flex items-center justify-between px-10 z-50">
      <div className="space-x-10 flex items-center">
        <Link to="/" className="font-semibold text-2xl relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-7/8">
          MovieList
        </Link>
        <Link to="/top100" className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-7/8 ">
          Top 100
        </Link>
        <Link to="/Mypage" className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-7/8">
          My Page
        </Link>
      </div>
      <Link to="/login" className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-7/8">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
