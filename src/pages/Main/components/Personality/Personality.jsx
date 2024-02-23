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

const normalize = (value, min, max) => {
    return (value - min) / (max - min);
};

const determineMusicPersonality = (averageFeatures) => {
    const {
        danceability,
        energy,
        instrumentalness,
        liveness,
        loudness,
        speechiness,
        tempo,
        valence,
        acousticness,
    } = averageFeatures;

    const thresholds = {
        danceability: 0.5,
        energy: 0.5,
        speechiness: 0.5,
        valence: 0.5,
        tempo: 0.5,
        loudness: 0.5,
        liveness: 0.5,
        acousticness: 0.5,
    };

    // Reduce louness scores between 0 - 1
    const normalizedLoudness = normalize(loudness, -60, 0);

    const normalizedTempo = normalize(tempo, 60, 200);

    // Comparison
    if (danceability > thresholds.danceability && energy > thresholds.energy) {
        return "Party Man";
    } else if (
        danceability < thresholds.danceability &&
        energy > thresholds.energy &&
        speechiness > thresholds.speechiness
    ) {
        return "Extrovert";
    } else if (
        danceability < thresholds.danceability &&
        normalizedLoudness < thresholds.loudness
    ) {
        return "Introvert";
    } else if (
        liveness > thresholds.liveness &&
        acousticness > thresholds.acousticness
    ) {
        return "Live Enthusiast";
    } else if (
        danceability < thresholds.danceability &&
        normalizedLoudness < thresholds.loudness &&
        (valence > thresholds.valence || valence < 1 - thresholds.valence)
    ) {
        return "Emotional";
    } else if (
        danceability > thresholds.danceability &&
        energy > thresholds.energy &&
        normalizedLoudness > thresholds.loudness &&
        normalizedTempo > thresholds.tempo &&
        valence > thresholds.valence
    ) {
        return "The Party Man";
    } else if (
        danceability > thresholds.danceability &&
        energy > thresholds.energy &&
        speechiness > thresholds.speechiness &&
        normalizedTempo > thresholds.tempo
    ) {
        return "The Extrovert";
    } else if (
        danceability < thresholds.danceability &&
        normalizedLoudness < thresholds.loudness &&
        normalizedTempo < thresholds.tempo &&
        acousticness > thresholds.acousticness &&
        instrumentalness > thresholds.instrumentalness
    ) {
        return "The Thinker";
    } else {
        return "Error obtaining your personality.";
    }
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

    const musicPersonality = overallAverageFeatures
        ? determineMusicPersonality(overallAverageFeatures)
        : null;

    return (
        <div className="personality">
            <h2 className="personality-title">Your music personality is</h2>
            <h2>Overall Average Audio Features</h2>
            {overallAverageFeatures ? (
                <>
                    <ul>
                        {Object.entries(overallAverageFeatures).map(
                            ([feature, value]) => (
                                <li key={feature}>
                                    {feature}: {value.toFixed(2)}
                                </li>
                            )
                        )}
                    </ul>
                    <p>Result: {musicPersonality}</p>
                </>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default Personality;
