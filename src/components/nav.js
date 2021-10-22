import react, { useState } from 'react';
import { Link } from 'react-scroll'

import '../css/Nav.css'

function nav() {

    return (
        <div className="nav">
            <button className='navButton'><Link to="mint" spy={true} smooth={true}>Mint</Link></button>
            <button className='navButton'><Link to="team" spy={true} smooth={true}>Team</Link></button>
            <button className='navButton'><Link to="Team" spy={true} smooth={true}>Roadmap</Link></button>
            <button className='navButton'><Link to="Team" spy={true} smooth={true}>About</Link></button>
        </div >
    )
}


export default nav;