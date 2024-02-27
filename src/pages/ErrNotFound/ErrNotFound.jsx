import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./ErrNotFound.css";

const ErrNotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => clearTimeout(redirectTimeout);
    }, [navigate]);

    return (
        <div className="err404">
            <h2 className="err404__title">404 Not Found</h2>
            <img src="/404.png" className="err404__image" />
            <p className="err404__desc">
                Page not found! Redirecting back to home. If the page is not
                redirected{" "}
                <Link className="err404__redirect-link" to="/">
                    click here
                </Link>
                .
            </p>
        </div>
    );
};

export default ErrNotFound;
