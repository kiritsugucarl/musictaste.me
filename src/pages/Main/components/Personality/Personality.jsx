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
        partyMan: 0.7,
        extrovert: 0.65,
        introvert: 0.5,
        liveEnthusiast: 0.6,
        emotional: 0.45,
        thePartyMan: 0.75,
        theExtrovert: 0.7,
        theThinker: 0.55,
        theWarrior: 0.8,
        theHeartbroken: 0.4,
        theShredhead: 0.75,
    };

    const weights = {
        danceability: 1,
        energy: 1,
        speechiness: 1,
        valence: 1,
        tempo: 1,
        loudness: 1,
        liveness: 1,
        acousticness: 1,
    };

    // Reduce louness scores between 0 - 1
    const normalizedLoudness = normalize(loudness, -60, 0);

    const normalizedTempo = normalize(tempo, 60, 200);

    // Calculate the weighted sum of scores
    const weightedSum =
        weights.danceability * danceability +
        weights.energy * energy +
        weights.speechiness * speechiness +
        weights.valence * valence +
        weights.tempo * normalizedTempo +
        weights.loudness * normalizedLoudness +
        weights.liveness * liveness +
        weights.acousticness * acousticness;

    const overallWeight = Object.values(weights).reduce(
        (sum, weight) => sum + weight,
        0
    );

    const normalizedScore = weightedSum / overallWeight;

    if (normalizedScore > thresholds.partyMan) {
        return "Party Man";
    } else if (normalizedScore > thresholds.extrovert) {
        return "Extrovert";
    } else if (normalizedScore > thresholds.introvert) {
        return "Introvert";
    } else if (normalizedScore > thresholds.liveEnthusiast) {
        return "Live Enthusiast";
    } else if (normalizedScore > thresholds.emotional) {
        return "Emotional";
    } else if (normalizedScore > thresholds.thePartyMan) {
        return "The Party Man";
    } else if (normalizedScore > thresholds.theExtrovert) {
        return "The Extrovert";
    } else if (normalizedScore > thresholds.theThinker) {
        return "The Thinker";
    } else if (normalizedScore > thresholds.theWarrior) {
        return "The Warrior";
    } else if (normalizedScore > thresholds.theHeartbroken) {
        return "The Heartbroken";
    } else if (normalizedScore > thresholds.theShredhead) {
        return "The Shredhead";
    } else {
        return "Undefined Personality";
    }
};

const Personality = ({ audioFeatures, logDebug }) => {
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
