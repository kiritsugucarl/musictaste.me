import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./Main.css";
import testData from "./testData.json";
import { useToken } from "../../config/TokenContext";

const Main = () => {
    const [addedSongs, setAddedSongs] = useState([]);
    const [counter, setCounter] = useState(0);

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

    const { token } = useToken();

    return (
        <main className="container content-container section">
            <div className="main-wrapper">
                <div className="main__content-wrapper">
                    <div className="main__title-wrapper">
                        <h2 className="main__title">Find your music taste.</h2>
                        <p className="main__titleDesc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum fringilla elit vel aliquet
                            fringilla. Nunc luctus sed orci ac sodales.
                        </p>
                    </div>
                    <SearchBox
                        addSongToAddedList={addSongToAddedList}
                        removeSongFromAddedList={removeSongFromAddedList}
                        addedSongs={addedSongs}
                    />
                </div>
                <div className="main__addedSongs-wrapper">
                    <h2 className="main__addedSong-title">ADDED SONGS</h2>
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
                    <button className="main__addedSongs-getResultBtn">
                        Get Result
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Main;
