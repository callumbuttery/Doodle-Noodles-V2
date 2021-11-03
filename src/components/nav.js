import react, { useState } from 'react';
import { Link } from 'react-scroll';
import discordIcon from '../imgs/Discord-Logo.png';
import twitterIconRed from '../imgs/twitter-icon-red.png';


import '../css/Nav.css'
import logo from '../imgs/Logo.png'

function nav() {

    return (
        <div>
            <div>
            </div>
            <div className="nav">
                <img src={logo} className='logo'></img>
                <button className='navButton'><Link to="mint" spy={true} smooth={true}>Mint</Link></button>
                <button className='navButton'><Link to="TeamContainer" spy={true} smooth={true}>Team</Link></button>
                <button className='navButton'><Link to="FQAMainContainer" spy={true} smooth={true}>About</Link></button>
                <button className='navButton'><Link to="Team" spy={true} smooth={true}>Roadmap</Link></button>
                <a href="https://twitter.com/DoodleNoodleNFT" target='_blank'
                ><img src={twitterIconRed} className="NavIconTwitter"
                    /></a>
                <a href="https://discord.com/invite/rReed6g5" target='_blank'
                ><img src={discordIcon} className="NavIconDiscord"
                    /></a>
            </div >
        </div>
    )
}


export default nav;