import { SRC_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={SRC_LOGO} alt="delivery app logo" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">About Us</li>
        <li>Contact Us</li>
        <li className="nav-item">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
