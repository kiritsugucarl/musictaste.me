import { useState } from "react";
import { getDatabase, ref, set, remove } from "firebase/database";
import {
    getStorage,
    ref as storageRef,
    getDownloadURL,
} from "firebase/storage";
import { useToken } from "../../../config/TokenContext";
import "./HistoryOverlay.css";

const HistoryOverlay = ({ record, onClose, updateRecords }) => {
    const { user } = useToken();
    const { id, url, datetime, personality } = record;
    const [isProcessing, setIsProcessing] = useState(false);

    const handleCloseOverlay = () => {
        onClose();
    };

    const handleDownloadImage = async () => {
        try {
            // Initialize Firebase Storage
            const storage = getStorage();

            // Get the download URL for the image
            const downloadUrl = await getDownloadURL(
                storageRef(storage, record.url)
            );

            // Create a new XMLHttpRequest
            const xhr = new XMLHttpRequest();
            xhr.responseType = "blob";

            // Define onload callback function
            xhr.onload = (event) => {
                const blob = xhr.response;

                // Create a new anchor element
                const downloadLink = document.createElement("a");
                // Set the href attribute to the download URL
                downloadLink.href = URL.createObjectURL(blob);
                // Set the download attribute to the desired file name
                downloadLink.download = "musicTaste.png";

                // Append the anchor element to the body
                document.body.appendChild(downloadLink);

                // Programmatically trigger a click event on the anchor element
                downloadLink.click();

                // Remove the anchor element from the body
                document.body.removeChild(downloadLink);
            };

            // Open the connection to the download URL
            xhr.open("GET", downloadUrl);
            // Send the request
            xhr.send();
        } catch (error) {
            console.error("Error downloading image:", error);
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

    const handleRemoveResult = async () => {
        try {
            setIsProcessing(true);

            // Archive the record
            const database = getDatabase();
            const archivalRef = ref(
                database,
                `users/${user.id}/archivedRecords/${id}`
            );
            await set(archivalRef, record);

            // Remove the record from the original location
            await remove(ref(database, `users/${user.id}/records/${id}`));

            updateRecords((prevRecords) =>
                prevRecords.filter((r) => r.id !== record.id)
            );

            // Close the overlay
            onClose();
        } catch (error) {
            console.error("Error archiving record:", error);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="historyOverlay">
            <div className="historyOverlay__container">
                <svg
                    onClick={handleCloseOverlay}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="historyOverlay__closeButton"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                    />
                </svg>

                <h2 className="historyOverlay__personality">{personality}</h2>
                <img className="historyOverlay__result" src={url} />
                <p className="historyOverlay__dateTime">
                    Created on {formatDateTime(datetime).formatDate}{" "}
                    {formatDateTime(datetime).formatTime}
                </p>
                <button
                    onClick={handleDownloadImage}
                    className="historyOverlay__downloadButton"
                >
                    Download this Image
                </button>
                <button
                    className="historyOverlay__removeButton"
                    onClick={handleRemoveResult}
                    disabled={isProcessing}
                >
                    Remove this result
                </button>
            </div>
        </div>
    );
};

export default HistoryOverlay;
