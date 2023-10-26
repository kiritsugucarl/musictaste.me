// import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    CLIENT_ID,
    REDIRECT_URI,
    RESPONSE_TYPE,
} from "../../config/spotifyConfig";
import { useToken } from "../../config/TokenContext";
import "./Home.css";
import "./spotify-logo.png"
import "./model.png"

const Home = () => {
    const { token } = useToken();

    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";

    const navigate = useNavigate();

    return (
            <section id="home">  
                <div className="home-content">
                 <h1>
                    MUSICTASTE.ME
                 </h1>
                </div>
                 
              <div className="home-paragraph">   
                 <p className="homeParagraph">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum 
                 fringilla <br/> elit vel aliquet fringilla. Nunc luctus sed orci ac sodales. Donec 
                tincidunt venenatis, <br/> pulvinar mattis sem blandit vitae
                </p>
            </div>
            <div className="btn-start">
            {!token ? (
                <a
                    href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                > GET STARTED
                </a>
            ) : (
                navigate("/main")
            )}
             </div>
             <div className="powered">
             <p className="powered-Spotify">
                Powered by
             </p>
             </div>
             <img src="./spotify-logo.png" alt="Picture" className="logoImg" />
             <img src="./model.png" alt="Picture" class="modelImg" />
            
            </section>
    )
}

export default Home;