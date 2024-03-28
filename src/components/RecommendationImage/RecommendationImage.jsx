import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import { useToken } from "../../config/TokenContext";
import "./RecommendationImage.css";

const RecommendationImage = ({
    allTrackIds,
    recommendationTrackIds,
    selectedSongsTrackIds,
    onCapture,
}) => {
    const { token, user } = useToken();
    const userName = user.display_name;

    const [selectedSongsDetails, setSelectedSongsDetails] = useState([]);
    const [recommendationDetails, setRecommendationDetails] = useState([]);

    // const location = useLocation();
    // const { recommendationTrackIds, selectedSongsTrackIds } = location.state;

    useEffect(() => {
        const fetchSelectedSongsDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.spotify.com/v1/tracks?ids=${selectedSongsTrackIds.join(
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

                    setSelectedSongsDetails(details);
                }
            } catch (error) {
                console.error("Error fetching selected songs details: ", error);
            }
        };
        fetchSelectedSongsDetails();
    }, [selectedSongsTrackIds, token]);

    useEffect(() => {
        const fetchRecommendationDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.spotify.com/v1/tracks?ids=${recommendationTrackIds.join(
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
    }, [recommendationTrackIds, token]);

    const [imagesLoaded, setImagesLoaded] = useState(0);

    const handleImageLoad = () => {
        setImagesLoaded((prev) => prev + 1);
    };

    useEffect(() => {
        if (
            imagesLoaded ===
            selectedSongsTrackIds.length + recommendationTrackIds.length
        ) {
            // Adding a delay of 3 second (3000 milliseconds)
            setTimeout(() => {
                const content = document.getElementById("result-container");
                html2canvas(content, {
                    scale: 1,
                    allowTaint: true,
                    useCORS: true,
                }).then((canvas) => {
                    const dataUrl = canvas.toDataURL("image/png");
                    onCapture(dataUrl); // Pass the captured image URL to the callback
                });
            }, 3000);
        }
    }, [
        imagesLoaded,
        selectedSongsTrackIds,
        recommendationTrackIds,
        onCapture,
    ]);

    return (
        <div id="result-container" className="result-container">
            <div className="result-wrapper">
                <h1 className="result-title">
                    {userName}'s{" "}
                    <span className="result-yellow">music taste</span>
                </h1>

                <div className="result-selected-section">
                    <h3 className="result-secondaryTitle">
                        {userName}'s choice of{" "}
                        <span className="secondaryTitle-yellow"> songs</span>
                    </h3>
                    {selectedSongsDetails.map((song, index) => (
                        <div className="result-item">
                            <p className="result-item-index">{index + 1}</p>
                            <div className="result-item-container">
                                <img
                                    onLoad={handleImageLoad}
                                    className="result-item-track-img"
                                    src={song.image}
                                />
                                <div className="result-item-details-wrapper">
                                    <p className="result-item-details-songName">
                                        {song.name}
                                    </p>
                                    <p className="result-item-details-songArtist">
                                        {song.artists}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="result-taste-section">
                    <h3 className="result-secondaryTitle">
                        {userName}'s{" "}
                        <span className="secondaryTitle-yellow">
                            {" "}
                            music taste
                        </span>{" "}
                        based on their input
                    </h3>
                    {recommendationDetails.map((song, index) => (
                        <div className="result-item">
                            <p className="result-item-index">{index + 1}</p>
                            <div className="result-item-container">
                                <img
                                    onLoad={handleImageLoad}
                                    className="result-item-track-img"
                                    src={song.image}
                                />
                                <div className="result-item-details-wrapper">
                                    <p className="result-item-details-songName">
                                        {song.name}
                                    </p>
                                    <p className="result-item-details-songArtist">
                                        {song.artists}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecommendationImage;
