import { createContext, useContext, useState, useEffect } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const [expiresAt, setExpiresAt] = useState(0);

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("musictaste.me-token");
        let tokenExpiresAt = window.localStorage.getItem(
            "musictaste.me-token-expires-at"
        );

        if (!token && hash) {
            token = hash
                .substring(1)
                .split("&")
                .find((elem) => elem.startsWith("access_token"))
                .split("=")[1];

            // storedToken = tokenParam;
            tokenExpiresAt = calculateExpiresAt();

            window.location.hash = "";
            window.localStorage.setItem("musictaste.me-token", token);
            window.localStorage.setItem(
                "musictaste.me-token-expires-at",
                tokenExpiresAt
            );

            // window.opener.postMessage("authentication_success");
        }

        setToken(token);
        setExpiresAt(tokenExpiresAt);

        window.addEventListener("beforeunload", handleBeforeTabClose);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeTabClose);
        };
    }, []);

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
        setToken("");
    };

    return (
        <TokenContext.Provider
            value={{ token, setToken, clearToken, isTokenValid }}
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
