import { useState, useEffect } from "react";
import axios from "axios";
import { useToken } from "../../../../config/TokenContext";
import "./MusicPersonalityRecommendations.css";

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
        <div className="pRecommendation section ">
            <h2 className="pRecommendation__title">
                <span className="title-mustard">Music Recommendations</span>{" "}
                based on your personality
            </h2>
            <ul className="pRecommendation__container">
                {recommendationDetails.map((track, index) => (
                    <li className="pRecommendation__wrapper" key={track.id}>
                        <p className="pRecommendation__index">{index + 1}</p>
                        <img
                            className="pRecommendation__img"
                            src={track.image}
                            alt={`${track.name} album cover`}
                        />
                        <div className="pRecommendation__detailsContainer">
                            <p className="pRecommendation__trackTitle">
                                {track.name}
                            </p>
                            <p className="pRecommendation__trackArtists">
                                {track.artists}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MusicPersonalityRecommendations;
