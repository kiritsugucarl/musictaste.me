import { useState, useEffect } from "react";
import { useToken } from "../../config/TokenContext";
import { getDatabase, ref, get } from "firebase/database";

const Profile = () => {
    const { user } = useToken(); // Assuming you have a user object from your authentication context
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Function to fetch the user data when the component mounts
        const fetchUserData = async () => {
            try {
                if (user && user.id) {
                    const database = getDatabase();
                    const usersRef = ref(database, `users/${user.id}`);
                    const snapshot = await get(usersRef);
                    if (snapshot.exists()) {
                        setUserData(snapshot.val()); // Set the user data state
                        console.log("User data:", userData);
                    }
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData(); // Call the function to fetch user data
    }, [user]); // Dependency array ensures useEffect runs when user changes

    return (
        <div>
            <h1>Profile Page</h1>
            {userData && (
                <div>
                    <p>Username: {userData.username}</p>
                    <p>Age: {userData.age}</p>
                    <p>Gender: {userData.gender}</p>
                    {/* Display other user data as needed */}
                </div>
            )}
        </div>
    );
};

export default Profile;
