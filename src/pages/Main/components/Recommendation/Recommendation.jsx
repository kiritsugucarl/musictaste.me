import "./Recommendation.css";

const Recommendation = ({ imageUrl }) => {
    return (
        <div className="recommendation">
            <h2 className="recommendation__title">
                Your <span className="title-accent"> music taste result</span>
            </h2>
            {imageUrl ? (
                <img src={imageUrl} className="personality__collage" />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Recommendation;
