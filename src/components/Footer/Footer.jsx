import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer-wrapper container">
                <p className="footer-text">COPYRIGHT © musictaste.me</p>
                <p className="links">
                    <Link className="footer__link" to="/about">
                        ABOUT
                    </Link>{" "}
                    |{" "}
                    <Link className="footer__link" to="/contact">
                        CONTACT US
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
