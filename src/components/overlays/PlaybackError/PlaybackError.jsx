import "./PlaybackError.css";

const PlaybackError = ({ onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <div className="playbackError" onClick={handleOverlayClick}>
            <div className="playbackError-message-container playbackError-bounce">
                <div className="playbackError-bottomWrapper">
                    <img
                        className="playbackError-bottom-icon"
                        src="/close.png"
                    />
                    <p className="playbackError-message">
                        <span className="playbackError-message-title">
                            Error:
                        </span>{" "}
                        Preview Playback is not available
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PlaybackError;
