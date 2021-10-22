import '../css/Team.css'
import cairnsArt from '../imgs/cairns-art.jpg'
import callumArt from '../imgs/callum-art.jpeg'
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
                                <h2 className="details">Cairns</h2>
                                <p className="details-minor">Artist</p>
                                <p>
                                    <a href="https://twitter.com/grinthedark" target='_blank'
                                    ><img src={twitterIcon} className="twitter"
                                        /></a>
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="margin-right">
                                <img src={callumArt} className="picture" />
                                <h2 className="details">Buttery</h2>
                                <p className="details-minor">Dev</p>
                                <p>
                                    <a href="https://twitter.com/ButteryVisuals" target='_blank'
                                    ><img src={twitterIcon} className="twitter"
                                        /></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;