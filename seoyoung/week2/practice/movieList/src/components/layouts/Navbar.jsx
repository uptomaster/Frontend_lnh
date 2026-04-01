import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 border-b-1 border-gray-600 left-0 right-0 h-20 bg-black text-white flex items-center justify-between px-10 z-50">
      <div className="space-x-10 flex items-center">
        <Link to="/" className="font-semibold text-2xl hover:text-purple-300">
          MovieList🎥
        </Link>
        <Link to="/top100" className="hover:text-purple-300 hover:font-bold">
          Top 100
        </Link>
        <Link to="/mypage" className="hover:text-purple-300 hover:font-bold">
          My Page
        </Link>
      </div>
      <Link to="/login" className="hover:text-purple-300 hover:font-bold">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
