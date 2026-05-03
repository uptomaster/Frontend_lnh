import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 border-b-1 border-gray-600 left-0 right-0 h-20 bg-black text-white flex items-center justify-between px-10 z-50">
      <div className="hidden md:flex space-x-10 items-center">
        <Link to="/" className="font-semibold text-2xl">
          MovieList🎬
        </Link>
        <Link to="/Top100">Top 100</Link>
        <Link to="/MyPage">My Page</Link>
      </div>
      <Link to="/Login" className="hidden md:block">
        Login
      </Link>

      <Link
        to="/"
        className="md:hidden font-semibold text-xl"
        onClick={() => setIsOpen(false)}
      >
        MovieList
      </Link>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
        {isOpen ? 'X' : '☰'}
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black flex flex-col px-6 space-y-4">
          <Link to="/Top100" onClick={() => setIsOpen(false)}>
            Top 100
          </Link>
          <Link to="/MyPage" onClick={() => setIsOpen(false)}>
            My Page
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
