import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between border-b border-gray-600 bg-black px-10 text-white">
      <div className="flex items-center space-x-10">
        <Link to="/" className="text-2xl font-semibold">
          MovieList🎬
        </Link>
        <Link to="/top100">Top 100</Link>
        <Link to="/mypage">My Page</Link>
      </div>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;