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
            <div className="recommendation__finalImageWrapper">
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
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Recommendation;
