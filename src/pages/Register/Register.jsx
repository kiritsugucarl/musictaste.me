import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../config/TokenContext";
import { getDatabase, ref, get, set, update } from "firebase/database";
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
    const { user } = useToken();
    const [username, setUsername] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!username || !gender || !age) {
            alert("Please fill in all the required fields.");
            return;
        }

        try {
            const database = getDatabase();
            const usersRef = ref(database, `users/${user.id}`); // Reference the user node directly

            // Create a new user object with the required data
            const newUser = {
                username,
                gender,
                age,
            };

            // Check if the user's node already exists
            const snapshot = await get(usersRef);
            if (snapshot.exists()) {
                // If the user's node exists, update the data
                await update(usersRef, newUser);
                console.log("User data updated successfully:", newUser);
            } else {
                // If the user's node doesn't exist, set the data
                await set(usersRef, newUser);
                console.log("User data stored successfully:", newUser);
            }
            navigate("/");
        } catch (error) {
            console.error("Error storing user data:", error);
        }
    };

    const renderAgeOptions = () => {
        const options = [];
        for (let i = 9; i <= 65; i++) {
            options.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }
        return options;
    };

    return (
        <div className="container register">
            <h2 className="register__title">
                Create your{" "}
                <span className="title-mustard"> musictaste.me</span> account
                now!
            </h2>
            <div className="register__forms-wrapper">
                <div className="register__input-container">
                    <label className="register__label">Name or Alias: </label>
                    <input
                        className="register__input-text"
                        type="text"
                        value={username}
                        maxLength={16}
                        required="true"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="register__input-container">
                    <label className="register__label">Gender: </label>
                    <div className="register__radio-options">
                        <label>
                            <div className="register__radio-wrapper">
                                <input
                                    className="register__radio"
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={gender === "male"}
                                    required="true"
                                    onChange={() => setGender("male")}
                                />
                                <span className="register__radio-value">
                                    {" "}
                                    Male
                                </span>
                            </div>
                        </label>
                        <label>
                            <div className="register__radio-wrapper">
                                <input
                                    className="register__radio"
                                    type="radio"
                                    name="gender"
                                    value="fenale"
                                    checked={gender === "female"}
                                    required="true"
                                    onChange={() => setGender("female")}
                                />
                                <span className="register__radio-value">
                                    {" "}
                                    Female
                                </span>
                            </div>
                        </label>
                        <label>
                            <div className="register__radio-wrapper">
                                <input
                                    className="register__radio"
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    checked={gender === "other"}
                                    required="true"
                                    onChange={() => setGender("other")}
                                />
                                <span className="register__radio-value">
                                    {" "}
                                    Wish not to specify
                                </span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="register__input-container">
                    <label className="register__label">Age: </label>
                    <select
                        className="register__select"
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        required="true"
                    >
                        <option value="">Select Age</option>
                        {renderAgeOptions()}
                    </select>
                </div>
                <button
                    className="register__submit-button"
                    type="submit"
                    onClick={handleFormSubmit}
                >
                    Create Profile
                </button>
            </div>
        </div>
    );
};

export default Register;
