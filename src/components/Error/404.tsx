import "../../styles/components/error.scss";

const Error = () => {
    return (
        <div className="error-page">
            <div className="error-icon">😼</div>
            <h1>Page not found</h1>
            <button className="error-button">View Other Communities</button>
        </div>
    );
};

export default Error;
