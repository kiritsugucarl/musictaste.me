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

    return (
        <main className="container section">
            <div className="main__result-wrapper">
                <h1 className="main__result-title">YOUR MUSIC TASTE IS...</h1>
                <p className="main__result-titleDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum fringilla elit vel aliquet fringilla. Nunc luctus
                    sed orci ac sodales. You can now save the image or share the
                    results to your social media platform! Lorem ipsum dolor sit
                    amet consectetur.
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
                    className="main__result-getAnotherResultBtn"
                >
                    GET ANOTHER RESULT
                </button>
            </div>
        </main>
    );
};

export default Result;
