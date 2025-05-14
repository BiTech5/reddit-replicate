import logo from "../../assets/Reddit_Logo.png";
import "../../styles/components/navbar.scss";
import { useState } from "react";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Login from "../form/login";
import QR from "../qr/qr";
const Navbar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isQROpen,setQROpen]=useState(false);
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
          <button className="get-app" onClick={()=>{setQROpen(true)}}>
            <MdOutlineQrCodeScanner className="icon" /> Get App
          </button>
          <button className="log-in" onClick={() => { setLoginOpen(true) }}>Log In</button>
          <button className="three-dot">
            <BsThreeDots />
          </button>
        </div>
      </nav>
      <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      <QR isOpen={isQROpen} onClose={() => setQROpen(false)} />
    </>
  );
};

export default Navbar;
