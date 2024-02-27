import { Link, useNavigate } from "react-router-dom";
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
    const { token, setToken, clearToken } = useToken();

    const navigate = useNavigate();

    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";

    const handleMobileMenuClick = () => {
        onMobileMenuToggle(false);
    };

    const logout = () => {
        clearToken();
        navigate("/");
    };

    return (
        <div className="header container">
            {/* Desktop nav */}
            <div className="nav-wrapper">
                <div className="nav__logo-wrapper">
                    <img className="nav-logo" src={logo} />
                    <h2 className="nav-title">
                        mt<span className="title-mustard">.</span>me
                    </h2>
                </div>

                <div>
                    <button
                        className="nav-menuButton"
                        onClick={() => onMobileMenuToggle(!isMobileNavOpen)}
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
                                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                            />
                        </svg>
                    </button>
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
                            <nav className="mobile-nav-wrapper">
                                {token && (
                                    <div className="mobile-nav-user-wrapper">
                                        <p className="mobile-nav-user-greeting">
                                            Hello,
                                        </p>
                                        <p className="mobile-nav-user-name">
                                            &nbsp;{token.user.display_name}
                                        </p>
                                    </div>
                                )}
                                <hr className="mobile-nav-hr" />
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
                                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
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
                                            <>
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
                                                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                                                    />
                                                </svg>

                                                <a
                                                    className="mobile-nav-link"
                                                    href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                                                >
                                                    Login
                                                </a>
                                            </>
                                        ) : (
                                            <>
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
                                                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                                                    />
                                                </svg>

                                                <button
                                                    className="mobile-nav-link"
                                                    onClick={logout}
                                                >
                                                    Logout
                                                </button>
                                            </>
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
