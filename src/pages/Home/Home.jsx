<<<<<<< HEAD
import './Home.css'

const Home = () => {
    return(
        <main className="container section">
            <h1>Home Page</h1>
=======
// import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    CLIENT_ID,
    REDIRECT_URI,
    RESPONSE_TYPE,
} from "../../config/spotifyConfig";
import { useToken } from "../../config/TokenContext";
import "./Home.css";

const Home = () => {
    const { token } = useToken();

    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";

    const navigate = useNavigate();

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
                navigate("/main")
            )}
>>>>>>> b4d8cc4548f4af10424d692ea436d214575996e0
        </main>
    )
}

export default Home;