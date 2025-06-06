import Modal from "../modal/modal";
import React, { useState } from "react";
import Google from "../../assets/login_logo/google-removebg-preview.png";
import Apple from "../../assets/login_logo/shau-removebg-preview.png";
import "../../styles/components/login.scss";

type LoginProps = {
  isOpen: boolean;
  onClose: () => void;
  switchToSignup: () => void;
  switchToForgotPassword: () => void;
};

const Login: React.FC<LoginProps> = ({ isOpen, onClose, switchToSignup, switchToForgotPassword }) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = emailOrUsername.trim() !== '' && password.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { emailOrUsername, password });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="title">Log In</h2>
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
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a href="#" className="forgot" onClick={(e) => { e.preventDefault(); switchToForgotPassword(); }}>Forgot password?</a>
        <p className="signup">New to Reddit? <a href="#" onClick={(e) => { e.preventDefault(); switchToSignup(); }}>Sign Up</a></p>
        <button type="submit" className="submit" style={isFormValid ? { backgroundColor: "#AE2C00", color: "white", cursor: "pointer" } : undefined} disabled={!isFormValid}>
          Log In
        </button>
      </form>
    </Modal>
  );
};

export default Login;
