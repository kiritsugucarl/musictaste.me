import { createContext, useContext, useState, useEffect } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("musictaste.me-token");

        if (!token && hash) {
            token = hash
                .substring(1)
                .split("&")
                .find((elem) => elem.startsWith("access_token"))
                .split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("musictaste.me-token", token);

            // window.opener.postMessage("authentication_success");
        }

        setToken(token);

        window.addEventListener("beforeunload", handleBeforeTabClose);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeTabClose);
        };
    }, []);

    const handleBeforeTabClose = () => {
        window.localStorage.removeItem("musictaste.me-token");
    };

    const clearToken = () => {
        window.localStorage.removeItem("musictaste.me-token");
        setToken("");
    };

    return (
        <TokenContext.Provider value={{ token, setToken, clearToken }}>
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
