import { Link } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <Link to="/Top100">Top100</Link>
      <Link to="/Login">Login</Link>
      <Link to="/MyPage">MyPage</Link>
      <Link to="/NotFound">NotFound</Link>
      <Link to="/MovieList">MovieList</Link>
    </div>
  );
};  

export default Navbar;