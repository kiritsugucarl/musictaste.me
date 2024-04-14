import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import BeatLoader from "react-spinners/BeatLoader";
import { useToken } from "../../config/TokenContext";
import axios from "axios";
import html2canvas from "html2canvas";
import MainError from "../../components/overlays/MainError/MainError";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import Recommendation from "./components/Recommendation/Recommendation";
import "./Main.css";
import Personality from "./components/Personality/Personality";
import RecommendationImage from "../../components/RecommendationImage/RecommendationImage.jsx";
import MusicPersonalityRecommendations from "./components/MusicPersonalityRecommendations/MusicPersonalityRecommendation.jsx";

const Main = () => {
    const { token, isTokenValid } = useToken();
    const [addedSongs, setAddedSongs] = useState([]);
    const [audioFeatures, setAudioFeatures] = useState([]);
    const [counter, setCounter] = useState(0);
    const [resultActive, setResultActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [personality, setPersonality] = useState(null);

    // Define a function to update the personality state
    const handleUpdatePersonality = (newPersonality) => {
        setPersonality(newPersonality);
    };

    const [recommendationTrackIds, setRecommendationTrackIds] = useState([]);
    const [selectedSongsTrackIds, setSelectedSongsTrackIds] = useState([]);

    const [passableTrackIds, setPassableTrackIds] = useState([]);

    const [personalityRecoIds, setPersonalityRecoIds] = useState([]);

    const [capturedImageUrl, setCapturedImageUrl] = useState(null);

    const [showRecommendationImage, setShowRecommendationImage] =
        useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (!isTokenValid()) {
            navigate("/timeout");
        }
    }, [isTokenValid, navigate]);

    useEffect(() => {
        // Set body overflow based on the loading state
        document.body.style.overflow = loading ? "hidden" : "auto";

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [loading]);

    // add songs to added list
    const addSongToAddedList = (song) => {
        if (!addedSongs.some((addedSong) => addedSong.id === song.id)) {
            if (counter < 5) {
                setAddedSongs((prevSongs) => [...prevSongs, song]);
                setCounter((prevCounter) => prevCounter + 1);
            }
        }
    };

    // remove songs from added list
    const removeSongFromAddedList = (song) => {
        setAddedSongs((prevSongs) =>
            prevSongs.filter((addedSong) => addedSong.id != song.id)
        );
        setCounter((prevCounter) => prevCounter - 1);
    };

    const handleCloseError = () => {
        setError(false);
    };

    // get results
    const getResults = async () => {
        // Scroll to the top of the page before setting loading to false
        window.scrollTo({ top: 0, behavior: "smooth" });
        setLoading(true);
        if (counter === 5) {
            try {
                const trackIds = addedSongs.map((song) => song.id);

                // Fetch recommendations from Spotify API
                const recommendations = await fetchRecommendations(
                    trackIds,
                    token
                );

                const recommendationTrackIds = recommendations.map(
                    (song) => song.id
                );

                const selectedSongsTrackIds = addedSongs.map((song) => song.id);

                setRecommendationTrackIds(recommendationTrackIds);
                setSelectedSongsTrackIds(selectedSongsTrackIds);

                const allTrackIds = [
                    ...recommendationTrackIds,
                    ...selectedSongsTrackIds,
                ];

                setPassableTrackIds(allTrackIds);

                const personalityRecommendations = await fetchRecommendations(
                    recommendationTrackIds,
                    token
                );

                setPersonalityRecoIds(
                    personalityRecommendations.map((song) => song.id)
                );

                const selectedSongsFeatures = await fetchAudioFeatures(
                    trackIds,
                    token
                );

                const recommendedSongsFeatures = await fetchAudioFeatures(
                    recommendations.map((song) => song.id),
                    token
                );

                // navigate("/imageTest", {
                //     state: {
                //         recommendationTrackIds,
                //         selectedSongsTrackIds,
                //     },
                // });

                const allFeatures = [
                    ...selectedSongsFeatures,
                    ...recommendedSongsFeatures,
                ];

                setAudioFeatures(allFeatures);

                setResultActive(true);
                setShowRecommendationImage(true);
            } catch (error) {
                console.error("Error: ", error.message);
            }
        } else {
            setLoading(false);
            setError(true);
            setTimeout(() => {
                handleCloseError();
            }, 10000);
        }
    };

    const handleCapture = (capturedImageUrl) => {
        setCapturedImageUrl(capturedImageUrl);
        setShowRecommendationImage(false);
        setLoading(false);
    };

    // Fetch recommendations from Spotify API
    const fetchRecommendations = async (trackIds, token) => {
        const recommendationsEndpoint = `https://api.spotify.com/v1/recommendations?limit=5&seed_tracks=${trackIds.join(
            ","
        )}`;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.get(recommendationsEndpoint, config);
        return response.data.tracks;
    };

    const fetchAudioFeatures = async (trackIds, token) => {
        const audioFeaturesEndpoint = `https://api.spotify.com/v1/audio-features?ids=${trackIds.join(
            ","
        )}`;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.get(audioFeaturesEndpoint, config);
        return response.data.audio_features;
    };

    const debouncedGetResults = debounce(getResults, 300);

    return (
        <main className="container content-container section">
            <div className="main-wrapper">
                {error && <MainError onClose={handleCloseError} />}

                <div className="main__content-wrapper">
                    <div className="main__title-wrapper">
                        <h2 className="main__title">
                            Find your{" "}
                            <span className="title-accent"> music taste </span>
                        </h2>
                        <p className="main__titleDesc">
                            Pick five (5) songs that you absolutely love to
                            evaluate and identify your music personality! (Song
                            library is powered by Spotify)
                        </p>
                    </div>
                    <SearchBox
                        addSongToAddedList={addSongToAddedList}
                        removeSongFromAddedList={removeSongFromAddedList}
                        addedSongs={addedSongs}
                    />
                </div>
                <div className="main__addedSongs-wrapper">
                    <h3 className="main__addedSong-title">ADDED SONGS</h3>
                    <ul className="main__addedSong-songList">
                        {addedSongs.map((song, index) => (
                            <li
                                key={song.id}
                                className="main__addedSong-songList-item"
                            >
                                <p className="main__addedSong-songList-iteration">
                                    {index + 1}
                                </p>
                                <img
                                    className="main__addedSong-songList-songAlbumImg"
                                    src={song.album.images[0].url}
                                />
                                <div className="main__addedSong-songList-details-wrapper">
                                    <p className="main__addedSong-songList-songName">
                                        {song.name}
                                    </p>
                                    <p className="main__addedSong-songList-songDetails">
                                        {song.artists.map(
                                            (artist) => artist.name
                                        )}{" "}
                                        -{song.album.name} (
                                        {song.album.release_date.substring(
                                            0,
                                            4
                                        )}
                                        )
                                    </p>
                                </div>
                                <button
                                    className="main__addedSong-songList-removeButton"
                                    onClick={() =>
                                        removeSongFromAddedList(song)
                                    }
                                >
                                    <svg
                                        className="main__addedSong-songList-removeButtonImg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={debouncedGetResults}
                        className="main__addedSongs-getResultBtn"
                    >
                        Get Result
                    </button>
                </div>
            </div>

            {resultActive && (
                <div className="main__results-container">
                    {showRecommendationImage && personality && (
                        <RecommendationImage
                            recommendationTrackIds={recommendationTrackIds}
                            selectedSongsTrackIds={selectedSongsTrackIds}
                            onCapture={handleCapture}
                            personality={personality}
                        />
                    )}
                    <Recommendation imageUrl={capturedImageUrl} />
                    <hr className="main__results-line" />
                    <Personality
                        audioFeatures={audioFeatures}
                        onUpdatePersonality={handleUpdatePersonality}
                    />
                    <MusicPersonalityRecommendations
                        personalityRecoIds={personalityRecoIds}
                    />
                </div>
            )}

            {loading && (
                <div className="main__loading-overlay">
                    <BeatLoader color="#36d7b7" size={40} />
                </div>
            )}
        </main>
    );
};

export default Main;
