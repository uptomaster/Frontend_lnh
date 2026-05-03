import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 border-b-1 border-gray-600 left-0 right-0 h-20 bg-pink-400 text-white flex items-center justify-between px-10 z-50">
      <div className="hidden md:flex space-x-10 items-center">
        <Link to="/" className="font-semibold text-2xl">
          MovieList🎬
        </Link>
        <Link to="/top100">Top 100</Link>
        <Link to="/mypage">My Page</Link>
      </div>
      <Link className='hidden md:block' to="/login">Login</Link>
      <Link className='md:hidden ' to="/">MovieList</Link>

      <button onClick={()=>{setIsOpen(!isOpen)}} className='md:hidden text-2xl'>{isOpen ? 'X' : '☰'}</button>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 flex flex-col px-6 space-y-4 bg-black">
        <Link to="/" className="font-semibold text-2xl">
          MovieList🎬
        </Link>
        <Link onClick={()=>{setIsOpen(false)}} to="/top100">Top 100</Link>
        <Link onClick={()=>{setIsOpen(false)}} to="/mypage">My Page</Link>
        <Link onClick={()=>{setIsOpen(false)}} to="/login">Login</Link>
      </div>
      )}
    </nav>
  );
};

export default Navbar;
