import { useEffect, useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import { useToken } from "../../config/TokenContext";
import "./RecommendationImage.css";
// import { image } from "html2canvas/dist/types/css/types/image";

const RecommendationImage = ({ allTrackIds, onCapture }) => {
    const { token, user } = useToken();
    const userName = user.display_name;
    const [trackDetails, setTrackDetails] = useState([]);
    const [images, setImages] = useState([]);

    const [imagesLoaded, setImagesLoaded] = useState(0);

    const handleImageLoad = () => {
        setImagesLoaded((prev) => prev + 1);
    };

    useEffect(() => {
        if (imagesLoaded === allTrackIds.length) {
            console.log("images i have in recommendation image", images);
            console.log("All images are mounted");
            // Adding a delay of 1 second (1000 milliseconds)
            setTimeout(() => {
                const content = document.getElementById("result-container");
                html2canvas(content, {
                    scale: 1,
                    allowTaint: true,
                    useCORS: true,
                }).then((canvas) => {
                    const dataUrl = canvas.toDataURL("image/png");
                    onCapture(dataUrl); // Pass the captured image URL to the callback
                });
            }, 3000);
        }
    }, [imagesLoaded, allTrackIds, onCapture]);

    useEffect(() => {
        const fetchTrackDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.spotify.com/v1/tracks?ids=${allTrackIds.join(
                        ","
                    )}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.data.tracks) {
                    const details = response.data.tracks.map((track) => {
                        return {
                            id: track.id,
                            name: track.name,
                            artists: track.artists
                                .map((artist) => artist.name)
                                .join(", "),
                        };
                    });

                    setTrackDetails(details);
                    setImages(
                        response.data.tracks.map(
                            (track) => track.album.images[0].url
                        )
                    );
                }
            } catch (error) {
                console.error("Error fetching track details: ", error);
            }
        };

        fetchTrackDetails();
    }, [allTrackIds]);

    // const captureImage = async () => {
    //     const content = document.getElementById("result-container");
    //     try {
    //         const canvas = await html2canvas(content, { scale: 1 });
    //         const dataUrl = canvas.toDataURL("image/png");
    //         return dataUrl;
    //     } catch (error) {
    //         console.error("Error capturing image: ", error);
    //         return null;
    //     }
    // };

    // const generateImage = async () => {
    //     const imageUrl = await captureImage();
    //     if (imageUrl) {
    //         onImageGenerated(imageUrl);
    //         console.log("Generated: ", imageUrl);
    //     }
    // };

    // useEffect(() => {
    //     // Ensure that both trackDetails and images are not empty before capturing the image
    //     if (trackDetails.length > 8 && images.length > 8) {
    //         generateImage;
    //     }
    // }, [trackDetails, onImageGenerated]);

    return (
        <div id="result-container" className="result-container">
            <div className="result-wrapper">
                <h1 className="result-title">
                    {userName}'s{" "}
                    <span className="result-yellow">music taste</span>
                </h1>

                <div className="result-collage">
                    {images.length > 0 &&
                        trackDetails.length > 0 &&
                        images.map((image, index) => (
                            <div
                                key={trackDetails[index].id}
                                className="result__track-item"
                            >
                                <img
                                    src={image}
                                    alt=""
                                    className="result__track-item-img"
                                    onLoad={handleImageLoad}
                                />
                            </div>
                        ))}
                </div>

                <hr className="result-hr" />

                <div className="result-list">
                    {trackDetails.map((track, index) => (
                        <div className="result__track-details-item">
                            <p className="result__track-details-item-index">
                                {index + 1}
                            </p>
                            <div className="result__track-details-item-songDetails">
                                <p className="result__track-details-item-songDetails-songName">
                                    {track.name}
                                </p>
                                <p className="result__track-details-item-songDetails-songArtists">
                                    {track.artists}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecommendationImage;
