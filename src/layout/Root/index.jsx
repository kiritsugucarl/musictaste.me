import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Root = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);

        // Toggle body overflow when mobile navigation is active
        if (!isMobileNavOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };

    const handleOverlayClick = () => {
        setIsMobileNavOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="page-wrapper">
            {isMobileNavOpen && (
                <div className="overlay" onClick={handleOverlayClick} />
            )}
            <Navbar
                isMobileNavOpen={isMobileNavOpen}
                onMobileMenuToggle={handleMobileMenuToggle}
            />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
