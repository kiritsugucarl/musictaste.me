import { useState } from "react";
import testData from "../testData.json";

const SearchBox = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredData, setFilteredData] = useState(testData);

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
                    >
                        <button className="main__content-search-result-playButton">
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
        </div>
    );
};

export default SearchBox;
