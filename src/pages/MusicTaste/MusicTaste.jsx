import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./MusicTaste.css";

const MusicTaste = () => {
    const [addedSongs, setAddedSongs] = useState([]);
    const [counter, setCounter] = useState(0);

    const navigate = useNavigate();

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

    // get results
    const getResults = () => {
        {
            counter === 5
                ? navigate("/result")
                : console.log("Need five inputs!");
        }
    };

    return (
        <main className="container content-container section">
            <div className="musicTaste-wrapper">
                <div className="musicTaste__content-wrapper">
                    <div className="musicTaste__title-wrapper">
                        <h2 className="musicTaste__title">
                            Find your music taste.
                        </h2>
                        <p className="musicTaste__titleDesc">
                            Pick five (5) songs that you absolutely love to
                            evaluate and identify your music taste! (Song
                            library comes from Spotify)
                        </p>
                    </div>
                    <SearchBox
                        addSongToAddedList={addSongToAddedList}
                        removeSongFromAddedList={removeSongFromAddedList}
                        addedSongs={addedSongs}
                    />
                </div>
                <div className="musicTaste__addedSongs-wrapper">
                    <h2 className="musicTaste__addedSong-title">ADDED SONGS</h2>
                    <ul className="musicTaste__addedSong-songList">
                        {addedSongs.map((song, index) => (
                            <li
                                key={song.id}
                                className="musicTaste__addedSong-songList-item"
                            >
                                <p className="musicTaste__addedSong-songList-iteration">
                                    {index + 1}
                                </p>
                                <img
                                    className="musicTaste__addedSong-songList-songAlbumImg"
                                    src={song.album.images[0].url}
                                />
                                <div className="musicTaste__addedSong-songList-details-wrapper">
                                    <p className="musicTaste__addedSong-songList-songName">
                                        {song.name}
                                    </p>
                                    <p className="musicTaste__addedSong-songList-songDetails">
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
                                    className="musicTaste__addedSong-songList-removeButton"
                                    onClick={() =>
                                        removeSongFromAddedList(song)
                                    }
                                >
                                    <svg
                                        className="musicTaste__addedSong-songList-removeButtonImg"
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
                        onClick={getResults}
                        className="musicTaste__addedSongs-getResultBtn"
                    >
                        Get Result
                    </button>
                </div>
            </div>
        </main>
    );
};

export default MusicTaste;
