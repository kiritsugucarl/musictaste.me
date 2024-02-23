import { useState, useEffect } from "react";
import "./Personality.css";

const cleanUpAudioFeatures = (audioFeatures) => {
    const featuresToKeep = [
        "acousticness",
        "danceability",
        "energy",
        "instrumentalness",
        "liveness",
        "loudness",
        "speechiness",
        "tempo",
        "valence",
    ];

    return audioFeatures.map((feature) => {
        const cleanedFeature = {};

        featuresToKeep.forEach((property) => {
            cleanedFeature[property] = feature[property];
        });
        return cleanedFeature;
    });
};

const Personality = ({ audioFeatures }) => {
    const [overallAverageFeatures, setOverallAverageFeatures] = useState(null);

    useEffect(() => {
        if (audioFeatures.length > 0) {
            const sortedFeatures = cleanUpAudioFeatures(audioFeatures);

            const sumFeatures = sortedFeatures.reduce(
                (accumulator, feature) => {
                    for (const key in feature) {
                        if (isNaN(feature[key])) {
                            continue;
                        }

                        if (key in accumulator) {
                            accumulator[key] += feature[key];
                        } else {
                            accumulator[key] = feature[key];
                        }
                    }
                    return accumulator;
                },
                {}
            );

            const overallAverages = {};
            for (const key in sumFeatures) {
                overallAverages[key] = sumFeatures[key] / audioFeatures.length;
            }

            setOverallAverageFeatures(overallAverages);
        }
    }, [audioFeatures]);

    return (
        <div className="personality">
            <h2 className="personality-title">Your music personality is</h2>
            <h2>Overall Average Audio Features</h2>
            {overallAverageFeatures ? (
                <ul>
                    {Object.entries(overallAverageFeatures).map(
                        ([feature, value]) => (
                            <li key={feature}>
                                {feature}: {value.toFixed(2)}
                            </li>
                        )
                    )}
                </ul>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default Personality;
