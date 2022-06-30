import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
} from 'mdb-react-ui-kit';

import discordIcon from '../imgs/Discord-Logo.png';
import twitterIconRed from '../imgs/twitter-icon-red.png';
import mediumIcon from '../imgs/medium.png';



function Footer() {
    return (
        <MDBFooter className='bg-dark text-white'>
            <MDBContainer className='p-4 pb-0' style={{ width: '1200px'}}>
                <section>
                    <a className='btn btn-outline-light btn-floating m-1 float-left' href='#!' role='button'>
                        Testing
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='google' />
                    </a>
                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='github' />
                    </a>
                </section>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer;