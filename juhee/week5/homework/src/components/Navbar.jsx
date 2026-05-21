import logo from "../assets/logo2.webp";
import "./Navbar.css";
import logo_mobile from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img className="pc" src={logo} />
      <img className="mobile" src={logo_mobile} />
      <div>당신의 공간을 에어비앤비하세요</div>
    </div>
  );
};

export default Navbar;
