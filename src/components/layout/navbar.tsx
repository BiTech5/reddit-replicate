import logo from "../../assets/Reddit_Logo.png";
import "../../styles/components/navbar.scss";

import { MdOutlineQrCodeScanner } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Reddit Logo" />
        <p>reddit</p>
      </div>

      <div className="search-container">
        <span className="search-icon"><FaSearch /></span>
        <input type="text" className="search-input" placeholder="Search Reddit" />
      </div>

      <div className="button-container">
        <button className="get-app">
          <MdOutlineQrCodeScanner className="icon" /> Get App
        </button>
        <button className="log-in">Log In</button>
        <button className="three-dot">
          <BsThreeDots />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
