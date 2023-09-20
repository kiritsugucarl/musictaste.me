import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./Main.css";
import testData from "./testData.json";

const Main = () => {
    const [addedSongs, setAddedSongs] = useState([]);

    const addSongToAddedList = (songId) => {
        const songToAdd = testData.find((song) => song.id === songId);
        setAddedSongs([...addedSongs, songId]);
    };

    // const removeSongFromAddedList = (songId) => {
    //     setAddedSongs(addedSongs.filter((song) => song.id !== songId));
    // };

    const getSongDetails = (songId) => {
        return testData.find((song) => song.id === songId);
    };

    return (
        <main className="container">
            <div className="main-wrapper">
                <div className="main__content-wrapper">
                    <div className="main__title-wrapper">
                        <h2 className="main__title">Find your music taste.</h2>
                        <p className="main__titleDesc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum fringilla elit vel aliquet
                            fringilla. Nunc luctus sed orci ac sodales.npm
                        </p>
                    </div>
                    <SearchBox addSongToAddedList={addSongToAddedList} />
                </div>
                <div className="main__addedSongs-wrapper">
                    <h2 className="main__addedSong-title">ADDED SONGS</h2>
                    <ul className="main__addedSong-songList">
                        {addedSongs.map((songId) => (
                            <li
                                key={songId}
                                className="main__addedSong-songList-item"
                            >
                                <p className="main__addedSong-songList-iteration">
                                    {songId}
                                </p>
                                <img
                                    className="main__addedSong-songList-songAlbumImg"
                                    src={getSongDetails(songId)?.songAlbumImg}
                                />
                                <div className="main__addedSong-songList-details-wrapper">
                                    <p className="main__addedSong-songList-songName">
                                        {getSongDetails(songId)?.songName}
                                    </p>
                                    <p className="main__addedSong-songList-songDetails">
                                        {getSongDetails(songId)?.songArtist} -{" "}
                                        {getSongDetails(songId)?.songAlbum} (
                                        {getSongDetails(songId)?.songReleased})
                                    </p>
                                </div>
                                <button
                                    className="main__addedSong-songList-removeButton"
                                    // onClick={() =>
                                    //     removeSongFromAddedList(songId)
                                    // }
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
                            </li>
                        ))}
                    </ul>
                    <button className="main__addedSongs-getResultBtn">
                        Get Result
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Main;
