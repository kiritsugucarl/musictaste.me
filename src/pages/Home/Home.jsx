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

const Home = () => {
    const { token } = useToken();

    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";

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
                <span></span>
            )}
        </main>
    );
};

export default Home;
