import logo from '../imgs/Logo3.png'
import '../css/welcome.css';
import Timer from '../components/Timer';

function welcome() {

    return (
        <div id='mint'>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 style={{ color: '#FF123F' }}>Danger Noodles coming soon</h1>
                    <Timer launchDate='November, 21, 2021'></Timer>
                </header>
            </div>
        </div >
    )
}

export default welcome;