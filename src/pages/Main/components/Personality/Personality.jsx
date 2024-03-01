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
import personalityDescription from "./data/personalityDescription.json";
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

    console.log("Features:" + averageFeatures);

    const thresholds = {
        partyMan: 0.7,
        extrovert: 0.65,
        introvert: 0.5,
        instrumetalist: 0.35,
        liveEnthusiast: 0.6,
        emotional: 0.45,
        theThinker: 0.55,
        theWarrior: 0.8,
        theHeartbroken: 0.4,
        theShredhead: 0.75,
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

    console.log("Overall Weight: " + overallWeight);

    const normalizedScore = weightedSum / overallWeight;
    console.log("Normalized Score: " + normalizedScore);

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
    } else if (normalizedScore > thresholds.instrumetalist) {
        return "Instrumentalist";
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

const CustomLegend = ({ payload, iconWidth, iconHeight }) => {
    <ul className="personality__custom-legend">
        {payload.map((entry, index) => (
            <li key={`item-${index}`} className="personality__legend-item">
                <div
                    className="legend-color"
                    style={{ backgroundColor: entry.color }}
                />
                <span className="legend-label">{entry.value}</span>
            </li>
        ))}
    </ul>;
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
            <h2 className="personality__title">
                Your <span className="title-mustard">music personality is</span>
            </h2>
            <div className="personality__wrapper">
                {overallAverageFeatures ? (
                    <div className="personality__result-wrapper">
                        {imagePath && (
                            <img
                                src={imagePath}
                                className="personality__result-img"
                            />
                        )}
                        <p className="personality__result-title">
                            {musicPersonality}
                        </p>
                        {musicPersonality &&
                            personalityDescription[musicPersonality] && (
                                <p className="personality__description">
                                    {personalityDescription[musicPersonality]}
                                </p>
                            )}
                    </div>
                ) : (
                    <p>No data available</p>
                )}
                <div className="personality__graph-wrapper">
                    <ResponsiveContainer>
                        <RadialBarChart
                            cx="40%"
                            cy="30%"
                            innerRadius="15%"
                            outerRadius="90%"
                            data={radialBarData}
                            barSize={12.5}
                            startAngle={90}
                            endAngle={-270}
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
                            {/* <Tooltip /> */}
                            <Legend
                                iconSize={12.5}
                                layout="vertical"
                                verticalAlign="bottom"
                                align="center"
                                payload={legendColors.map(
                                    ({ value, color }) => ({
                                        value,
                                        type: "square",
                                        color,
                                    })
                                )}
                            />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Personality;
