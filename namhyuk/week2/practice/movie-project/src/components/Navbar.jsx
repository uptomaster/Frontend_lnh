import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="hidden md:flex container mx-auto justify-between items-center">
        {/* 로고 영역 */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-red-600 text-2xl font-bold tracking-tighter"
        >
          NETFLUX
        </Link>

        {/* 메뉴 영역 */}
        <div className="flex gap-6 text-sm font-medium text-gray-300">
          <Link
            to="/MovieList"
            className="md:hidden hover:text-white transition"
          >
            MovieList
          </Link>
          <Link to="/Top100" className="hover:text-white transition">
            Top100
          </Link>
          <Link to="/MyPage" className="hover:text-white transition">
            MyPage
          </Link>
          <Link
            to="/Login"
            className="hidden md:block hover:text-white transition"
          >
            Login
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? "X" : "☰"}
          </button>

          {isOpen && (
            <div className="md:hidden absolute top-5 right-0 left-0 flex gap-6 text-sm font-medium text-gray-300">
              <Link
                to="/MovieList"
                className="md:hidden hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                MovieList
              </Link>
              <Link
                to="/Top100"
                className="hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Top100
              </Link>
              <Link
                to="/MyPage"
                className="hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                MyPage
              </Link>
              <Link
                to="/Login"
                className="hidden md:block hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
