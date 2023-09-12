import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isMobileNavOpen, onMobileMenuToggle }) => {
    const handleMobileMenuClick = () => {
        onMobileMenuToggle(false);
    };

    return (
        <div className="header">
            {/* Desktop nav */}
            <div className="nav-wrapper">
                <h1 className="nav-logo">musictaste.me</h1> {/*change later */}
                <nav className="desktop-nav">
                    <ul className="desktop-nav-ul">
                        <li className="desktop-nav-li">
                            <Link to="/" className="desktop-nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="desktop-nav-li">
                            <Link to="/" className="desktop-nav-link">
                                About
                            </Link>
                        </li>
                        <li className="desktop-nav-li">
                            <Link to="/" className="desktop-nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <button
                        className="desktop-nav-menuButton"
                        onClick={() => onMobileMenuToggle(!isMobileNavOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </nav>
            </div>
            {/* Mobile navbar */}
            {isMobileNavOpen && (
                <div className={`mobile-nav ${isMobileNavOpen ? "show" : ""}`}>
                    <nav>
                        <ul className="mobile-nav-ul">
                            <li className="mobile-nav-li">
                                <Link
                                    to="/"
                                    className="mobile-nav-link"
                                    onClick={handleMobileMenuClick}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="mobile-nav-li">
                                <Link
                                    to="/"
                                    className="mobile-nav-link"
                                    onClick={handleMobileMenuClick}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="mobile-nav-li">
                                <Link
                                    to="/"
                                    className="mobile-nav-link"
                                    onClick={handleMobileMenuClick}
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="mobile-nav-li">
                                <Link
                                    to="/"
                                    className="mobile-nav-link"
                                    onClick={handleMobileMenuClick}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Navbar;
