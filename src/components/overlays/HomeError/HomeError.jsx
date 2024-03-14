import "./HomeError.css";

const HomeError = ({ onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="homeError" onClick={handleOverlayClick}>
            <div className="homeError-message-container homeError-bounce">
                {/* <div className="homeError-upperWrapper">
                    <button
                        className="homeError-closeButton"
                        onClick={handleClose}
                    >
                        X
                    </button>
                </div> */}
                <div className="homeError-bottomWrapper">
                    {/* <h1>Error!</h1>
                    <img src="/close.png" className="homeError-bottom-icon" />
                    <p>
                        Login was denied, please log in to continue in the app.
                    </p> */}

                    <img className="homeError-bottom-icon" src="/close.png" />
                    <p className="homeError-message">
                        <span className="homeError-message-title">
                            Login was denied.
                        </span>{" "}
                        Please log in to proceed using the application.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeError;
