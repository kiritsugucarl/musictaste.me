import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "/logo.png";
import "./Navbar.css";
import { CSSTransition } from "react-transition-group";
import {
    CLIENT_ID,
    REDIRECT_URI,
    RESPONSE_TYPE,
} from "../../config/spotifyConfig";
import { useToken } from "../../config/TokenContext";
import { getDatabase, ref, get, onValue } from "firebase/database";

const Navbar = ({ isMobileNavOpen, onMobileMenuToggle }) => {
    const { token, user, clearToken } = useToken();
    const location = useLocation();
    const navigate = useNavigate();
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const [username, setUsername] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        // Function to fetch the username when the component mounts
        if (user && user.id) {
            const database = getDatabase();
            const usersRef = ref(database, `users/${user.id}/username`);
            const unsubscribe = onValue(usersRef, (snapshot) => {
                if (snapshot.exists()) {
                    setUsername(snapshot.val()); // Set the username state
                }
            });

            // Cleanup function to unsubscribe from the listener when component unmounts
            return () => unsubscribe();
        }
    }, [user]);

    const handleMobileMenuClick = () => {
        isMobileNavOpen(false);
    };

    const logout = () => {
        clearToken();
        setUsername("");
        navigate("/");
    };

    return (
        <div className="header container">
            {/* Desktop nav */}
            <div className="nav-wrapper">
                <Link to="/">
                    <div className="nav__logo-wrapper">
                        <img className="nav-logo" src={logo} />
                        <h2 className="nav-title">
                            mt<span className="title-accent">.</span>me
                        </h2>
                    </div>
                </Link>

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
                            <Link
                                to="/about"
                                className={`desktop-nav-link ${
                                    location.pathname === "/about"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                About
                            </Link>
                        </li>
                        <li className="desktop-nav-li">
                            <Link
                                to="/contact"
                                className={`desktop-nav-link ${
                                    location.pathname === "/contact"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="desktop-nav-li">
                            {!username ? (
                                <a
                                    className="desktop-nav-link"
                                    href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                                >
                                    LOGIN
                                </a>
                            ) : (
                                <div
                                    className="desktop-nav-dropdown"
                                    onClick={() =>
                                        setDropdownOpen(!dropdownOpen)
                                    }
                                >
                                    <p className="nav-dropdown">
                                        {username}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="nav-dropdown-icon"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    </p>{" "}
                                    {/* Display username */}
                                    {dropdownOpen && (
                                        <div className="dropdown-content">
                                            <Link
                                                className="dropdown-link"
                                                to="/profile"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="dropdown-linkIcon"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                                    />
                                                </svg>
                                                <span className="dropdown-title">
                                                    Profile
                                                </span>
                                            </Link>
                                            <button
                                                className="dropdown-link"
                                                onClick={logout}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="dropdown-linkIcon"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                                                    />
                                                </svg>
                                                <span className="dropdown-title">
                                                    Logout
                                                </span>
                                            </button>
                                        </div>
                                    )}
                                </div>
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
                                {token ? (
                                    <>
                                        <div className="mobile-nav-user-wrapper">
                                            <p className="mobile-nav-user-greeting">
                                                Hello,
                                            </p>
                                            <p className="mobile-nav-user-name">
                                                {username}
                                            </p>
                                        </div>
                                        <hr className="mobile-nav-hr" />
                                    </>
                                ) : (
                                    <></>
                                )}
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
                                            className={`mobile-nav-link ${
                                                location.pathname === "/"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={handleMobileMenuClick}
                                        >
                                            HOME
                                        </Link>
                                    </li>
                                    <li className="mobile-nav-li">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="mobile-nav-linkIcon
                                            "
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                            />
                                        </svg>

                                        <Link
                                            to="/profile"
                                            className={`mobile-nav-link ${
                                                location.pathname === "/profile"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={handleMobileMenuClick}
                                        >
                                            PROFILE
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
                                            className={`mobile-nav-link ${
                                                location.pathname === "/about"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={handleMobileMenuClick}
                                        >
                                            ABOUT
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
                                            className={`mobile-nav-link ${
                                                location.pathname === "/contact"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={handleMobileMenuClick}
                                        >
                                            CONTACT US
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
                                                    LOGIN
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
                                                    LOGOUT
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
