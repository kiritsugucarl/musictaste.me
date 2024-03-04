import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToken } from "../../config/TokenContext";

import "./ErrTimeout.css";

const ErrTimeout = () => {
    const { clearToken } = useToken();
    const navigate = useNavigate();

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            navigate("/");
        }, 5000);

        clearToken();

        return () => clearTimeout(redirectTimeout);
    }, [navigate]);

    return (
        <div className="timeout">
            <h2 className="timeout__title">Session Time Out!</h2>
            <img src="/timeout.png" className="timeout__image" />
            <p className="timeout__desc">
                Session timeout! Please click to go back to home and login your
                Spotify account again{" "}
                <Link className="timeout__redirect-link" to="/">
                    click here
                </Link>
                .
            </p>
        </div>
    );
};

export default ErrTimeout;
