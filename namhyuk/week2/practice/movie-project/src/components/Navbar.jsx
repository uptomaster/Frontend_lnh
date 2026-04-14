import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* 로고 영역 */}
        <Link to="/" className="text-red-600 text-2xl font-bold tracking-tighter">
          NETFLUX
        </Link>

        {/* 메뉴 영역 */}
        <div className="flex gap-6 text-sm font-medium text-gray-300">
          <Link to="/MovieList" className="hover:text-white transition">MovieList</Link>
          <Link to="/Top100" className="hover:text-white transition">Top100</Link>
          <Link to="/MyPage" className="hover:text-white transition">MyPage</Link>
          <Link to="/Login" className="hover:text-white transition">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;