import "./MainError.css";

const MainError = ({ onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="mainError" onClick={handleOverlayClick}>
            <div className="mainError-message-container mainError-bounce">
                <div className="mainError-bottomWrapper">
                    <img className="mainError-bottom-icon" src="/close.png" />
                    <p className="mainError-message">
                        <span className="mainError-message-title">
                            Unable to get results.
                        </span>{" "}
                        Please input five (5) songs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainError;
