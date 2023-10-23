import { useState, useEffect } from "react";
import axios from "axios";
import { useToken } from "../../../config/TokenContext";
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
            const response = await axios.get(SEARCH_ENDPOINT, config);
            console.log(response.data);
            setSearchResults(response.data);
            setTotalResults(response.data.total);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearchKey(value);

        console.log(searchKey);

        clearTimeout(searchTimeout); // Clear the previous timeout
        searchTimeout = setTimeout(() => searchItems(e), 1000); // Pass the event object to searchItems
    };

    const addSong = (item) => {
        addSongToAddedList(item);
        console.log(item);
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
                    <p className="main__content-search-result-prompt">
                        Search a song, artist, or album...
                    </p>
                </div>
            );
        }

        return (
            <ul className="main__content-search-result">
                {searchResults.tracks.items.map((track) => {
                    const album = track.album; // Extract album information
                    const previewUrl = track.preview_url;
                    {
                        console.log(`ID: ${track.id}`);
                    }
                    const isSongAdded = addedSongs.some(
                        (addedSong) => addedSong.id === track.id
                    );

                    return (
                        <li
                            key={track.id}
                            className="main__content-search-result-item"
                        >
                            <button
                                className="main__content-search-result-playButton"
                                onClick={() => {
                                    playSong(previewUrl, track.id);
                                }}
                            >
                                {currentTrackId === track.id && isPlaying ? (
                                    // Show pause button for the currently playing song
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="main__content-search-result-pause"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                ) : (
                                    // Show play button for other songs
                                    <svg
                                        className="main__content-search-result-play"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15.91 11.672a.375.375 0 010 0.656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                                        />
                                    </svg>
                                )}
                            </button>
                            {album.images && album.images[0] && (
                                <img
                                    className="main__content-search-result-albumImg"
                                    src={album.images[0].url}
                                />
                            )}
                            <div className="main__content-search-result-songDetails-wrapper">
                                <p className="main__content-search-result-songName">
                                    {track.name}
                                </p>
                                <p className="main__content-search-result-songDetails">
                                    {track.artists.map((artist) => artist.name)}
                                    - {track.album.release_date.substring(0, 4)}
                                </p>
                            </div>
                            {isSongAdded ? (
                                <p className="main__content-search-result-addedPrompt">
                                    Added
                                </p>
                            ) : (
                                <button
                                    className="main__content-search-result-addButton"
                                    onClick={() => addSong(track)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="main__content-search-result-addButtonImg"
                                        stroke="currentColor"
                                    >
                                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
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
        <div className="main__content-search">
            <div className="main__content-searchBar-wrapper">
                <svg
                    className="main__content-searchBarImg"
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
                {console.log(token)}
                {token ? (
                    <input
                        className="main__content-searchBar"
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
                    className="main__content-search-result-audio"
                    id="audio-element"
                >
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
};

export default SearchBox;
