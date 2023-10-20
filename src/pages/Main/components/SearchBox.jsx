import { useState, useEffect } from "react";
import axios from "axios";
// import testData from "../testData.json";
import { useToken } from "../../../config/TokenContext";
import {
    CLIENT_ID,
    REDIRECT_URI,
    RESPONSE_TYPE,
} from "../../../config/spotifyConfig";
import "./SearchBox.css";

const SearchBox = ({ addSongToAddedList }) => {
    // Use Access Token stored
    const { token, setToken } = useToken();

    const SEARCH_ENDPOINT = "https://api.spotify.com/v1/search";

    // Searchbox Parts
    const [searchKey, setSearchKey] = useState("");
    // const [filteredData, setFilteredData] = useState(testData);
    const [searchResults, setSearchResults] = useState({
        albums: { items: [] },
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPreviewUrl, setCurrentPreviewUrl] = useState("");

    // Popup requirements
    const [selectedSongData, setSelectedSongData] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

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
                offset: (currentPage - 1) * 10,
                limit: 10,
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

    const fetchAlbumImg = async (e) => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await axios.get(
                `https://api.spotify.com/v1/albums/${albumId}`,
                config
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching album info: ", error);
            return null;
        }
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearchKey(value);

        console.log(searchKey);

        clearTimeout(searchTimeout); // Clear the previous timeout
        searchTimeout = setTimeout(() => searchItems(e), 1000); // Pass the event object to searchItems
    };

    const handleItemClick = (item) => {
        setSelectedSongData(item);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const addSong = (item) => {
        addSongToAddedList(item);
        console.log(item);
    };

    const playSong = (previewUrl) => {
        console.log(previewUrl);
        setCurrentPreviewUrl(previewUrl);
    };

    const renderResults = () => {
        if (!searchResults || !searchResults.tracks) {
            return (
                <div>
                    <p>No items found based...</p>
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
                    return (
                        <li
                            key={track.id}
                            className="main__content-search-result-item"
                            // onClick = {() => handleItemClick(item)}
                        >
                            <button
                                className="main__content-search-result-playButton"
                                onClick={() => playSong(previewUrl)}
                            >
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
                                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                                    />
                                </svg>
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
                    controls
                    autoPlay
                    src={currentPreviewUrl}
                    className="main__content-search-result-audio"
                >
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
};

export default SearchBox;
