// import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    CLIENT_ID,
    REDIRECT_URI,
    RESPONSE_TYPE,
} from "../../config/spotifyConfig";
import { useToken } from "../../config/TokenContext";
import "./Home.css";

//Temporary
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const { token } = useToken();

    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";

    // const navigate = useNavigate();

    const [searchKey, setSearchKey] = useState("");
    const [searchResults, setSearchResults] = useState({
        albums: { items: [] },
        artists: { items: [] },
        tracks: { items: [] },
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const searchItems = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                q: searchKey,
                type: "album,artist,track",
                offset: (currentPage - 1) * 20, // Adjust the limit as needed
            },
        };

        try {
            const response = await axios.get(
                "https://api.spotify.com/v1/search",
                config
            );
            console.log(response.data);
            setSearchResults(response.data);
            setTotalResults(response.data.total);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            searchItems();
        }
    };

    const handleNextPage = () => {
        const maxPage = Math.ceil(totalResults / 20);
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1);
            searchItems();
        }
    };

    const renderResults = () => {
        if (!searchResults) {
            return (
                <div>
                    <p>No items based on your search...</p>
                </div>
            );
        }

        return (
            <div>
                {searchResults.albums.items.length > 0 && (
                    <div>
                        <h2>Albums</h2>
                        <ul>
                            {searchResults.albums.items.map((album) => (
                                <li key={album.id}>
                                    <img
                                        src={album.images[0].url}
                                        alt={album.name}
                                    />
                                    <p>{album.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {searchResults.artists.items.length > 0 && (
                    <div>
                        <h2>Artists</h2>
                        <ul>
                            {searchResults.artists.items.map((artist) => (
                                <li key={artist.id}>
                                    {/* Render artist information here */}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {searchResults.tracks.items.length > 0 && (
                    <div>
                        <h2>Tracks</h2>
                        <ul>
                            {searchResults.tracks.items.map((track) => (
                                <li key={track.id}>
                                    {/* Render track information here */}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    // const renderArtists = () => {
    //     return artists.map((artist) => (
    //         <div key={artist.id}>
    //             {artist.images.length ? (
    //                 <img width={"200px"} src={artist.images[0].url} />
    //             ) : (
    //                 <div>No image</div>
    //             )}
    //             {artist.name}
    //         </div>
    //     ));
    // };

    return (
        <main className="container section">
            <h1>musictaste.me</h1>
            {!token ? (
                <a
                    href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                >
                    Login to Spotify
                </a>
            ) : (
                // navigate("/main")
                <span>Dev mode on</span>
            )}

            {token ? (
                <form onSubmit={searchItems}>
                    <input
                        type="text"
                        onChange={(e) => setSearchKey(e.target.value)}
                    />
                    {/* <button type={"submit"}>Search</button> */}
                </form>
            ) : (
                <span>Dev mode inactive</span>
            )}

            {searchResults.albums.items.length > 0 && (
                <div>
                    <h2>Albums</h2>
                    <ul>
                        {searchResults.albums.items.map((album) => (
                            <li key={album.id}>
                                <p>{album.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {searchResults.artists.items.length > 0 && (
                <div>
                    <h2>Artists</h2>
                    <ul>
                        {searchResults.artists.items.map((artist) => (
                            <li key={artist.id}>
                                <p>{artist.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {searchResults.tracks.items.length > 0 && (
                <div>
                    <h2>Tracks</h2>
                    <ul>
                        {searchResults.tracks.items.map((track) => (
                            <li key={track.id}>
                                <p>{track.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* {renderResults("album")}
            {renderResults("artist")}
            {renderResults("track")} */}

            <div>
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage >= Math.ceil(totalResults / 20)}
                >
                    Next
                </button>
            </div>
        </main>
    );
};

export default Home;
