import React from 'react';
import '../styles/Vision.css';
import { Link } from 'react-router-dom';
import backgroundVision from '../images/backgroundVision.jpg';
import overlay from '../images/overlayVision.svg';
import rect from '../images/RectangleGray.svg';
import textVision from '../images/textVision.svg';

function Vision() {
  return (
    <div className="Vision">
        <img src={backgroundVision} alt="backgroundVision" className="backgroundVision" />
        <img src={overlay} alt="overlayVision" className="overlayVision" />
        <img src={textVision} alt="textVision" className="textVision" />
        <div className="overlayText">
            <img src={rect} alt="rectangleGray" className="rectangleGray" />
            <p className="textV1"> Creativity knows no boundaries.
                            <br /> It doesn't matter where you are — what matters 
                            <br /> is your vision, your style, and your story. 
                            <br /> Whether you're in Paris, Tokyo, or New York, the 
                            <br /> only requirement is a unique perspective and 
                            <br /> a desire to bring it to life. </p>
            
        </div>
        <div className="overlayText2">
            <p className="textV2">Interested in collaborating?</p>
            <p className="textV3">Let's create something unforgettable together.</p>
        </div>
    </div>
  );
}

export default Vision;