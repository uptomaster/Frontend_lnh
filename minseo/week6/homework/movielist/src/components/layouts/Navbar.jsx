import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuthStore from '../../stores/useAuthStore';
import { logoutAPI } from '../../apis/authApi';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  // ✨ [추가] 스토어에서 토큰과 초기화 함수 가져오기
  const accessToken = useAuthStore((state) => state.accessToken);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  // ✨ [추가] 로그아웃 핸들러
  const handleLogout = async () => {
    try {
      if (accessToken) await logoutAPI(accessToken);
    } catch (error) {
      console.error("로그아웃 실패:", error);
    } finally {
      clearAuth(); // 스토어 날리기
      setIsOpen(false);
      alert("로그아웃 되었습니다.");
      navigate('/login');
    }
  };

  return (
    <nav className="fixed top-0 border-b border-zinc-800 left-0 right-0 h-20 bg-black text-white flex items-center justify-between px-10 z-50">
      <div className="hidden md:flex space-x-10 items-center">
        <Link to="/" className="font-semibold text-2xl text-red-600">NETFLIX</Link>
        <Link to="/top100" className="hover:text-gray-300">Top 100</Link>
        <Link to="/mypage" className="hover:text-gray-300">My Page</Link>
      </div>

      {/* ✨ [추가] 로그인 상태에 따른 버튼 스위칭 */}
      {accessToken ? (
        <button onClick={handleLogout} className="hidden md:block bg-red-600 px-4 py-1 rounded text-sm font-semibold hover:bg-red-700">Logout</button>
      ) : (
        <Link to="/login" className="hidden md:block bg-red-600 px-4 py-1 rounded text-sm font-semibold">Login</Link>
      )}

      <Link to="/" className="md:hidden font-semibold text-xl text-red-600" onClick={() => setIsOpen(false)}>NETFLIX</Link>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl focus:outline-none">{isOpen ? '✕' : '☰'}</button>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-zinc-900 flex flex-col p-6 space-y-6 border-b border-zinc-800 animate-in fade-in slide-in-from-top-4">
          <Link to="/top100" onClick={() => setIsOpen(false)} className="text-lg">Top 100</Link>
          <Link to="/mypage" onClick={() => setIsOpen(false)} className="text-lg">My Page</Link>
          
          {/* ✨ [추가] 모바일 메뉴 내 버튼 스위칭 */}
          {accessToken ? (
            <button onClick={handleLogout} className="text-lg font-bold text-red-500 text-left w-full focus:outline-none">Logout</button>
          ) : (
            <Link to="/login" onClick={() => setIsOpen(false)} className="text-lg font-bold text-red-500">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;