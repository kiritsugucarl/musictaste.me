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
                    <div className="home__section-1-wrapper">
                        <div className="home__img-container">
                            <img className="home__img" src="/main-mascot.png" />
                        </div>
                        <div className="home__main">
                            <div className="home__title-wrapper">
                                <h2 className="home__main-title">
                                    musictaste
                                    <span className="title-mustard">.</span>me
                                </h2>
                                <p className="home__main-description">
                                    musictaste.me is a Web Application that aims
                                    to identify your music taste. Get started
                                    now and identify your music taste!
                                </p>
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
                                        <p>Powered by</p>
                                        <img
                                            className="home__login-spotify-img"
                                            src={spotifyLogo}
                                            alt="logo"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-container-2">
                    <div className="home__title-wrapper-2">
                        <div className="home__img-container">
                            <img
                                className="home__img-landing"
                                src="/main-landing.png"
                            />
                        </div>
                        <div className="home__title-2-wrapper">
                            <h2 className="home__title">
                                Find your{" "}
                                <span className="title-mustard">
                                    music taste
                                </span>
                                .
                            </h2>
                            <p className="home__main-description-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla neque dui, pulvinar in
                                sagittis vel, convallis vitae erat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="home-container-3">
                    <div className="home__title-wrapper-3">
                        <h2 className="home__title-3">
                            Find your{" "}
                            <span className="title-mustard">
                                music personality
                            </span>
                            .
                        </h2>
                        <p className="home__main-description-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla neque dui, pulvinar in sagittis vel,
                            convallis vitae erat.
                        </p>
                    </div>
                    <div className="flip__main">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img
                                        className="card__img"
                                        src="/personalities/Emotional.png"
                                    />
                                    <p className="card__title">The Emotional</p>
                                </div>
                                <div className="flip-card-back">
                                    <p className="card__description">
                                        Focuses on the lyrical message of the
                                        songs and the feelings they convey
                                        rather than the artist. Likes the songs
                                        that resonate with their emotions and
                                        sing with their most heartfelt voice out
                                        there, usually alone while singing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
