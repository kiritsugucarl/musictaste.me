import { useState } from "react";
import testData from "../testData.json";

const SearchBox = ({ addSongToAddedList }) => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredData, setFilteredData] = useState(testData);
    const [selectedSongData, setSelectedSongData] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearchInput(value);
        filterData(value);
    };

    const filterData = (searchInput) => {
        const filteredData = testData.filter((item) =>
            item.songName.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredData(filteredData);
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

    const playSong = (item) => {
        console.log("Playing Song ID: " + item);
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

                <input
                    className="main__content-searchBar"
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={handleInputChange}
                />
            </div>

            <ul className="main__content-search-result">
                {filteredData.map((item) => (
                    <li
                        key={item.id}
                        className="main__content-search-result-item"
                        onClick={() => handleItemClick(item)}
                    >
                        <button
                            className="main__content-search-result-playButton"
                            onClick={() => playSong(item)}
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
                        <img
                            className="main__content-search-result-albumImg"
                            src={item.songAlbumImg}
                        />
                        <div className="main__content-search-result-songDetails-wrapper">
                            <p className="main__content-search-result-songName">
                                {item.songName}
                            </p>
                            <p className="main__content-search-result-songDetails">
                                {item.songArtist} - {item.songAlbum} (
                                {item.songReleased})
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            {showPopup && (
                <div className="searchResult__popup">
                    <div
                        className="searchResult__closeSection"
                        onClick={handleClosePopup}
                    ></div>
                    <div className="searchResult__popup-container">
                        <button
                            className="searchResult__closeButton"
                            onClick={handleClosePopup}
                        >
                            <svg
                                className="searchResult__closeButtonImg"
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
                        <div className="searchResult__popup-details">
                            <img
                                className="searchResult__popup-img"
                                src={selectedSongData.songAlbumImg}
                            />
                            <div className="searchResult__popup-songDetails-container">
                                <div className="searchResult__popup-songDetails-title-wrapper">
                                    <p className="searchResult__popup-title">
                                        {selectedSongData.songName}
                                    </p>
                                    <p className="searchResult__popup-subtitle">
                                        {selectedSongData.songArtist} -{" "}
                                        {selectedSongData.songAlbum} (
                                        {selectedSongData.songReleased})
                                    </p>
                                </div>
                                <button
                                    className="searchResult__popup-addButton"
                                    onClick={() => addSong(selectedSongData.id)}
                                >
                                    <svg
                                        className="searchResult__popup-addButtonImg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="searchResult__popup-songDetails-songBar">
                                00:00 Bar to be added later 0:20
                            </div>
                            <p className="searchResult__popup-songDetails-tip">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum fringilla elit vel
                                aliquet fringilla.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBox;
