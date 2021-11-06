import logo from '../imgs/Logo.png';
import '../css/Nav2.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-scroll';
import { Nav, Navbar, Button } from 'react-bootstrap'

function Nav2() {
    return (
        <div className="Nav2">
            <Navbar sticky="top" expand="sm" collapseOnSelect className="nav2">
                <Navbar.Brand>
                    <img src={logo} width="200px" height="50px" style={{ marginLeft: '50px' }} />
                </Navbar.Brand>

                <Navbar.Toggle style={{ color: '#fff' }} />
                <Navbar.Collapse>
                    <Nav className="justify-content-end" style={{ width: "95%" }}>
                        <button className='NavItem'><Link to="mint">Mint</Link></button>
                        <button className='NavItem'><Link to="TeamContainer">Team</Link></button>
                        <button className='NavItem'><Link to="FQAMainContainer">About</Link></button>
                        <button className='NavItem'><Link to="Team">Roadmap</Link></button>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
}

export default Nav2;