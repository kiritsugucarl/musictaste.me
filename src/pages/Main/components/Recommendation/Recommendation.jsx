import "./Recommendation.css";

const Recommendation = ({ collage }) => {
    return (
        <div className="recommendation">
            <h2 className="recommendation__title">
                Your <span className="title-mustard"> music taste result</span>
            </h2>
            {collage ? (
                <img
                    src={`data:image/jpeg;base64,${collage}`}
                    className="personality__collage"
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Recommendation;
