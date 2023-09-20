import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <main className="container section">
            <h1>musictaste.me</h1>
            <Link className="home__getStarted btn pink-btn" to="/main">
                GET STARTED
            </Link>
        </main>
    );
};

export default Home;
