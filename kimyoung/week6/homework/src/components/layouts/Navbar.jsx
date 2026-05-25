import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAPI } from '../../apis/authApi';
import useAuthStore from '../../stores/useAuthStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const accessToken = useAuthStore((state) => state.accessToken);
  const clearAccessToken = useAuthStore((state) => state.clearAccessToken);

  const closeMenu = () => setIsOpen(false);

  const handleLogout = async () => {
    try {
      await logoutAPI();
    } catch (error) {
      console.error('로그아웃 에러:', error);
    } finally {
      localStorage.removeItem('auth-storage');
      clearAccessToken();
      alert('로그아웃 되었습니다.');
      navigate('/');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-black text-white flex items-center justify-between px-6 md:px-10 z-50 border-b border-gray-800">
      <Link
        to="/"
        className="font-semibold text-xl md:text-2xl z-[70]"
        onClick={closeMenu}
      >
        MovieList🎬
      </Link>

      <div className="hidden md:flex space-x-10 items-center">
        <Link to="/top100" className="hover:text-gray-400 transition">
          Top 100
        </Link>

        <Link to="/mypage" className="hover:text-gray-400 transition">
          My Page
        </Link>

        {accessToken ? (
          <button
            type="button"
            onClick={handleLogout}
            className="bg-white text-black px-4 py-1.5 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-white text-black px-4 py-1.5 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Login
          </Link>
        )}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl focus:outline-none p-2 z-[70]"
        aria-label="메뉴 열기"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 z-[60]">
          <Link
            to="/top100"
            className="text-2xl font-bold hover:text-red-500"
            onClick={closeMenu}
          >
            Top 100
          </Link>

          <Link
            to="/mypage"
            className="text-2xl font-bold hover:text-red-500"
            onClick={closeMenu}
          >
            My Page
          </Link>

          {accessToken ? (
            <button
              type="button"
              onClick={() => {
                closeMenu();
                handleLogout();
              }}
              className="text-2xl font-bold text-gray-400 hover:text-red-500"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-2xl font-bold text-gray-400 hover:text-red-500"
              onClick={closeMenu}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
