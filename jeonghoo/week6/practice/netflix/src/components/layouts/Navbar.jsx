import { Link, useNavigate } from 'react-router-dom';
import { logoutAPI } from '../../apis/authApi';
import useAuthStore from '../../stores/useAuthStore';

const Navbar = () => {
  const navigate = useNavigate();

  const accessToken = useAuthStore((state) => state.accessToken);
  const clearAccessToken = useAuthStore((state) => state.clearAccessToken);

  const handleLogout = async () => {
    try {
      if (accessToken) {
        await logoutAPI(accessToken);
      }
    } catch (error) {
      console.error(error);
    } finally {
      clearAccessToken();
      localStorage.removeItem('auth-storage');

      alert('로그아웃 되었습니다.');
      navigate('/login');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-gray-800 bg-black px-6 text-white">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-xl font-bold">
          MovieList🎬
        </Link>

        <Link to="/top100" className="text-sm text-gray-400 hover:text-white">
          Top 100
        </Link>

        <Link to="/mypage" className="text-sm text-gray-400 hover:text-white">
          My Page
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {accessToken ? (
          <button
            type="button"
            onClick={handleLogout}
            className="rounded bg-gray-800 px-3 py-1 text-sm text-white"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="rounded bg-gray-800 px-3 py-1 text-sm text-white"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded bg-red-600 px-3 py-1 text-sm text-white"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;