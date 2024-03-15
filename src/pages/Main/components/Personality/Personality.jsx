import { over } from "lodash";
import { useState, useEffect } from "react";
import {
    RadialBarChart,
    RadialBar,
    Legend,
    Tooltip,
    ResponsiveContainer,
    PolarAngleAxis,
} from "recharts";
import {
    fetchDataFromFirebase,
    calculatePercentage,
} from "../../../../config/firebaseServices/fetchDataFromFirebase";
import CustomLegend from "./components/CustomLegend/CustomLegend";
import personalityDescription from "./data/personalityDescription.json";
import featuresDescription from "./data/featuresDescription.json";
import updatePersonalityCount from "../../../../config/firebaseServices/updatePersonalityCount";
import "./Personality.css";

const imageBasePath = "/personalities/";

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
        energetic: 0.44,
        jollyCasual: 0.4,
        emotional: 0.39,
        enchanted: 0.36,
    };

    const weights = {
        acousticness: 1,
        danceability: 1,
        energy: 1,
        instrumentalness: 1,
        liveness: 1,
        loudness: 1,
        speechiness: 1,
        tempo: 1,
        valence: 1,
    };

    // Reduce louness scores between 0 - 1
    const normalizedLoudness = normalize(loudness, -60, 0);

    const normalizedTempo = normalize(tempo, 60, 200);

    // Calculate the weighted sum of scores
    const weightedSum =
        weights.acousticness * acousticness +
        weights.danceability * danceability +
        weights.energy * energy +
        weights.instrumentalness * instrumentalness +
        weights.liveness * liveness +
        weights.loudness * normalizedLoudness +
        weights.speechiness * speechiness +
        weights.tempo * normalizedTempo +
        weights.valence * valence;

    const overallWeight = Object.values(weights).reduce(
        (sum, weight) => sum + weight,
        0
    );

    // console.log("Overall Weight: " + overallWeight);

    const normalizedScore = weightedSum / overallWeight;
    // console.log("Normalized Score: " + normalizedScore);

    if (normalizedScore >= thresholds.energetic) {
        return "Energetic";
    } else if (normalizedScore >= thresholds.jollyCasual) {
        return "Jolly Casual";
    } else if (normalizedScore <= thresholds.enchanted) {
        return "Enchanted";
    } else if (normalizedScore <= thresholds.emotional) {
        return "Emotional";
    } else {
        return "Nonchalant";
    }
};

const Personality = ({ audioFeatures }) => {
    const [overallAverageFeatures, setOverallAverageFeatures] = useState(null);
    const [showGuides, setShowGuides] = useState(false);
    const [percentages, setPercentages] = useState({});

    useEffect(() => {
        // Fetch data from Firebase and calculate percentages
        const fetchAndCalculatePercentages = async () => {
            try {
                const data = await fetchDataFromFirebase();
                const calculatedPercentages = calculatePercentage(data);
                setPercentages(calculatedPercentages);
                console.log("Percentage", percentages);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchAndCalculatePercentages();
    }, []);

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

    useEffect(() => {
        if (musicPersonality) {
            updatePersonalityCount(musicPersonality);
        }
    }, [musicPersonality]);

    const imagePath = musicPersonality
        ? `${imageBasePath}${musicPersonality}.png`
        : null;

    const getColorForValue = (index) => {
        const colors = [
            "#33CE7C",
            "#FF8348",
            "#4B85FD",
            "#9057FA",
            "#E42A3C",
            "#FF6817",
            "#5258ED",
            "#F5A7E3",
            "#FFE032",
        ];

        return colors[index % colors.length];
    };

    const radialBarData = overallAverageFeatures
        ? Object.keys(overallAverageFeatures).map((feature, index) => {
              let value;
              if (feature === "loudness") {
                  value = normalize(overallAverageFeatures[feature], -60, 0);
              } else if (feature === "tempo") {
                  value = normalize(overallAverageFeatures[feature], 60, 200);
              } else {
                  value = overallAverageFeatures[feature];
              }

              const percentageValue =
                  typeof value === "undefined" ? undefined : value * 100;

              // Set fill to transparent for unfilled bars
              const fill =
                  typeof value === "undefined"
                      ? "transparent"
                      : getColorForValue(index);

              return {
                  feature,
                  value,
                  percentageValue,
                  fill,
              };
          })
        : [];

    const legendColors = overallAverageFeatures
        ? Object.keys(overallAverageFeatures).map((feature, index) => ({
              value: (
                  <div className="personality__graph-data-wrapper">
                      <span className="personality__graph-data-feature">
                          {feature.charAt(0).toUpperCase() + feature.slice(1)}
                      </span>
                      <span className="personality__graph-data-percentage">
                          {Math.round(radialBarData[index]?.percentageValue)}%
                      </span>
                  </div>
              ),
              color: getColorForValue(index),
          }))
        : [];

    return (
        <div className="personality">
            <div className="personality__title-wrapper">
                <h2 className="personality__title">
                    Your{" "}
                    <span className="title-accent">music personality is</span>
                </h2>
                <p className="personality__title-desc">
                    Your music personality is determined depending on your song
                    choices.
                </p>
            </div>
            <div className="personality__wrapper">
                {overallAverageFeatures ? (
                    <div
                        className="personality__result-wrapper"
                        style={{
                            backgroundColor:
                                personalityDescription[musicPersonality]
                                    .backgroundColor,
                        }}
                    >
                        {imagePath && (
                            <img
                                src={imagePath}
                                className="personality__result-img"
                            />
                        )}
                        <p
                            className="personality__result-title"
                            style={{
                                color: personalityDescription[musicPersonality]
                                    .textColor,
                            }}
                        >
                            {musicPersonality}
                        </p>
                        {musicPersonality &&
                            personalityDescription[musicPersonality] && (
                                <>
                                    <p
                                        className="personality__description"
                                        style={{
                                            color: personalityDescription[
                                                musicPersonality
                                            ].textColor,
                                        }}
                                    >
                                        {
                                            personalityDescription[
                                                musicPersonality
                                            ].description
                                        }
                                    </p>
                                    <p
                                        className="personality__percentage"
                                        style={{
                                            color: personalityDescription[
                                                musicPersonality
                                            ].textColor,
                                        }}
                                    >
                                        {percentages[musicPersonality]}% of
                                        users got this personality!
                                    </p>
                                </>
                            )}
                    </div>
                ) : (
                    <p>No data available</p>
                )}
                <div className="personality__graph-wrapper">
                    <div className="personality__radialBar-container">
                        <ResponsiveContainer>
                            <RadialBarChart
                                innerRadius="15%"
                                outerRadius="90%"
                                data={radialBarData}
                                barSize={12.5}
                                startAngle={-270}
                                endAngle={90}
                            >
                                <PolarAngleAxis
                                    type="number"
                                    domain={[0, 1]}
                                    angleAxisId={0}
                                    tick={false}
                                />
                                <RadialBar
                                    minAngle={15}
                                    background={{ fill: "#00000000" }}
                                    clockWise
                                    cornerRadius={15}
                                    dataKey="value"
                                />
                            </RadialBarChart>
                        </ResponsiveContainer>
                    </div>

                    <CustomLegend legendColors={legendColors} />
                </div>
            </div>

            <div className="personality__legend-guides">
                <div
                    className={`personality__legend-guides-content ${
                        showGuides ? "reveal" : ""
                    }`}
                >
                    <h2 className="personality__legend-guides-title">
                        What do these features mean?
                    </h2>
                    <ul className="personality__legend-guides-list">
                        {Object.keys(featuresDescription).map((feature) => (
                            <li
                                key={feature}
                                className="personality__legend-guides-feature"
                            >
                                <span
                                    className="personality__legend-guides-feature-title"
                                    style={{
                                        color: featuresDescription[feature]
                                            .textColor,
                                    }}
                                >
                                    {feature}: &nbsp;
                                </span>
                                {featuresDescription[feature].description}
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    className="personality__showLegend"
                    onClick={() => setShowGuides(!showGuides)}
                >
                    {showGuides ? "Hide Feature Guides" : "Show Feature Guides"}
                </button>
            </div>
        </div>
    );
};

export default Personality;
