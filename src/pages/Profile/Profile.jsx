import { useState, useEffect } from "react";
import { useToken } from "../../config/TokenContext";
import { getDatabase, ref, get, remove, set } from "firebase/database";
import "./Profile.css";
import HistoryOverlay from "./components/HistoryOverlay";
import personalityColors from "./personalityColors.json";

const Profile = () => {
    const { user } = useToken();
    const [userData, setUserData] = useState(null);
    const [records, setRecords] = useState([]);
    const [newUsername, setNewUsername] = useState("");
    const [isViewingHistory, setIsViewingHistory] = useState(false);
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);

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

    const handleCloseUsernameChange = () => {
        setIsEditingUsername(false);
    };

    // Function to update records state
    const updateRecords = (updatedRecords) => {
        setRecords(updatedRecords);
    };

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

    const handleUsernameChange = (event) => {
        setNewUsername(event.target.value);
    };

    function identifyGender(gender) {
        if (gender == "male") {
            return "He/Him";
        } else if (gender == "female") {
            return "She/Her";
        } else {
            return "Not specified";
        }
    }

    const showDetailedHistory = (record) => {
        setSelectedRecord(record);
        setIsViewingHistory(true);
    };

    const handleCloseDetailedHistory = () => {
        setSelectedRecord(null);
        setIsViewingHistory(false);
    };

    useEffect(() => {
        // Set body overflow based on the loading state
        document.body.style.overflow = isViewingHistory ? "hidden" : "auto";

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isViewingHistory]);

    const updateUsername = async () => {
        if (newUsername != "") {
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
        } else {
            handleCloseUsernameChange();
        }
    };

    function formatDateTime(dateTimeString) {
        const dateTime = new Date(dateTimeString);
        const dateOptions = {
            month: "long",
            day: "numeric",
            year: "numeric",
        };
        const timeOptions = {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        };
        const formatDate = dateTime.toLocaleDateString(undefined, dateOptions);
        const formatTime = dateTime.toLocaleTimeString(undefined, timeOptions);
        return { formatDate, formatTime };
    }

    return (
        <div className="profile container section">
            {userData && (
                <div className="profile__details-wrapper">
                    <h2 className="profile__title">
                        <>
                            {userData.username}{" "}
                            <button onClick={() => setIsEditingUsername(true)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="profile__editButton"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                    />
                                </svg>
                            </button>
                        </>
                    </h2>
                    <div>
                        <p className="profile__age">{userData.age} years old</p>
                        <p className="profile__gender">
                            {identifyGender(userData.gender)}
                        </p>
                    </div>
                </div>
            )}
            <h2 className="profile__secondaryTitle">
                Records <span className="title-mustard"> History </span>
            </h2>
            <ul className="profile__history-container">
                {records.map((record) => (
                    <li
                        onClick={() => showDetailedHistory(record)} // Pass a function reference
                        className="profile__history"
                        key={record.id}
                        style={{
                            backgroundColor:
                                personalityColors[record.personality],
                        }}
                    >
                        <p className="profile__history-date">
                            {formatDateTime(record.datetime).formatDate}
                        </p>
                        <p className="profile__history-date">
                            {formatDateTime(record.datetime).formatTime}
                        </p>
                        <p className="profile__history-personality">
                            {record.personality}
                        </p>
                        <img
                            className="profile__history-img"
                            src={record.url}
                            alt={`Record ${record.id}`}
                        />
                    </li>
                ))}
            </ul>

            {isEditingUsername && (
                <div className="profile__editUsernameOverlay">
                    <div className="profile__editUsername">
                        <h2 className="profile__editTitle">Change Username</h2>
                        <p className="profile__editSub">
                            Minimum of 1 character
                        </p>
                        <input
                            type="text"
                            placeholder="Input new display name"
                            value={newUsername}
                            onChange={handleUsernameChange}
                        />
                        <div className="profile__buttons-wrapper">
                            <button
                                className="profile__cancelButton"
                                onClick={handleCloseUsernameChange}
                            >
                                Cancel
                            </button>
                            <button
                                className="profile__saveButton"
                                onClick={updateUsername}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isViewingHistory && (
                <HistoryOverlay
                    updateRecords={updateRecords}
                    onClose={handleCloseDetailedHistory}
                    record={selectedRecord}
                />
            )}
        </div>
    );
};

export default Profile;
