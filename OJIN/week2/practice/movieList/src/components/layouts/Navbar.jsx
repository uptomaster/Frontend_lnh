import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 border-b-1 border-gray-600 left-0 right-0 h-20 bg-black text-white flex items-center justify-between px-10 z-50">
      <div className="space-x-10 flex items-center font-semibold text-2xl">
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
        className="font-semibold text-2xl hover:text-blue-400 transition-colors duration-200"
      >
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
