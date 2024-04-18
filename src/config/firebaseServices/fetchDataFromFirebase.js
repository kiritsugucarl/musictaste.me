import { getDatabase, ref, get } from "firebase/database";

// Fetch data from Firebase
export const fetchDataFromFirebase = async () => {
    const db = getDatabase();
    const personalityCountRef = ref(db, "personalitiesCount");
    try {
        const snapshot = await get(personalityCountRef, "value");
        return snapshot.val() || {}; // Return the fetched data or an empty object
    } catch (error) {
        console.error("Error fetching data from Firebase:", error);
        throw error; // Throw the error for error handling in the caller
    }
};

// Function to check if a user exists in Firebase database
export const checkUserExistenceInFirebase = async (userId) => {
    const db = getDatabase();
    const userRef = ref(db, `users/${userId}`);

    try {
        const snapshot = await get(userRef);
        return snapshot.exists(); // Returns true if user exists, false otherwise
    } catch (error) {
        console.error("Error checking user existence in Firebase:", error);
        throw error;
    }
};

// Calculate percentage values
export const calculatePercentage = (data) => {
    const totalCount = Object.values(data).reduce(
        (acc, count) => acc + count,
        0
    );
    const percentages = {};
    for (const key in data) {
        percentages[key] = (((data[key] || 0) / totalCount) * 100).toFixed(1); // Round to one decimal point
    }
    return percentages;
};
