import "./Recommendation.css";

const Recommendation = ({ imageUrl }) => {
    return (
        <div className="recommendation">
            <div className="recommendation__title-wrapper">
                <h2 className="recommendation__title">
                    Your{" "}
                    <span className="title-mustard"> music taste result</span>
                </h2>
                <p className="recommendation__title-desc">
                    You can now save the image or share the results to your
                    social media platform!
                </p>
            </div>
            <div className="recommendation__finalImageWrapper shadow-effect">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        className="recommendation__finalImage"
                    />
                ) : (
                    <p>Loading...</p>
                )}
                <div className="recommendation__overlay-icons">
                    <a
                        href={imageUrl}
                        download="musicTaste.png"
                        className="recommendation__finalImageLink"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Recommendation;
