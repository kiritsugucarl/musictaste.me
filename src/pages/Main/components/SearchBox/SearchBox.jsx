import { useState, useEffect } from "react";
import axios from "axios";
import { useToken } from "../../../../config/TokenContext";
import "./SearchBox.css";

const SearchBox = ({
    addSongToAddedList,
    addedSongs,
    removeSongFromAddedList,
}) => {
    // Use Access Token stored
    const { token } = useToken();

    const SEARCH_ENDPOINT = "https://api.spotify.com/v1/search";

    // Searchbox Parts
    const [searchKey, setSearchKey] = useState("");
    const [searchResults, setSearchResults] = useState({
        albums: { items: [] },
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPreviewUrl, setCurrentPreviewUrl] = useState("");
    const [currentTrackId, setCurrentTrackId] = useState(null);

    // Playback States
    const [isPlaying, setIsPlaying] = useState(false);

    let searchTimeout;

    const searchItems = async (e) => {
        // console.log("token : ", token);
        e.preventDefault();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                q: searchKey,
                type: "track",
                offset: (currentPage - 1) * 5,
                limit: 5,
            },
        };

        try {
            // console.log("ETO CONFIG", config);
            const response = await axios.get(SEARCH_ENDPOINT, config);
            setSearchResults(response.data);
            setTotalResults(response.data.total);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearchKey(value);
        clearTimeout(searchTimeout); // Clear the previous timeout
        searchTimeout = setTimeout(() => searchItems(e), 1000); // Pass the event object to searchItems
    };

    const addSong = (item) => {
        addSongToAddedList(item);
    };

    const playSong = (previewUrl, trackId) => {
        const audio = document.getElementById("audio-element");

        if (currentPreviewUrl === previewUrl) {
            // If the same song is clicked, toggle play/pause
            if (audio.paused) {
                audio.play();
                setIsPlaying(true);
                setCurrentTrackId(trackId); // Use setCurrentTrackId to update currentTrackId
            } else {
                audio.pause();
                setIsPlaying(false);
                setCurrentTrackId(null); // Use setCurrentTrackId to update currentTrackId
            }
        } else {
            // If a new song is clicked, set it to play
            setCurrentPreviewUrl(previewUrl);
            audio.play();
            setIsPlaying(true);
            setCurrentTrackId(trackId); // Use setCurrentTrackId to update currentTrackId
        }
    };

    const renderResults = () => {
        if (!searchResults || !searchResults.tracks) {
            return (
                <div>
                    <p className="searchBox__content-search-result-prompt">
                        Search a song, artist, or album...
                    </p>
                </div>
            );
        }

        return (
            <ul className="searchBox__content-search-result">
                {searchResults.tracks.items.map((track) => {
                    const album = track.album; // Extract album information
                    const previewUrl = track.preview_url;
                    {
                        // console.log(`ID: ${track.id}`);
                    }
                    const isSongAdded = addedSongs.some(
                        (addedSong) => addedSong.id === track.id
                    );

                    return (
                        <li
                            key={track.id}
                            className="searchBox__content-search-result-item"
                        >
                            <button
                                className="searchBox__content-search-result-playButton"
                                onClick={() => {
                                    playSong(previewUrl, track.id);
                                }}
                            >
                                {currentTrackId === track.id && isPlaying ? (
                                    // Show pause button for the currently playing song
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="searchBox__content-search-result-pause"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    // Show play button for other songs
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="searchBox__content-search-result-play"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                            {album.images && album.images[0] && (
                                <img
                                    className="searchBox__content-search-result-albumImg"
                                    src={album.images[0].url}
                                />
                            )}
                            <div className="searchBox__content-search-result-songDetails-wrapper">
                                <p className="searchBox__content-search-result-songName">
                                    {track.name}
                                </p>
                                <p className="searchBox__content-search-result-songDetails">
                                    {track.artists.map((artist) => artist.name)}
                                    - {track.album.release_date.substring(0, 4)}
                                </p>
                            </div>
                            {isSongAdded ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="searchBox__content-search-result-addedPrompt"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <button
                                    className="searchBox__content-search-result-addButton"
                                    onClick={() => addSong(track)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="searchBox__content-search-result-addButtonImg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                </button>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className="searchBox__content-search">
            <div className="searchBox__content-searchBar-wrapper">
                <svg
                    className="searchBox__content-searchBarImg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
                {/* {console.log(token)} */}
                {token ? (
                    <input
                        className="searchBox__content-searchBar"
                        type="text"
                        placeholder="Search..."
                        onChange={handleInputChange}
                    />
                ) : (
                    <span>ERR 401: No token found</span>
                )}
            </div>
            {renderResults()}

            {currentPreviewUrl && (
                <audio
                    controls={false}
                    autoPlay
                    src={currentPreviewUrl}
                    className="searchBox__content-search-result-audio"
                    id="audio-element"
                >
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
};

export default SearchBox;
