import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthStore from "../../stores/useAuthStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = useAuthStore((state) => state.accessToken);
  const logout = useAuthStore((state) => state.logout);

  // 로그아웃 시, 초기 화면으로 이동
  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/");
  };

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
        {accessToken ? (
          <Link
            onClick={handleLogout}
            className="hidden md:block font-semibold text-2xl hover:text-blue-400 transition-colors duration-200"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="hidden md:block font-semibold text-2xl hover:text-blue-400 transition-colors duration-200"
          >
            Login
          </Link>
        )}
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
          {accessToken ? (
            <Link onClick={handleLogout} className="text-left">
              Logout
            </Link>
          ) : (
            <Link to="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          )}
          <Link to="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
