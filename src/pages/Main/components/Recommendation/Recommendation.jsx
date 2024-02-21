import { useState, useEffect } from "react";
import axios from "axios";
import "./Recommendation.css";

const Recommendation = () => {
    return (
        <div className="recommendation">
            <h2 className="recommendation__title">
                Your <span className="title-mustard"> music taste result</span>
            </h2>
        </div>
    );
};

export default Recommendation;
