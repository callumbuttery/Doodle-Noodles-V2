import logo from '../imgs/Logo.png';
import '../css/Nav2.css';
import 'bootstrap/dist/css/bootstrap.css'

import { Link } from 'react-scroll'

import { Nav, Navbar } from 'react-bootstrap'
import discordIcon from '../imgs/Discord-Logo.png';
import twitterIconRed from '../imgs/twitter-icon-red.png';
import mediumIcon from '../imgs/medium.png';



function Nav2() {
    return (
        <div className="Nav2MainContainer">
            <div className="Nav2SecondaryContainer">
                <Navbar sticky="top" expand="sm" collapseOnSelect className="nav2">
                    <Navbar.Brand>
                        <img src={logo} rel="noreferrer" width="150px" style={{ marginLeft: '100px' }} alt="Doodle Noodles" />
                    </Navbar.Brand>

                    <Navbar.Toggle style={{ backgroundColor: "white" }}></Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav className="justify-content-centre" rel="noreferrer" style={{ width: "100%" }}>
                            <Link to="mint" className='NavItem' rel="noreferrer" style={{ textDecoration: 'none' }}>Mint</Link>
                            <Link to="TeamContainer" className='NavItem' rel="noreferrer" style={{ textDecoration: 'none' }}>Roadmap</Link>
                            <Link to="FQAMainContainer" className='NavItem' rel="noreferrer" style={{ textDecoration: 'none' }}>FAQ</Link>

                            <div style={{ marginLeft: '10px'}}>
                                <a href="https://twitter.com/DoodleNoodleNFT" rel="noreferrer" target='_blank'
                                ><img src={twitterIconRed} className="NavIconTwitter" alt="Twitter Icon" /></a>
                                <a href="https://discord.com/invite/sendnoods" rel="noreferrer" target='_blank'
                                ><img src={discordIcon} className="NavIconDiscord" alt="Discord Icon" /></a>
                                <a href="https://medium.com/@doodlenoodles" rel="noreferrer" target='_blank'
                                ><img src={mediumIcon} className="NavIconMedium" alt="Medium Icon" /></a>
                            </div>

                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        </div>
    );
}

export default Nav2;