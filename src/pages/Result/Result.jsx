import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../config/TokenContext";
import resultImg from "/collage.jpg";
import "./Result.css";

const Result = () => {
    const { token, setToken } = useToken();
    const navigate = useNavigate();

    const resetToken = () => {
        setToken("");
        window.localStorage.removeItem("token");
        navigate("/");
    };

    const [collageUrl, setCollageUrl] = useState("");

    const generateCollage = async () => {
        try {
            const headers = {
                "Content-Type": "application/json",
            };

            const response = await axios.get(
                "http://127.0.0.1:5000/music_collage",
                {
                    method: "GET",
                    headers: headers,
                    responseType: "blob",
                }
            );

            if (response.status === 200) {
                const url = URL.createObjectURL(new Blob([response.data]));
                setCollageUrl(url);
            }
        } catch (error) {
            console.error("Error generating collage:", error);
        }
    };

    return (
        <main className="container section">
            <div className="main__result-wrapper">
                <h1 className="main__result-title">YOUR MUSIC TASTE IS...</h1>
                <p className="main__result-titleDesc">
                    You can now save the image or share the results to your
                    social media platform! Lorem ipsum dolor sit amet
                    consectetur.
                </p>
            </div>

            <div className="main__resultBtn-wrapper">
                <img className="main__result-collage" src={resultImg} />
                <div className="main__resultBtn">
                    <button className="main__result-downloadBtn">
                        DOWNLOAD
                    </button>
                    <p className="main__result-txt">or</p>
                    <button className="main__result-shareBtn">SHARE</button>
                </div>
                <hr className="main__result-line"></hr>
                <button
                    onClick={resetToken}
                    className="image-button"
                    // onClick={generateCollage}
                >
                    GET ANOTHER RESULT
                </button>
                {collageUrl && (
                    <div className="image-results">
                        <img
                            className="results"
                            src={collageUrl}
                            alt="Music Collage"
                        />
                    </div>
                )}
            </div>
        </main>
    );
};

export default Result;
