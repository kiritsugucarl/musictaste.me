import { Link } from "react-router-dom";
import logo from "/logo.png";
import "./Navbar.css";
import { CSSTransition } from "react-transition-group";
import {
    CLIENT_ID,
    REDIRECT_URI,
    RESPONSE_TYPE,
} from "../../config/spotifyConfig";
import { useToken } from "../../config/TokenContext";

const Navbar = ({ isMobileNavOpen, onMobileMenuToggle }) => {
    const { token, setToken } = useToken();

    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";

    const handleMobileMenuClick = () => {
        onMobileMenuToggle(false);
    };

    const logout = () => {
        setToken("");
        window.localStorage.removeItem("token");
        console.log(window.localStorage.getItem("token"));
    };

    return (
        <div className="header container">
            {/* Desktop nav */}
            <div className="nav-wrapper">
                <button
                    className="nav-menuButton"
                    onClick={() => onMobileMenuToggle(!isMobileNavOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                <div className="nav__logo-wrapper">
                    <img className="nav-logo" src={logo} />
                    <h2 className="nav-title">
                        mt<span className="title-mustard">.</span>me
                    </h2>
                </div>
                <nav className="desktop-nav">
                    <ul className="desktop-nav-ul">
                        <li className="desktop-nav-li">
                            <Link to="/" className="desktop-nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="desktop-nav-li">
                            <Link to="/about" className="desktop-nav-link">
                                About
                            </Link>
                        </li>
                        <li className="desktop-nav-li">
                            <Link to="/contact" className="desktop-nav-link">
                                Contact
                            </Link>
                        </li>
                        <li className="desktop-nav-li">
                            {!token ? (
                                <a
                                    className="desktop-nav-link"
                                    href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                                >
                                    LOGIN
                                </a>
                            ) : (
                                <button
                                    className="desktop-nav-link"
                                    onClick={logout}
                                >
                                    LOGOUT
                                </button>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Mobile navbar */}
            <CSSTransition
                in={isMobileNavOpen}
                timeout={300}
                classNames="mobile-nav-slide"
                unmountOnExit
            >
                <>
                    {isMobileNavOpen && (
                        <div
                            className={`mobile-nav ${
                                isMobileNavOpen ? "show" : ""
                            }`}
                        >
                            <button
                                className="mobile-nav-returnButton"
                                onClick={handleMobileMenuClick}
                            >
                                <svg
                                    className="mobile-nav-returnButtonImg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                                    />
                                </svg>
                            </button>
                            <nav className="mobile-nav-wrapper">
                                <ul className="mobile-nav-ul">
                                    <li className="mobile-nav-li">
                                        <svg
                                            className="mobile-nav-linkIcon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                            />
                                        </svg>
                                        <Link
                                            to="/"
                                            className="mobile-nav-link"
                                            onClick={handleMobileMenuClick}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="mobile-nav-li">
                                        <svg
                                            className="mobile-nav-linkIcon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                            />
                                        </svg>

                                        <Link
                                            to="/about"
                                            className="mobile-nav-link"
                                            onClick={handleMobileMenuClick}
                                        >
                                            About
                                        </Link>
                                    </li>

                                    <li className="mobile-nav-li">
                                        <svg
                                            className="mobile-nav-linkIcon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                            />
                                        </svg>

                                        <Link
                                            to="/contact"
                                            className="mobile-nav-link"
                                            onClick={handleMobileMenuClick}
                                        >
                                            Contact Us
                                        </Link>
                                    </li>

                                    <li className="mobile-nav-li">
                                        {!token ? (
                                            <a
                                                className="mobile-nav-link"
                                                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                                            >
                                                LOGIN
                                            </a>
                                        ) : (
                                            <button
                                                className="mobile-nav-link"
                                                onClick={logout}
                                            >
                                                LOGOUT
                                            </button>
                                        )}
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </>
            </CSSTransition>
        </div>
    );
};

export default Navbar;
