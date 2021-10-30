import FooterdiscordIcon from '../imgs/Discord-Logo.png';
import FootertwitterIconRed from '../imgs/twitter-icon-red.png';

import logo from '../imgs/Logo3.png'
import '../css/Footer.css'

function footer() {

    return (
        <div className="footer">
            <div>
                <p className="hashtag">#WeLikeTheSneks</p>
                <img src={logo} className='Footerlogo'></img>
                <a href="https://twitter.com/DoodleNoodleNFT" target='_blank'
                ><img src={FootertwitterIconRed} className="FooterIconTwitter"
                    /></a>
                <a href="https://discord.com/invite/rReed6g5" target='_blank'
                ><img src={FooterdiscordIcon} className="FooterIconDiscord"
                    /></a>
            </div >
        </div>
    )
}

export default footer;