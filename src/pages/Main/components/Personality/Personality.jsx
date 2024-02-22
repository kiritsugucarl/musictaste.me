import "./Personality.css";

const Personality = ({ audioFeatures }) => {
    return (
        <div className="personality">
            <h2 className="personality-title">Your music personality is</h2>
            <ul>
                {audioFeatures.map((feature, index) => (
                    <li key={index}>
                        <strong>Track {index + 1}:</strong>
                        <ul>
                            <li>Acousticness: {feature.acousticness}</li>
                            <li>Danceability: {feature.danceability}</li>
                            <li>Energy: {feature.energy}</li>
                            <li>
                                Instrumentalness: {feature.instrumentalness}
                            </li>
                            <li>Liveness: {feature.liveness}</li>
                            <li>Loudness: {feature.loudness}</li>
                            <li>Speechiness: {feature.speechiness}</li>
                            <li>Tempo: {feature.tempo}</li>
                            <li>Valence: {feature.valence}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Personality;
