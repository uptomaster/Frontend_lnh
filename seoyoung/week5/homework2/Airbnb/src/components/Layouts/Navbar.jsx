import airbnbLogo from '../../assets/Airbnb_logo.png';
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-20 px-10 border-b border-gray-300">
      <div className="flex items-center">
        <img src={airbnbLogo} alt="logo" className="h-8 pr-1" />
        <h1 className="text-2xl font-bold text-rose-500 cursor-pointer hidden lg:block">
          airbnb
        </h1>
      </div>

      <div className="flex items-center">
        <h1 className="text-sm font-bold leading-tight cursor-pointer underline">
          당신의 공간을 에어비엔비하세요
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
