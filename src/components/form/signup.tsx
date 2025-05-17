import Modal from "../modal/modal";
import React, { useState } from "react";
import Google from "../../assets/login_logo/google-removebg-preview.png";
import Apple from "../../assets/login_logo/shau-removebg-preview.png";
import "../../styles/components/login.scss";

type SignupProps = {
  isOpen: boolean;
  onClose: () => void;
  switchToLogin: () => void;
};

const Signup: React.FC<SignupProps> = ({ isOpen, onClose, switchToLogin }) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing up with:", { emailOrUsername });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="title">Sign Up</h2>
      <p className="disclaimer">
        By continuing, you agree to our <a href="#">User Agreement</a> and acknowledge our <a href="#">Privacy Policy</a>.
      </p>
      <button className="login-button google">
        <img src={Google} alt="Google" />
        <span>Continue with Google</span>
      </button>
      <button className="login-button apple">
        <img src={Apple} alt="apple" />
        <span>Continue With Apple</span>
      </button>
      <div className="separator"><span>OR</span></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email or username"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          required
        />
        <p className="signup">Already a Redditor? <a href="#" onClick={(e) => { e.preventDefault(); switchToLogin(); }}>Log In</a></p>
        <button type="submit" className="submit" style={emailOrUsername ? { backgroundColor: "#AE2C00", color: "white", cursor: "pointer" } : undefined} disabled={!emailOrUsername}>
          Sign Up
        </button>
      </form>
    </Modal>
  );
};

export default Signup;
