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
                        className="recommendation__finalImage shadow-effect"
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
                            <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
                <div className="recommendation__overlay-icons-mobile">
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
                            <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Recommendation;
