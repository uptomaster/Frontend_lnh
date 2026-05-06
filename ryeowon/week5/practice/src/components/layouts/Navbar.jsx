import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 border-b border-black left-0 right-0 h-20 bg-gradient-to-r from-[#000428] to-[#004e92] text-white flex items-center justify-between px-10 z-50"> 
      <div className="hidden md:flex space-x-10 items-center">
        <Link to="/" className="font-semibold text-2xl relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-7/8">
          MovieList
        </Link>
        <Link to="/top100" className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-7/8">
          Top 100
        </Link>
        <Link to="/Mypage" className="relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-7/8">
          My Page
        </Link>
      </div>
      <Link to="/login" className="hidden md:block relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-7/8">
        Login
      </Link>

      <Link to="/" className="md:hidden font-semibold text-xl" onClick={() => setIsOpen(false)}>
        MovieList
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
        {isOpen ? '✕' : '☰'}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-gradient-to-r from-[#000428] to-[#004e92] flex flex-col items-center space-y-4 py-6 md:hidden border-b border-black">
          <Link to="/top100" onClick={() => setIsOpen(false)} className="text-lg">
            Top 100
          </Link>
          <Link to="/Mypage" onClick={() => setIsOpen(false)} className="text-lg">
            My Page
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="text-lg">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;