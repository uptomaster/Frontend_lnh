import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <Link
        to="/login"
        className="hidden md:block text-xl hover:text-purple-300 hover:font-bold"
      >
        Login
      </Link>

      <Link
        to="/"
        onClick={() => setIsOpen(false)}
        className="md:hidden font-semibold text-xl"
      >
        MovieList 🎥
      </Link>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
        {isOpen ? 'X' : '☰'}
      </button>

      {isOpen && (
        <div className="md:hidden absoulte top-20 left-0 right-0 bg-black flex flex-cal px-6 space-y-4">
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
          <Link to="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
