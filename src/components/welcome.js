import logo from '../logo.svg';
import '../css/welcome.css';

function welcome() {
    return (
        <div id='mint'>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Danger Noodles coming soon</h1>
                </header>
            </div>
        </div>
    )
}

export default welcome;