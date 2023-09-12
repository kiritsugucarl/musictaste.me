import SearchBox from "./components/SearchBox";
import "./Main.css";

const Main = () => {
    let songName = "Trumpets";
    let songArtist = "Jason Derulo";
    let songAlbum = "Tattoos";
    let songAlbumImg =
        "https://upload.wikimedia.org/wikipedia/en/0/0b/Tattoos_by_Jason_Derulo.jpg";
    let songRelease = 2013;

    return (
        <main className="container">
            <div className="main-wrapper">
                {/* sidebar */}
                <div className="main__sidebar">
                    <h4 className="main__sidebar-title">Added Songs</h4>
                    <ul className="main__sidebar-list">
                        <li className="main__sidebar-item">
                            <p className="main__sidebar-number">1</p>
                            <img
                                className="main__sidebar-albumImg"
                                src={songAlbumImg}
                            />
                            <div className="main__sidebar-details-wrapper">
                                <p className="main__sidebar-details-songName">
                                    {songName}
                                </p>
                                <p className="main__sidebar-details-songDetails">
                                    {songArtist} - {songAlbum} ({songRelease})
                                </p>
                            </div>
                            <button className="main__sidebar-removeBtn">
                                X
                            </button>
                        </li>
                    </ul>
                </div>

                {/* main content */}
                <div className="main__content">
                    <h1 className="main__content-title">
                        Find your music taste.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum fringilla elit vel aliquet fringilla. Nunc
                        luctus sed orci ac sodales.
                    </p>
                    <SearchBox />
                </div>
            </div>
        </main>
    );
};

export default Main;
