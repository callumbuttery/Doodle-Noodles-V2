import "../../css/minter.css";
import "../../css/App.css";
import { MDBBtn } from 'mdb-react-ui-kit'


function Minter() {

    const flipComponents = () => {
        document.getElementById("beginMintingButton").style.display = "none";
        document.getElementById("mintingProcessButtons").style.display = "flex";
        document.getElementById("mintButton").style.display = "flex";
    }

    return (
        <div dappContainer>
            <MDBBtn id="beginMintingButton" className='mx-4 beginMintingButton' color='danger' onClick={flipComponents}>Begin Minting</MDBBtn>
            <div id="mintingProcessButtons">
                <MDBBtn className='minusButton' color='danger'>-</MDBBtn>
                <div id="mintNumber">5</div>
                <MDBBtn className='plusButton' color='danger'>+</MDBBtn>
            </div>
            <MDBBtn id='mintButton' color='warning' size="lg">Mint</MDBBtn>
        </div >
    )
}

export default Minter;