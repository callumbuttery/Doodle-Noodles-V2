import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../css/slides.css';
import mainSlide from '../imgs/slide1.png';

const slideImages = [
  {
    url: mainSlide,
    caption: 'Slide 1'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container" style={{ height:'500px'}}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}} className="slides">
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;