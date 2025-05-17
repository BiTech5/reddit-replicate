import { FaFlag } from "react-icons/fa";
import { useState } from "react";
import Login from "../form/login";
import "../../styles/components/Report.scss";
const ReportBtn = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);

    return (
        <>
            <div className="report">
                <button onClick={() => setLoginOpen(true)}>
                    <FaFlag /> Report
                </button>
            </div>
            <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />

        </>
    )
}
export default ReportBtn;