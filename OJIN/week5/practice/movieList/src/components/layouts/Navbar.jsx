import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 border-b-1 border-gray-600 left-0 right-0 h-20 bg-black text-white flex items-center justify-between px-10 z-50">
      <div className="hidden md:flex h-full w-full items-center justify-between">
        <div className="flex items-center space-x-10 font-semibold text-2xl">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            MovieList🎬
          </Link>
          <Link
            to="/top100"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Top 100
          </Link>
          <Link
            to="/mypage"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            My Page
          </Link>
        </div>
        <Link
          to="/login"
          className="hidden md:block font-semibold text-2xl hover:text-blue-400 transition-colors duration-200"
        >
          Login
        </Link>
      </div>

      <div className="flex md:hidden h-full w-full items-center justify-between">
        <Link
          to="/"
          className="font-semibold text-xl"
          onClick={() => setIsOpen(false)}
        >
          MovieList🎬
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hiden text-2xl"
        >
          {isOpen ? "X" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black flex flex-col px-6 space-y-4">
          <Link to="/top100" onClick={() => setIsOpen(false)}>
            Top 100
          </Link>
          <Link to="/mypage" onClick={() => setIsOpen(false)}>
            My Page
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
