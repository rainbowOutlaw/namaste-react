import { SRC_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import Grocery from "./Grocery";

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-100">
      <div className="w-24">
        <img className="logo" src={SRC_LOGO} alt="delivery app logo" />
      </div>
      <ul className="flex gap-10 mr-12 items-center">
        <li className="nav-item">
          Online Status: {useIsOnline() ? "😀" : "🤢"}
        </li>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="nav-item">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
