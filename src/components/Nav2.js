import logo from '../imgs/Logo.png';
import '../css/Nav2.css';
import 'bootstrap/dist/css/bootstrap.css'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { Nav, Navbar } from 'react-bootstrap'
import discordIcon from '../imgs/Discord-Logo.png';
import twitterIconRed from '../imgs/twitter-icon-red.png';



function Nav2() {
    return (
        <div className="Nav2MainContainer">
            <div className="Nav2SecondaryContainer">
            <Navbar sticky="top" expand="sm" collapseOnSelect className="nav2">
                <Navbar.Brand>
                    <img src={logo} width="200px" height="50px" style={{ marginLeft: '50px' }} />
                </Navbar.Brand>

                <Navbar.Toggle style={{ backgroundColor: "white" }}></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="justify-content-end" style={{ width: "95%" }}>
                        <Link to="mint" className='NavItem' style={{textDecoration: 'none'}}>Mint</Link>
                        <Link to="TeamContainer" className='NavItem' style={{textDecoration: 'none'}}>Team</Link>
                        <Link to="FQAMainContainer" className='NavItem' style={{textDecoration: 'none'}}>About</Link>
                        <Link to="Team" className='NavItem' style={{textDecoration: 'none'}}>Roadmap</Link>
                        <a href="https://discord.com/invite/rReed6g5" target='_blank'
                        ><img src={discordIcon} className="NavIconDiscord" /></a>

                        <a href="https://twitter.com/DoodleNoodleNFT" target='_blank'
                        ><img src={twitterIconRed} className="NavIconTwitter" /></a>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            </div>
        </div>
    );
}

export default Nav2;