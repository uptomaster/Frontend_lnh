import logo from '../../assets/Airbnb_Logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-[#F7F7F7] border-b border-gray-300 flex items-center justify-between px-10 z-50">
        <img src={logo} className="h-8 w-auto" />

      <p className="">
        당신의 공간을 에어비앤비하세요
      </p>
    </nav>
  );
};

export default Navbar;