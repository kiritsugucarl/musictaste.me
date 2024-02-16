import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../config/TokenContext";
import axios from "axios";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import Recommendation from "./components/Recommendation/Recommendation";
import "./Main.css";

const Main = () => {
    const { token } = useToken();
    const [addedSongs, setAddedSongs] = useState([]);
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState('');
    const [response, setResponse] = useState('');

    const navigate = useNavigate();

    // send links to python
    const sendData = async () => {
        try {
          const res = await axios.post('/api/data', { data });
          setResponse(res.data.message);
        } catch (error) {
          console.error('Error:', error);
          setResponse('Error sending data');
        }
      };

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
    const getResults = async () => {
        if (counter === 5) {
            try {
                const trackIds = addedSongs.map((song) => song.id);

                // Fetch recommendations from Spotify API
                const recommendations = await fetchRecommendations(
                    trackIds,
                    token
                );

                console.log("Recommended songs:", recommendations);
            } catch (error) {
                console.error("Error: ", error.message);
            }
        } else {
            console.log("Need five inputs!");
        }
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
        return response.data.tracks; // i will get the links from this line
    };

    return (
        <main className="container content-container section">
            <div className="main-wrapper">
                <div className="main__content-wrapper">
                    <div className="main__title-wrapper">
                        <h2 className="main__title">
                            Find your{" "}
                            <span className="title-mustard"> music taste </span>
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
                        // onClick={() => {getResults; sendData();}} this line will send the results images to python
                        onClick={getResults}
                        className="main__addedSongs-getResultBtn"
                    >
                        Get Result
                    </button>
                </div>
            </div>
            <Recommendation />
        </main>
    );
};

export default Main;
