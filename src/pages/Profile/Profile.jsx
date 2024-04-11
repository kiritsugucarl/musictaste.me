import { useState, useEffect } from "react";
import { useToken } from "../../config/TokenContext";
import { getDatabase, ref, get, remove, set } from "firebase/database";

const Profile = () => {
    const { user } = useToken();
    const [userData, setUserData] = useState(null);
    const [records, setRecords] = useState([]);
    const [newUsername, setNewUsername] = useState("");
    const [isEditingUsername, setIsEditingUsername] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (user && user.id) {
                    const database = getDatabase();
                    const usersRef = ref(database, `users/${user.id}`);
                    const snapshot = await get(usersRef);
                    if (snapshot.exists()) {
                        setUserData(snapshot.val());
                    }
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [user]);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                if (user && user.id) {
                    const database = getDatabase();
                    const recordsRef = ref(
                        database,
                        `users/${user.id}/records`
                    );
                    const snapshot = await get(recordsRef);
                    const recordsData = [];
                    snapshot.forEach((childSnapshot) => {
                        recordsData.push({
                            id: childSnapshot.key,
                            datetime: childSnapshot.val().datetime,
                            url: childSnapshot.val().url,
                            personality: childSnapshot.val().personality,
                        });
                    });
                    setRecords(recordsData);
                }
            } catch (error) {
                console.error("Error fetching records:", error);
            }
        };

        fetchRecords();
    }, [user]);

    const deleteRecord = async (recordId) => {
        try {
            const database = getDatabase();
            const recordRef = ref(
                database,
                `users/${user.id}/records/${recordId}`
            );
            await remove(recordRef);
            setRecords((prevRecords) =>
                prevRecords.filter((record) => record.id !== recordId)
            );
        } catch (error) {
            console.error("Error deleting record:", error);
        }
    };

    const handleUsernameChange = (event) => {
        setNewUsername(event.target.value);
    };

    const updateUsername = async () => {
        try {
            const database = getDatabase();
            const userRef = ref(database, `users/${user.id}`);
            await set(userRef, { ...userData, username: newUsername });
            setUserData((prevUserData) => ({
                ...prevUserData,
                username: newUsername,
            }));
            setNewUsername("");
            setIsEditingUsername(false);
        } catch (error) {
            console.error("Error updating username:", error);
        }
    };

    function formatDateTime(dateTimeString) {
        const options = {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        };
        const dateTime = new Date(dateTimeString);
        return dateTime.toLocaleDateString(undefined, options);
    }

    return (
        <div>
            <h1>Profile Page</h1>
            {userData && (
                <div>
                    <p>
                        Username:{" "}
                        {isEditingUsername ? (
                            <>
                                <input
                                    type="text"
                                    value={newUsername}
                                    onChange={handleUsernameChange}
                                />
                                <button onClick={updateUsername}>Save</button>
                            </>
                        ) : (
                            <>
                                {userData.username}{" "}
                                <button
                                    onClick={() => setIsEditingUsername(true)}
                                >
                                    Edit
                                </button>
                            </>
                        )}
                    </p>
                    <p>Age: {userData.age}</p>
                    <p>Gender: {userData.gender}</p>
                </div>
            )}
            <h2>Records History</h2>
            <ul>
                {records.map((record) => (
                    <li key={record.id}>
                        <p>Date and Time: {formatDateTime(record.datetime)}</p>
                        <p>Personality: {record.personality}</p>
                        <img src={record.url} alt={`Record ${record.id}`} />
                        <button onClick={() => deleteRecord(record.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
