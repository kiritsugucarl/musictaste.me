import { Link, useNavigate } from "react-router-dom";
import {
    CLIENT_ID,
    REDIRECT_URI,
    RESPONSE_TYPE,
} from "../../config/spotifyConfig";
import { useToken } from "../../config/TokenContext";
import spotifyLogo from "/spotify-logo.png";
import "./Home.css";

const Home = () => {
    const { token } = useToken();

    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";

    const navigate = useNavigate();

    const handleLogin = () => {
        const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

        const authWindow = window.open(
            authUrl,
            "_blank",
            "height=600,width=400"
        );

        window.addEventListener("message", (event) => {
            if (event.origin === window.location.origin) {
                if (event.data === "authentication_success") {
                    authWindow.close();
                }
            }
        });
    };

    return (
        <main className="container">
            <div className="home-container">
                <div className="home-wrapper">
                    <h1 className="home_main-title">musictaste.me</h1>
                    <p className="home_main-description">
                        musictaste.me is a Web Application that aims to identify
                        your music taste. Get started now and identify your
                        music taste!
                    </p>

                    <div className="login-container">
                        {!token ? (
                            <div className="login-button">
                                <Link onClick={handleLogin}>GET STARTED</Link>
                            </div>
                        ) : (
                            <div className="login-button">
                                <Link to="/main">PROCEED</Link>
                            </div>
                        )}

                        <div className="home__spotify-ack-container">
                            <p>Powered By</p>
                            <img
                                className="home__login-spotify-img"
                                src={spotifyLogo}
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>

                <div className="model_home-container">
                    <img className="model_img" src="/model.png" alt="model" />
                </div>
            </div>
        </main>
    );
};

export default Home;
