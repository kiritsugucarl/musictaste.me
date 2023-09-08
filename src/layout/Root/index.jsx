import { useState } from "react";
import { Outlet } from "react-router-dom";
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

    return (
        <div className="page-wrapper">
            <Navbar
                isMobileNavOpen={isMobileNavOpen}
                onMobileMenuToggle={handleMobileMenuToggle}
            />
            <Outlet />
        </div>
    );
};

export default Root;
