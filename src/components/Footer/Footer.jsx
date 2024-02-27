import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">
                COPYRIGHT © musictaste.me
            </p>
            <p className="links">
                <Link className="footer__link" to='/about'>ABOUT</Link>      |      <Link className="footer__link" to='/contact'>CONTACT US</Link>
            </p>
        </footer>
    );
};

export default Footer;
