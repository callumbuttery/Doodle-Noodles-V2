import "../../css/minter.css";
import "../../css/App.css";
import { MDBBtn } from 'mdb-react-ui-kit'


function Minter() {
    return (
        <div dappContainer>
            <MDBBtn className='mx-4 mintButton' color='danger'>Begin Minting</MDBBtn>
        </div >
    )
}

export default Minter;