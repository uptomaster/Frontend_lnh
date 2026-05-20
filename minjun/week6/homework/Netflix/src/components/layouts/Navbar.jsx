import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Zustand 스토어에서 상태와 로그아웃 함수를 직접 가져옵니다.
  const accessToken = useAuthStore((state) => state.accessToken);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  // 마이페이지 클릭 시 검사 로직
  const handleMyPageClick = (e) => {
    e.preventDefault();
    setIsOpen(false);

    if (!accessToken) {
      alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
      navigate("/login");
    } else {
      navigate("/mypage");
    }
  };

  // 로그아웃 버튼 클릭 시 실행
  const handleLogoutClick = () => {
    logout(); // 1. Zustand 스토어 및 auth-storage 완전 초기화
    setIsOpen(false); // 2. 모바일 메뉴 닫기
    alert("로그아웃 되었습니다.");
    navigate("/login"); // 3. 로그인 페이지로 튕겨내기
  };

  return (
    <nav className="fixed top-0 border-b border-gray-600 left-0 right-0 h-16 md:h-20 bg-black text-white flex items-center justify-between px-4 md:px-10 z-50">
      <div className="flex items-center">
        <Link
          to="/"
          className="font-semibold text-xl md:text-2xl shrink-0 mr-10"
        >
          MovieList🎬
        </Link>

        <div className="hidden md:flex space-x-10">
          <Link
            to="/top100"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Top 100
          </Link>
          <a
            href="/mypage"
            onClick={handleMyPageClick}
            className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            My Page
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* 액세스 토큰 존재 여부에 따라 로그인/로그아웃 버튼 구현 */}
        {accessToken ? (
          <button
            onClick={handleLogoutClick}
            className="text-left text-gray-300 hover:text-white transition-colors duration-300"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="hidden md:block text-sm md:text-base text-gray-300 hover:text-white transition-colors"
          >
            Login
          </Link>
        )}

        <button
          className="md:hidden text-2xl p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 모바일 환경 메뉴 */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black border-b border-gray-600 flex flex-col p-4 space-y-4 md:hidden animate-fadeIn">
          <Link
            to="/top100"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-500"
          >
            Top 100
          </Link>
          <a
            href="/mypage"
            onClick={handleMyPageClick}
            className="hover:text-red-500 cursor-pointer"
          >
            My Page
          </a>

          {/* 모바일 영역 */}
          {accessToken ? (
            <button
              onClick={handleLogoutClick}
              className="text-left hover:text-red-500 transition-colors"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500"
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
