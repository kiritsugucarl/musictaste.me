import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
    CLIENT_ID,
    REDIRECT_URI,
    RESPONSE_TYPE,
} from "../../config/spotifyConfig";
import { Browser } from "@capacitor/browser";
import { Capacitor } from "@capacitor/core";
import { useToken } from "../../config/TokenContext";
import {
    fetchDataFromFirebase,
    calculatePercentage,
} from "../../config/firebaseServices/fetchDataFromFirebase";
import PersonalityCard from "./components/PersonalityCard/PersonalityCard";
import personalitiesData from "./data/personalityCardData.json";
import HomeError from "../../components/overlays/HomeError/HomeError";
import spotifyLogo from "/spotify-logo.png";
import "./Home.css";

const Home = () => {
    // State variables
    const { token, setToken } = useToken();
    const [activeIndex, setActiveIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const [slideDirection, setSlideDirection] = useState(null);
    const [error, setError] = useState(false);
    const [percentages, setPercentages] = useState({});

    const handleGetStarted = async () => {
        window.open(
            `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`,
            "_self"
        );
    };

    useEffect(() => {
        // Fetch data from Firebase and calculate percentages
        const fetchAndCalculatePercentages = async () => {
            try {
                const data = await fetchDataFromFirebase();
                const calculatedPercentages = calculatePercentage(data);
                setPercentages(calculatedPercentages);
                // console.log(percentages);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchAndCalculatePercentages();
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get("error") === "access_denied") {
            setError(true); // Set error state to true if access denied

            setTimeout(() => {
                handleCloseError();
            }, 10000);
        }
    }, []);

    const handleCloseError = () => {
        setError(false);
    };

    // handle the carousel movement
    const handleNext = () => {
        setActiveIndex(
            (prevIndex) =>
                (prevIndex + 1) % Object.keys(personalitiesData).length
        );
        setSlideDirection("next");
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0
                ? Object.keys(personalitiesData).length - 1
                : prevIndex - 1
        );
        setSlideDirection("prev");
    };

    // handle swiping carousel for mobile version
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (startX !== null) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - startX;

            if (deltaX > 50) {
                handlePrev();
                setStartX(null);
            } else if (deltaX < -50) {
                handleNext();
                setStartX(null);
            }
        }
    };

    const handleTouchEnd = () => {
        setStartX(null);
    };

    // handle display of cards in carousel

    const getVisibleIndices = (activeIndex, totalCards) => {
        const prevIndex = (activeIndex - 1 + totalCards) % totalCards;
        const nextIndex = (activeIndex + 1) % totalCards;
        return [prevIndex, activeIndex, nextIndex];
    };

    const visibleIndices = getVisibleIndices(
        activeIndex,
        Object.keys(personalitiesData).length
    );

    const visibleCards = visibleIndices.map(
        (index) => Object.keys(personalitiesData)[index]
    );

    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";

    return (
        <main className="container">
            <div className="home-container">
                {error && <HomeError onClose={handleCloseError} />}

                <div id="#section-1" className="home-wrapper">
                    <div className="home__section-1-wrapper">
                        <div className="home__img-container">
                            <img className="home__img" src="/main-mascot.gif" />
                        </div>
                        <div className="home__main">
                            <div className="home__title-wrapper">
                                <h2 className="home__main-title">
                                    musictaste
                                    <span className="title-mustard">.</span>
                                    me
                                </h2>
                                <p className="home__main-description">
                                    musictaste.me is a Web Application that aims
                                    to identify your music taste. Get started
                                    now and identify your music taste!
                                </p>
                                <div className="home__login-container">
                                    {/* if there is no token then the button is get started; otherwise, proceed */}
                                    {!token ? (
                                        <button
                                            className="home__login-button"
                                            onClick={handleGetStarted}
                                        >
                                            GET STARTED
                                        </button>
                                    ) : (
                                        <Link
                                            className="home__login-button"
                                            to="/main"
                                        >
                                            PROCEED
                                        </Link>
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
                        <div className="home__title-2-wrapper">
                            <h2 className="home__title">
                                Find your{" "}
                                <span className="title-mustard">
                                    music taste
                                </span>
                                .
                            </h2>
                            <p className="home__main-description-2">
                                musictaste.me offers to find the suitable music
                                taste depending on what you like. Proceed to the
                                next page to identify your music taste.
                            </p>
                        </div>
                    </div>
                    <img
                        className="home__img-landing"
                        src="/main-landing.png"
                    />
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
                            musictaste.me also delivers the predicted
                            personality of the user based on the results of
                            their music taste.
                        </p>
                    </div>

                    <div
                        className="home__personality-carousel"
                        onTouchStart={(e) => handleTouchStart(e)}
                        onTouchMove={(e) => handleTouchMove(e)}
                        onTouchEnd={() => handleTouchEnd()}
                    >
                        <button
                            className="carousel-control"
                            onClick={handlePrev}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 19.5 8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>

                        {/* map the data of cards and get their details */}
                        {visibleCards.map((personalityName, index) => (
                            <PersonalityCard
                                key={personalityName}
                                personality={personalitiesData[personalityName]}
                                isActive={index === 1}
                                index={index}
                                percentage={
                                    percentages
                                        ? percentages[personalityName]
                                        : 0
                                }
                            />
                        ))}

                        <button
                            className="carousel-control"
                            onClick={handleNext}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
