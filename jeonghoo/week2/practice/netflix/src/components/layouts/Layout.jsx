import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black pt-20 text-white">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;