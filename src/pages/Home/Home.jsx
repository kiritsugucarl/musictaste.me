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

    return (
        <main className="container">
            <div className="home-container">
                <div id="#section-1" className="home-wrapper">
                    <div className="home__img-container">
                        <img className="home__img" src="/main mascot.png" />
                        <img
                            src="/mascot-bg.png"
                            alt=""
                            className="home__mascot-bg"
                        />
                    </div>
                    <div className="home__title-wrapper">
                        <h2 className="home__main-title">
                            musictaste<span className="title-mustard">.</span>me
                        </h2>
                        <p className="home__main-description">
                            musictaste.me is a Web Application that aims to
                            identify your music taste. Get started now and
                            identify your music taste!
                        </p>
                    </div>

                    <div className="home__login-container">
                        {!token ? (
                            <div className="home__login-button">
                                <a
                                    href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                                >
                                    GET STARTED
                                </a>
                            </div>
                        ) : (
                            <div className="home__login-button">
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
                <div className="home-container-2">
                    <h2>
                        Find your{" "}
                        <span className="title-mustard">music taste</span>.
                    </h2>
                </div>
                <div className="home-container-3">
                    <h2>
                        <span className="title-mustard">Find your</span> music
                        personality <span className="title-mustard">.</span>
                    </h2>
                </div>
            </div>
        </main>
    );
};

export default Home;
