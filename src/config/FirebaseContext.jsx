import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const FirebaseDatabaseContext = createContext(null);

export const useFirebaseDatabase = () => {
    return useContext(FirebaseDatabaseContext);
};

export const FirebaseContext = ({ children }) => {
    const firebaseConfig = {
        apiKey: "AIzaSyBllFXpLJlhvwpPxVcc2jlddq2_8euq-pQ",
        authDomain: "musictaste-d1708.firebaseapp.com",
        databaseURL:
            "https://musictaste-d1708-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "musictaste-d1708",
        storageBucket: "musictaste-d1708.appspot.com",
        messagingSenderId: "72662983641",
        appId: "1:72662983641:web:9acbbcc22db0bd0b64afc8",
        measurementId: "G-Z3P583PSQM",
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    return (
        <FirebaseDatabaseContext.Provider value={database}>
            {children}
        </FirebaseDatabaseContext.Provider>
    );
};
