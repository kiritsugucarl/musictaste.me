import { useNavigate, Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
    const navigate = useNavigate();

    return (
        <main className="container content-container section">
            <div className="main-wrapper">
                <Link to="/music-taste" className="main__link">
                    MusicTaste
                </Link>
                <Link to="/music-personality" className="main__link">
                    Music Personality
                </Link>
            </div>
        </main>
    );
};

export default Main;
