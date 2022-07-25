import '../css/welcome.css';
import Minter from '../components/Dapp/Minter';

function welcome() {
    return (
        <div className='mint'>
            <div className="App">
                <header className="App-header">
                    <div className="">
                        <Minter></Minter>
                    </div>
                </header>
            </div>
        </div >
    )
}

export default welcome;