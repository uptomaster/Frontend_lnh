import Logo from "../../assets/airbnb_logo.svg";

function Navbar() {
  return (
    <div className="h-[80px] w-full border-b border-gray-300 px-8">
      <div className="flex h-full w-full items-center justify-between">
        <img
          src={Logo}
          alt="airbnb logo"
          className="h-[80px] w-[102px] object-contain"
        />
        <p className="text-sm font-medium">당신의 공간을 에어비앤비하세요</p>
      </div>
    </div>
  );
}

export default Navbar;
