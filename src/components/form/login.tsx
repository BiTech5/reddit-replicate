import ReactDOM from "react-dom";
import React from "react";
import type { LoginProps } from "../../models/iloginprop";
import "../../styles/components/login.scss";
import Google from "../../assets/login_logo/google-removebg-preview.png"
import Apple from "../../assets/login_logo/shau-removebg-preview.png";
const Login: React.FC<LoginProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="login-modal">
            <div className="overlay" onClick={onClose}></div>
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2 className="title">Log In</h2>
                <p className="disclaimer">
                    By continuing, you agree to our <a href="#">User Agreement</a> and acknowledge that you understand the <a href="#">Privacy Policy</a>.
                </p>
                <button className="login-button google">
                    <img src={Google} alt="Google" />
                    <span>

                        Continue with Google
                    </span>
                </button>
                <button className="login-button apple">
                    <img src={Apple} alt="apple" />
                    <span>

                        Continue With Apple
                    </span>
                </button>
                <div className="separator">
                    <span>OR</span>
                </div>
                <form>
                    <input type="text" placeholder="Email or username" required />
                    <input type="password" placeholder="Password" required />
                    <a href="#" className="forgot">Forgot password?</a>
                    <p className="signup">
                        New to Reddit? <a href="#">Sign Up</a>
                    </p>
                    <button type="submit" className="submit">Log In</button>
                </form>
            </div>
        </div>,
        document.getElementById("modal-root") as HTMLElement
    );
};

export default Login;
