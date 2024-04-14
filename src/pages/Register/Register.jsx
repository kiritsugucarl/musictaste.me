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
    return (
        <div className="container register section">
            <div className="register__forms-wrapper">
                <div className="register__title-wrapper">
                    <h2 className="register__title">Register</h2>
                    <p className="register__subtitle">
                        Create your{" "}
                        <span className="title-mustard"> musictaste.me</span>{" "}
                        account now!
                    </p>
                </div>
                <div className="register__input-container">
                    <label className="register__label">Username </label>
                    <input
                        className="register__input-text"
                        placeholder="Input username (display name)"
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
                        <div className="register__radio-wrapper">
                            <span className="register__radio-value"> Male</span>
                            <input
                                className="register__radio"
                                type="radio"
                                name="gender"
                                value="male"
                                checked={gender === "male"}
                                required="true"
                                onChange={() => setGender("male")}
                            />
                        </div>

                        <div className="register__radio-wrapper">
                            <span className="register__radio-value">
                                {" "}
                                Female
                            </span>
                            <input
                                className="register__radio"
                                type="radio"
                                name="gender"
                                value="fenale"
                                checked={gender === "female"}
                                required="true"
                                onChange={() => setGender("female")}
                            />
                        </div>

                        <div className="register__radio-wrapper">
                            <span className="register__radio-value">
                                {" "}
                                Prefer not to say
                            </span>
                            <input
                                className="register__radio"
                                type="radio"
                                name="gender"
                                value="other"
                                checked={gender === "other"}
                                required="true"
                                onChange={() => setGender("other")}
                            />
                        </div>
                    </div>
                </div>
                <div className="register__input-container">
                    <label className="register__label">Age: </label>
                    <input
                        className="register__input-age"
                        placeholder="Input age"
                        type="number"
                        min="7"
                        max="65"
                        value={age}
                        required={true}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button
                    className="register__submit-button"
                    type="submit"
                    onClick={handleFormSubmit}
                >
                    Create Account
                </button>
            </div>
        </div>
    );
};

export default Register;
