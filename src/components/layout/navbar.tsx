import logo from "../../assets/Reddit_Logo.png";
import "../../styles/components/navbar.scss";
import { useState } from "react";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Login from "../form/login";
import QR from "../qr/qr";
import { IoIosLogIn } from "react-icons/io";
import { MdOutlineAdsClick } from "react-icons/md";
import { BsBarChartLineFill } from "react-icons/bs";
import { TbShoppingBag } from "react-icons/tb";
const Navbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isQROpen, setQROpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
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
          <button className="get-app" onClick={() => { setQROpen(true) }}>
            <MdOutlineQrCodeScanner className="icon" /> Get App
          </button>
          <button className="log-in" onClick={() => { setLoginOpen(true) }}>Log In</button>
          <div className="three-dot-container">
            <button className="three-dot" onClick={() => setShowDropdown(!showDropdown)}>
              <BsThreeDots />
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={() => setLoginOpen(true)}>
                  <IoIosLogIn /> Login/Sign Up
                </button>

                <button onClick={() => alert("Advertise on Reddit Clicked")}><MdOutlineAdsClick />  Advertise on Reddit</button>
                <button onClick={() => alert("Try Reddit Pro BETA Clicked")}><BsBarChartLineFill /> Try Reddit Pro BETA</button>
                <button onClick={() => alert("Shop Collective Avatars Clicked")}><TbShoppingBag />  Shop Collective Avatars</button>

              </div>
            )}
          </div>
        </div>
      </nav>
      <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      <QR isOpen={isQROpen} onClose={() => setQROpen(false)} />
    </>
  );
};

export default Navbar;