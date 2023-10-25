import resultImg from '/collage.jpg'
import "./Result.css";

const Result = () => {
    return (
        <main className="container section">
            <div className="main__result-wrapper">
                <h1 className="main__result-title">LOREM IPSUM</h1>
                <p className="main__result-titleDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum fringilla elit vel aliquet fringilla. Nunc luctus
                    sed orci ac sodales.
                </p>
            </div>

            <div className="main__resultBtn-wrapper">
                <img className="main__result-collage" src={resultImg}/>
                <div className="main__resultBtn">
                    <button className="main__result-downloadBtn">
                        DOWNLOAD
                    </button>
                    <p className="main__result-txt">or</p>
                    <button className="main__result-shareBtn">SHARE</button>
                </div>
                <hr className="main__result-line"></hr>
                <button className="main__result-getAnotherResultBtn">
                    GET ANOTHER RESULT
                </button>
            </div>
        </main>
    );
};

export default Result;
