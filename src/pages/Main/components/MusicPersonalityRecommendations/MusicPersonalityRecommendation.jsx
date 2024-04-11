import { useState, useEffect } from "react";
import { useToken } from "../../../../config/TokenContext";
import axios from "axios";

const MusicPersonalityRecommendations = ({ passableTrackIds }) => {
    const { token } = useToken();
    const [recommendations, setRecommendations] = useState([]);

    console.log(passableTrackIds);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                // Construct the seed_tracks parameter from passableTrackIds
                const seedTracks = passableTrackIds.join(",");

                // Spotify recommendations endpoint URL
                const recommendationsEndpoint = `https://api.spotify.com/v1/recommendations?limit=5&seed_tracks=${seedTracks}`;

                // Request config with Authorization header
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };

                // Fetch recommendations from Spotify API
                const response = await axios.get(
                    recommendationsEndpoint,
                    config
                );

                // Set recommendations state with the fetched data
                setRecommendations(response.data.tracks);
            } catch (error) {
                console.error("Error fetching recommendations:", error.message);
            }
        };

        // Call fetchRecommendations function when passableTrackIds or token change
        if (passableTrackIds.length > 0 && token) {
            fetchRecommendations();
        }
    }, [passableTrackIds, token]);

    return (
        <div>
            <h2>Music Personality Recommendations</h2>
            <ul>
                {recommendations.map((track) => (
                    <li key={track.id}>
                        <p>{track.name}</p>
                        <p>
                            {track.artists
                                .map((artist) => artist.name)
                                .join(", ")}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MusicPersonalityRecommendations;
