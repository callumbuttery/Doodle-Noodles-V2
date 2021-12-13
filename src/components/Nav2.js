import logo from '../imgs/Logo.png';
import '../css/Nav2.css';
import 'bootstrap/dist/css/bootstrap.css'

import { Link } from 'react-scroll'

import { Nav, Navbar } from 'react-bootstrap'
import discordIcon from '../imgs/Discord-Logo.png';
import twitterIconRed from '../imgs/twitter-icon-red.png';



function Nav2() {
    return (
        <div className="Nav2MainContainer">
            <div className="Nav2SecondaryContainer">
            <Navbar sticky="top" expand="sm" collapseOnSelect className="nav2">
                <Navbar.Brand>
                    <img src={logo} rel="noreferrer" width="200px" height="50px" style={{ marginLeft: '50px' }} alt="Doodle Noodles"/>
                </Navbar.Brand>

                <Navbar.Toggle style={{ backgroundColor: "white" }}></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="justify-content-end" rel="noreferrer" style={{ width: "95%" }}>
                        <Link to="mint" className='NavItem' rel="noreferrer" style={{textDecoration: 'none'}}>Mint</Link>
                        <Link to="TeamContainer" className='NavItem' rel="noreferrer" style={{textDecoration: 'none'}}>Team</Link>
                        <Link to="FQAMainContainer" className='NavItem' rel="noreferrer" style={{textDecoration: 'none'}}>About</Link>
                        <a href="https://medium.com/@doodlenoodles/doodle-noodles-utility-roadmap-7a9feb9953f4" className='NavItem' rel="noreferrer" target="_blank" style={{textDecoration: 'none'}}>Roadmap</a>
                        <a href="https://discord.com/invite/rReed6g5" rel="noreferrer" target='_blank'
                        ><img src={discordIcon} className="NavIconDiscord" alt="Discord Icon"/></a>

                        <a href="https://twitter.com/DoodleNoodleNFT"  rel="noreferrer" target='_blank'
                        ><img src={twitterIconRed} className="NavIconTwitter" alt="Twitter Icon"/></a>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            </div>
        </div>
    );
}

export default Nav2;