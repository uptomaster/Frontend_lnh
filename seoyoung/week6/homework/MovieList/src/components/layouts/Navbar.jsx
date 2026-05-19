import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; //페이지 이동(로그아웃시 홈화면으로 넘어가도록)
import { loginAPI } from '../../apis/authApi'; //로그인 API 함수
import useAuthStore from '../../stores/useAuthStore'; //zustand 인증 상태 관리 스토어

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { clearAccessToken, isLoggedIn } = useAuthStore();

  const handleLogout = async (e) => {
    clearAccessToken();
    alert('로그아웃 됐습니다'); //확인용
    navigate('/'); //로그인 성공 후 홈페이지로 이동
  };

  return (
    <nav className="fixed top-0 border-b-1 border-gray-600 left-0 right-0 h-20 bg-black text-white flex items-center justify-between px-10 z-50">
      <div className="hidden md:flex space-x-10 items-center">
        {/*숨겨져있다가 md면 flex해서보임 */}
        <Link to="/" className="font-semibold text-2xl hover:text-purple-300">
          MovieList🎥
        </Link>
        <Link
          to="/top100"
          className="text-xl hover:text-purple-300 hover:font-bold"
        >
          Top 100
        </Link>
        <Link
          to="/mypage"
          className="text-xl hover:text-purple-300 hover:font-bold"
        >
          My Page
        </Link>
      </div>
      {/*숨겨져있다가 md면 보이도록 함 */}
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="hidden md:block text-xl hover:text-purple-300 hover:font-bold"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="hidden md:block text-xl hover:text-purple-300 hover:font-bold"
        >
          Login
        </Link>
      )}

      <Link
        to="/"
        onClick={() => setIsOpen(false)}
        className="md:hidden font-semibold text-xl"
      >
        MovieList 🎥
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl cursor-pointer"
      >
        {isOpen ? 'X' : '☰'}
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black flex flex-col px-6 space-y-4 ">
          <Link
            to="/top100"
            className="text-xl hover:text-purple-300 hover:font-bold"
            onClick={() => setIsOpen(false)}
          >
            Top 100
          </Link>
          <Link
            to="/mypage"
            className="text-xl hover:text-purple-300 hover:font-bold"
            onClick={() => setIsOpen(false)}
          >
            My Page
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-max text-left text-xl hover:text-purple-300 hover:font-bold"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="w-max text-left text-xl hover:text-purple-300 hover:font-bold"
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
