import "../../styles/components/error.scss";
import { Link } from "react-router-dom";
import ErrorLogo from "../../assets/error/image.png"
const Error = () => {
    return (
        <div className="error-page">
            <div className="error-icon">
                <img src={ErrorLogo} alt="error-logo" />
            </div>
            <h1>Page not found</h1>
            <Link to={'/'} className="error-button">View Other Communities</Link>
        </div>
    );
};

export default Error;
