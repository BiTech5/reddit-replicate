import logo from "../../assets/Reddit_Logo.png";
import "../../styles/components/navbar.scss";
import { useState, useEffect } from "react";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Login from "../form/login";
import Signup from "../form/signup";
import ForgotPassword from "../form/forgotpassword";
import QR from "../qr/qr";
import { IoIosLogIn } from "react-icons/io";
import { MdOutlineAdsClick } from "react-icons/md";
import { BsBarChartLineFill } from "react-icons/bs";
import { TbShoppingBag } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";

type ModalType = 'login' | 'signup' | 'forgot-password' | 'qr' | null;

const Navbar = ({ toggleNav, isMobile }: { toggleNav: () => void, isMobile: boolean }) => {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.three-dot-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          {isMobile && (
            <button className="burger-btn" onClick={toggleNav}>
              <RxHamburgerMenu />
            </button>
          )}
          <img src={logo} alt="Reddit Logo" />
          <p>reddit</p>
        </div>

        <div className="search-container">
          <span className="search-icon"><FaSearch /></span>
          <input type="text" className="search-input" placeholder="Search Reddit" />
        </div>

        <div className="button-container">
          {!isMobile && (
            <button className="get-app" onClick={() => setModalType('qr')}>
              <MdOutlineQrCodeScanner className="icon" />
              <span>Get App</span>
            </button>
          )}

          <button className="log-in" onClick={() => setModalType('login')}>Log In</button>

          <div className="three-dot-container">
            <button className="three-dot" onClick={(e) => {
              e.stopPropagation();
              setShowDropdown(!showDropdown);
            }}>
              <BsThreeDots />
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={() => setModalType('login')}>
                  <IoIosLogIn /> Login/Sign Up
                </button>
                <button onClick={() => alert("Advertise on Reddit Clicked")}>
                  <MdOutlineAdsClick /> Advertise on Reddit
                </button>
                <button onClick={() => alert("Try Reddit Pro BETA Clicked")}>
                  <BsBarChartLineFill /> Try Reddit Pro BETA
                </button>
                <button onClick={() => alert("Shop Collective Avatars Clicked")}>
                  <TbShoppingBag /> Shop Collective Avatars
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <Login 
        isOpen={modalType === 'login'} 
        onClose={() => setModalType(null)} 
        switchToSignup={() => setModalType('signup')}
        switchToForgotPassword={() => setModalType('forgot-password')}
      />
      <Signup 
        isOpen={modalType === 'signup'} 
        onClose={() => setModalType(null)} 
        switchToLogin={() => setModalType('login')} 
      />
      <ForgotPassword 
        isOpen={modalType === 'forgot-password'} 
        onClose={() => setModalType(null)} 
        switchToLogin={() => setModalType('login')} 
      />
      <QR 
        isOpen={modalType === 'qr'} 
        onClose={() => setModalType(null)} 
      />
    </>
  );
};

export default Navbar;
