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
            <input
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={handleInputChange}
            />

            <ul className="main__content-search-result">
                {filteredData.map((item) => (
                    <li
                        key={item.id}
                        className="main__content-search-result-item"
                    >
                        <button className="main__content-search-result-playButton">
                            <img
                                src="/play-icon.png"
                                className="main__content-search-result-play"
                            />
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
