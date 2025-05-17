import Modal from "../modal/modal";
import React, { useState } from "react";
import "../../styles/components/login.scss";

type ForgotPasswordProps = {
    isOpen: boolean;
    onClose: () => void;
    switchToLogin: () => void;
};

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ isOpen, onClose, switchToLogin }) => {
    const [emailOrUsername, setEmailOrUsername] = useState('');

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className="title">Forgot Password</h2>
            <p className="disclaimer">Enter your email address or username and we’ll send you a link to reset your password </p>
            <br />

            <form>
                <input
                    type="text"
                    placeholder="Email or username"
                    value={emailOrUsername}
                    onChange={(e) => setEmailOrUsername(e.target.value)}
                    required
                />
                <a href="https://support.reddithelp.com/hc/en-us/sections/360008917491-Account-Security" target="_blank" className="forgot">Need Help?</a>
                <p className="signup">Remembered? <a href="#" onClick={(e) => { e.preventDefault(); switchToLogin(); }}>Log In</a></p>
                <br /><br />
                <button type="submit" className="submit" style={emailOrUsername ? { backgroundColor: "#AE2C00", color: "white", cursor: "pointer" } : undefined} disabled={!emailOrUsername}>
                    Reset Password
                </button>
            </form>
        </Modal>
    );
};

export default ForgotPassword;
