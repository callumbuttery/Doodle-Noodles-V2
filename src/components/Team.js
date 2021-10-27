import '../css/Team.css'
import cairnsArt from '../imgs/GRIN.png'
import callumArt from '../imgs/BUTTERY.png'
import twitterIcon from '../imgs/twitter-icon.png'

function Team() {
    return (
        <div id='team'>
            <div className="background">
                <h1>Meet the team</h1>
                <div>
                    <div className="container">
                        <div className="column">
                            <div className="margin-right">
                                <img src={cairnsArt} className="picture" alt='test' />
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className="column">
                            <div className="margin-right">
                                <img src={callumArt} className="picture" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;