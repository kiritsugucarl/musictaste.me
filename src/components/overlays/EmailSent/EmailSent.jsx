import "./EmailSent.css";

const EmailSent = ({ onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="emailSent" onClick={handleOverlayClick}>
            <div className="emailSent-message-container emailSent-bounce">
                <div className="emailSent-bottomWrapper">
                    <img className="emailSent-bottom-icon" src="/check.png" />
                    <p className="emailSent-message">
                        <span className="emailSent-message-title">
                            Email was sent.
                        </span>{" "}
                        We'll get back to you as soon as possible.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmailSent;
