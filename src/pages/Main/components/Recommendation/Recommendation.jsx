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
            {imageUrl ? (
                <img src={imageUrl} className="recommendation__finalImage" />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Recommendation;
