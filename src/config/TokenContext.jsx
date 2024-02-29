import { createContext, useContext, useState, useEffect } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");
    const [expiresAt, setExpiresAt] = useState(0);

    useEffect(() => {
        const hash = window.location.hash;
        let storedToken = window.localStorage.getItem("musictaste.me-token");
        let tokenExpiresAt = window.localStorage.getItem(
            "musictaste.me-token-expires-at"
        );

        if (!storedToken && hash) {
            storedToken = hash
                .substring(1)
                .split("&")
                .find((elem) => elem.startsWith("access_token"))
                .split("=")[1];

            // storedToken = tokenParam;
            tokenExpiresAt = calculateExpiresAt();

            window.location.hash = "";
            window.localStorage.setItem("musictaste.me-token", storedToken);
            window.localStorage.setItem(
                "musictaste.me-token-expires-at",
                tokenExpiresAt
            );

            // window.opener.postMessage("authentication_success");
        }

        setToken(storedToken);
        setExpiresAt(tokenExpiresAt);

        // window.addEventListener("beforeunload", handleBeforeTabClose);

        if (storedToken) {
            fetchSpotifyUser(storedToken);
        }

        // return () => {
        //     window.removeEventListener("beforeunload", handleBeforeTabClose);
        // };
    }, []);

    const fetchSpotifyUser = async (token) => {
        try {
            const response = await fetch("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const user = await response.json();
                // setToken(user);
                setUser(user);
            } else {
                console.error("Failed to fetch user information");
            }
        } catch (error) {
            console.error("Error fetching user information", error);
        }
    };

    const calculateExpiresAt = () => {
        const expiresIn = 3600;
        return Date.now() + expiresIn * 1000;
    };

    const isTokenValid = () => {
        return Date.now() < expiresAt;
    };

    const handleBeforeTabClose = () => {
        window.localStorage.removeItem("musictaste.me-token");
    };

    const clearToken = () => {
        window.localStorage.removeItem("musictaste.me-token");
        setToken(null);
        setToken("");
    };

    return (
        <TokenContext.Provider
            value={{ token, setToken, clearToken, isTokenValid, user }}
        >
            {children}
        </TokenContext.Provider>
    );
};

export const useToken = () => {
    const context = useContext(TokenContext);
    if (!context) {
        throw new Error("useToken must be used within a TokenProvider");
    }
    return context;
};
