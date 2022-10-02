import roadmap from "../imgs/roadmap.jpeg";
import '../css/Roadmap.css';

function Roadmap() {
    return (
        <div className="roadmap-main-container">
            <div className="roadmap-container">
                <img className="roadmap-img" src={roadmap}></img>
            </div>
        </div>
    )
}  

export default Roadmap;