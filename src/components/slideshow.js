import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

import mainSlide from '../imgs/slide1.png';
import slide2 from '../imgs/Slide2.png'


export default function slideshow() {
  return (

  
      <div class="container">
        <div class="row">
          <div class="col-md-10 mx-auto"></div>
          <MDBCarousel showControls interval={10000}>
            <MDBCarouselInner>
              <MDBCarouselItem className='active'>
                <MDBCarouselElement src={mainSlide} alt='...' />
              </MDBCarouselItem>
              <MDBCarouselItem>
                <MDBCarouselElement src={slide2} alt='...' />
              </MDBCarouselItem>
              <MDBCarouselItem>
                <MDBCarouselElement src={mainSlide} alt='...' />
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </div>
      </div>
  );
}