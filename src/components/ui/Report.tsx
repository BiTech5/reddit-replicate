import { FaFlag } from "react-icons/fa";
import { useState } from "react";
import Login from "../form/login";
import "../../styles/components/Report.scss";
import Signup from "../form/signup";
import ForgotPassword from "../form/forgotpassword";
type ModalType = 'login' | 'signup' | 'forgot-password' | 'qr' | null;

const ReportBtn = () => {
    const [modalType, setModalType] = useState<ModalType>(null);

    return (
        <>
            <div className="report">
                <button onClick={() => setModalType('login')}>
                    <FaFlag /> Report
                </button>
            </div>
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

        </>
    )
}
export default ReportBtn;