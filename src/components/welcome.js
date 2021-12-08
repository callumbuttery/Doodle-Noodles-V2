import logo from '../imgs/Logo3.png'
import '../css/welcome.css';
import Timer from '../components/Timer';

function welcome() {

    <Timer launchDate='November, 21, 2021'></Timer>
    return (
        <div className='mint'>
            <div className="App">
                <header className="App-header">
                    <div className="wrappedImage">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 style={{ color: '#FF123F', fontSize: '50px', marginTop: "0px" }} className="welcomeH1">Coming Soon!!</h1>
                    </div>
                </header>
            </div>
        </div >
    )
}

export default welcome;