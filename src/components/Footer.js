
import '../css/Footer.css';
import 'bootstrap/dist/css/bootstrap.css'

import { Link } from 'react-scroll'

import { Nav, Navbar } from 'react-bootstrap'
import discordIcon from '../imgs/Discord-Logo.png';
import twitterIconRed from '../imgs/twitter-icon-red.png';
import mediumIcon from '../imgs/medium.png';



function Footer() {
    return (
        <div className="Footer2MainContainer">
            <div className="Footer2SecondaryContainer">
                <Navbar sticky="top" expand="sm" collapseOnSelect className="footer2">
                    <Navbar.Brand>
                        <p style={{ marginLeft: '350px', paddingTop: '10px' }} alt="Doodle Noodles" className='FooterItem'>© Doodle Noodles 2022</p>
                    </Navbar.Brand>

                    <Navbar.Toggle style={{ backgroundColor: "white" }}></Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav className="justify-content-centre" rel="noreferrer" style={{ width: "100%", marginLeft: '150px' }}>
                            <Link to="mint" className='FooterItem' rel="noreferrer" style={{ textDecoration: 'none' }}>Mint</Link>
                            <Link to="TeamContainer" className='FooterItem' rel="noreferrer" style={{ textDecoration: 'none' }}>Roadmap</Link>
                            <Link to="FQAMainContainer" className='FooterItem' rel="noreferrer" style={{ textDecoration: 'none' }}>FAQ</Link>

                            <div style={{ marginLeft: '10px' }}>
                                <a href="https://twitter.com/DoodleNoodleNFT" rel="noreferrer" target='_blank'
                                ><img src={twitterIconRed} className="FooterIconTwitter" alt="Twitter Icon" /></a>
                                <a href="https://discord.com/invite/sendnoods" rel="noreferrer" target='_blank'
                                ><img src={discordIcon} className="FooterIconDiscord" alt="Discord Icon" /></a>
                                <a href="https://medium.com/@doodlenoodles" rel="noreferrer" target='_blank'
                                ><img src={mediumIcon} className="FooterIconMedium" alt="Medium Icon" /></a>
                            </div>

                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        </div>
    );
}

export default Footer;