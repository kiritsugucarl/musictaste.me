// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase(app);

export default database;
