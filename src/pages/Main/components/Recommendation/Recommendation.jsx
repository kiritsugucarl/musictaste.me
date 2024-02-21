import { useState, useEffect } from "react";
import axios from "axios";
import "./Recommendation.css";

const Recommendation = ({ isActive }) => {
    const [collage, setCollage] = useState(null);

    useEffect(() => {
        if (isActive) {
            axios
                .post(
                    "http://localhost:5000/recommendationCollage",
                    {
                        imageLinks: [],
                    },
                    { responseType: "blob" }
                )
                .then((response) => {
                    const collageUrl = URL.createObjectURL(response.data);
                    setCollage(collageUrl);
                })
                .catch((error) => {
                    console.error("Error fetching collage: ", error);
                });
        }
    }, [isActive]);

    return (
        <div className={`recommendation ${isActive ? "" : "inactive"}`}>
            <h2 className="recommendation__title">
                Your <span className="title-mustard"> music taste result</span>
            </h2>
            {collage ? (
                <img src={collage} className="collage-image" />
            ) : (
                <p>{isActive ? "Loading Collage" : "Get results first"}</p>
            )}
        </div>
    );
};

export default Recommendation;
