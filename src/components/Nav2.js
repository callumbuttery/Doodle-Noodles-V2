import logo from '../imgs/Logo.png';
import '../css/Nav2.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-scroll';
import { Nav, Navbar, Button } from 'react-bootstrap'
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
                        <button className='NavItem'><Link to="mint">Mint</Link></button>
                        <button className='NavItem'><Link to="TeamContainer">Team</Link></button>
                        <button className='NavItem'><Link to="FQAMainContainer">About</Link></button>
                        <button className='NavItem'><Link to="Team">Roadmap</Link></button>
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