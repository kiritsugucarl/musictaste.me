import { useNavigate, Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
    const navigate = useNavigate();

    return (
        <main className="container content-container section">
            <div className="main-wrapper">
                <Link to="/music-taste" className="main__link">
                    <p className="main__linkTitle">MusicTaste</p>
                    <p className="main__linkDesc">
                        Time to know your actual music taste now!
                    </p>
                </Link>

                <Link to="/music-personality" className="main__link">
                    <p className="main__linkTitle">MusicPersonality</p>
                    <p className="main__linkDesc">
                        Time to know your music personality now!
                    </p>
                </Link>
            </div>
        </main>
    );
};

export default Main;
