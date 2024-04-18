import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dbRef, set, push, get } from "firebase/database"; // Import necessary Firebase Realtime Database functions
import { useLocation } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import { useToken } from "../../config/TokenContext";
import "./RecommendationImage.css";

const RecommendationImage = ({
    personality,
    recommendationTrackIds,
    selectedSongsTrackIds,
    onCapture,
}) => {
    const { token, user } = useToken();
    const [userName, setUsername] = useState("");

    const [selectedSongsDetails, setSelectedSongsDetails] = useState([]);
    const [recommendationDetails, setRecommendationDetails] = useState([]);

    // const location = useLocation();
    // const { recommendationTrackIds, selectedSongsTrackIds } = location.state;

    useEffect(() => {
        // Function to fetch the username when the component mounts
        if (user && user.id) {
            const database = getDatabase();
            const usersRef = dbRef(database, `users/${user.id}/username`);
            get(usersRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        setUsername(snapshot.val()); // Set the username state
                        console.log("Username :", userName);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching username:", error);
                });
        }
    }, [user]);

    useEffect(() => {
        const fetchSelectedSongsDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.spotify.com/v1/tracks?ids=${selectedSongsTrackIds.join(
                        ","
                    )}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.data.tracks) {
                    const details = response.data.tracks.map((track) => ({
                        id: track.id,
                        name: track.name,
                        artists: track.artists
                            .map((artist) => artist.name)
                            .join(", "),
                        image: track.album.images[0].url,
                    }));

                    setSelectedSongsDetails(details);
                }
            } catch (error) {
                console.error("Error fetching selected songs details: ", error);
            }
        };
        fetchSelectedSongsDetails();
    }, [selectedSongsTrackIds, token]);

    useEffect(() => {
        const fetchRecommendationDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.spotify.com/v1/tracks?ids=${recommendationTrackIds.join(
                        ","
                    )}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.data.tracks) {
                    const details = response.data.tracks.map((track) => ({
                        id: track.id,
                        name: track.name,
                        artists: track.artists
                            .map((artist) => artist.name)
                            .join(", "),
                        image: track.album.images[0].url,
                    }));

                    setRecommendationDetails(details);
                }
            } catch (error) {
                console.error("Error fetching recommendation details: ", error);
            }
        };

        fetchRecommendationDetails();
    }, [recommendationTrackIds, token]);

    const [imagesLoaded, setImagesLoaded] = useState(0);

    const handleImageLoad = () => {
        setImagesLoaded((prev) => prev + 1);
    };

    useEffect(() => {
        if (
            imagesLoaded ===
                selectedSongsTrackIds.length + recommendationTrackIds.length &&
            personality // Ensure personality is not null
        ) {
            // Adding a delay of 3 second (3000 milliseconds)
            setTimeout(async () => {
                const content = document.getElementById("result-container");
                try {
                    // Convert the content to an image using html2canvas
                    const canvas = await html2canvas(content, {
                        scale: 1,
                        allowTaint: true,
                        useCORS: true,
                    });

                    // Get a reference to the Firebase Storage bucket
                    const storage = getStorage();

                    // Generate a unique filename for the image (you can customize this as needed)
                    const filename = `${Date.now()}-${Math.random()}.png`;

                    // Create a reference to the image file in Firebase Storage
                    const imageRef = ref(
                        storage,
                        `users/${user.id}/${filename}`
                    );

                    // Convert the canvas to Blob
                    const blob = await new Promise((resolve) =>
                        canvas.toBlob(resolve, "image/png")
                    );

                    // Upload the image file to Firebase Storage
                    await uploadBytes(imageRef, blob);

                    // Get the download URL of the uploaded image
                    const downloadURL = await getDownloadURL(imageRef);

                    // Get a reference to the Firebase Realtime Database
                    const database = getDatabase();

                    // Generate a unique ID for the record
                    const newRecordRef = push(
                        dbRef(database, `users/${user.id}/records`)
                    );

                    // Construct the date and time string
                    const currentDate = new Date();
                    const dateTimeString = currentDate.toISOString();

                    // Construct the record object to be stored in the database
                    const record = {
                        datetime: dateTimeString,
                        url: downloadURL,
                        personality: personality, // Add personality to the record
                    };

                    // Set the record object under the unique ID
                    set(newRecordRef, record);

                    // Pass the captured image URL to the callback
                    onCapture(downloadURL);
                } catch (error) {
                    console.error("Error uploading image:", error);
                }
            }, 3000);
        }
    }, [
        imagesLoaded,
        selectedSongsTrackIds,
        recommendationTrackIds,
        onCapture,
        user.id,
        personality, // Include personality as a dependency
    ]);

    return (
        <div id="result-container" className="result-container">
            <div className="result-wrapper">
                <h1 className="result-title">
                    {userName}'s{" "}
                    <span className="result-yellow">music taste</span>
                </h1>

                <div className="result-selected-section">
                    <h3 className="result-secondaryTitle">
                        {userName}'s choice of{" "}
                        <span className="secondaryTitle-yellow"> songs</span>
                    </h3>
                    {selectedSongsDetails.map((song, index) => (
                        <div className="result-item">
                            <p className="result-item-index">{index + 1}</p>
                            <div className="result-item-container">
                                <img
                                    onLoad={handleImageLoad}
                                    className="result-item-track-img"
                                    src={song.image}
                                />
                                <div className="result-item-details-wrapper">
                                    <p className="result-item-details-songName">
                                        {song.name}
                                    </p>
                                    <p className="result-item-details-songArtist">
                                        {song.artists}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="result-taste-section">
                    <h3 className="result-secondaryTitle">
                        {userName}'s{" "}
                        <span className="secondaryTitle-yellow">
                            {" "}
                            music taste
                        </span>{" "}
                        based on their input
                    </h3>
                    {recommendationDetails.map((song, index) => (
                        <div className="result-item">
                            <p className="result-item-index">{index + 1}</p>
                            <div className="result-item-container">
                                <img
                                    onLoad={handleImageLoad}
                                    className="result-item-track-img"
                                    src={song.image}
                                />
                                <div className="result-item-details-wrapper">
                                    <p className="result-item-details-songName">
                                        {song.name}
                                    </p>
                                    <p className="result-item-details-songArtist">
                                        {song.artists}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecommendationImage;
