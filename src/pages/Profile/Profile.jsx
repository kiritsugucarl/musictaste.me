import { useState, useEffect } from "react";
import { useToken } from "../../config/TokenContext";
import {
    getDatabase,
    ref,
    get,
    orderByChild,
    limitToLast,
} from "firebase/database";

const Profile = () => {
    const { user } = useToken();
    const [userData, setUserData] = useState(null);
    const [records, setRecords] = useState([]);

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
                    <p>Username: {userData.username}</p>
                    <p>Age: {userData.age}</p>
                    <p>Gender: {userData.gender}</p>
                </div>
            )}
            <h2>Records History</h2>
            <ul>
                {records.map((record) => (
                    <li key={record.id}>
                        <p>Date and Time: {formatDateTime(record.datetime)}</p>
                        <img src={record.url} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
