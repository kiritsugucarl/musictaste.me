import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToken } from "../../config/TokenContext";

const Redirect = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setToken } = useToken();

    useEffect(() => {
        const handleRedirect = async () => {
            // Check if the URL contains the access token
            if (location.hash.includes("access_token")) {
                // Extract the access token from the URL
                const params = new URLSearchParams(location.hash.substring(1));
                const accessToken = params.get("access_token");
                // Pass the token to your TokenProvider
                if (accessToken) {
                    setToken(accessToken);
                }
            }
            // Redirect to the home page after handling the token
            navigate("/");
        };

        handleRedirect();
    }, [location.hash, navigate, setToken]);

    return null; // No need to render anything in this component
};

export default Redirect;
