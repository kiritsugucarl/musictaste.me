import "./PersonalityCard.css";

const PersonalityCard = ({ personality, isActive, percentage }) => {
    const { name, description, backgroundColor, textColor, image } =
        personality;

    return (
        <div className={`flip__main ${isActive ? "active" : ""}`}>
            <div className={`flip-card ${isActive ? "active" : ""}`}>
                <div className="flip-card-inner">
                    <div
                        className="flip-card-front"
                        style={{ backgroundColor, color: textColor }}
                    >
                        <img
                            className="card__img"
                            src={image}
                            alt={description}
                        />
                        <p className="card__title">{name}</p>
                    </div>
                    <div
                        className="flip-card-back"
                        style={{ backgroundColor, color: textColor }}
                    >
                        <div className="flip-card-back-wrapper">
                            <p className="card__percentage">
                                {percentage}% users got this trait!
                            </p>
                            <p className="card__description">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalityCard;
