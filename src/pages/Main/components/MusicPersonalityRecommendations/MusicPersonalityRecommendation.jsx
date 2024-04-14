import { useState, useEffect } from "react";
import { useToken } from "../../../../config/TokenContext";

const MusicPersonalityRecommendations = ({ personalityRecoIds }) => {
    const { token } = useToken();
    const [recommendationDetails, setRecommendationDetails] = useState([]);

    useEffect(() => {
        const fetchRecommendationDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.spotify.com/v1/tracks?ids=${personalityRecoIds.join(
                        ","
                    )}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.data.tracks) {
                    const details = response.data.tracks.map((track) => ({
                        id: track.id,
                        name: track.name,
                        artists: track.artists
                            .map((artist) => artist.name)
                            .join(", "),
                        image: track.album.images[0].url,
                    }));

                    setRecommendationDetails(details);
                }
            } catch (error) {
                console.error("Error fetching recommendation details: ", error);
            }
        };

        fetchRecommendationDetails();
    }, [personalityRecoIds, token]);

    return (
        <div>
            <h2>Music Personality Recommendations</h2>
            {/* {recommendationDetails.map((song, index) => (
                // .mpersonalityreco_
            ))} */}
        </div>
    );
};

export default MusicPersonalityRecommendations;
