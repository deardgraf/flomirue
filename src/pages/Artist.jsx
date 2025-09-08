import React from 'react';
import '../styles/Artist.css';
import { Link } from 'react-router-dom';
import backgroundArtist from '../images/backgroundArtist.png';
import Instagram from '../images/instagram.svg';
import Email from '../images/email.svg';

function Artist() {
  return (
    <div className="Artist">
        <img src={backgroundArtist} alt="backgroundArtist" className="backgroundArtist" />
        <div className="Roksolana"></div>
        <div className="artistTexts">
            <p className="textA1">I'm always open to new 
                            <br />collaboration</p>
            <p className="textA2">Whether you're a creative, a brand, 
                            <br />or someone with a unique vision, let's 
                            <br />create something memorable together.</p>
            <p className="textA3">Ready to collaborate? 
                            <br />Let's talk</p>
            <div className="contactsButtons">
                <Link to="https://instagram.com/flomirue" className="instagram-button">
                    <img
                        src={Instagram}
                        alt="instagram"
                        className="button-image3"
                    />
                </Link>
                <Link to="mailto:flomirue@gmail.com" className="email-button">
                    <img
                        src={Email}
                        alt="email"
                        className="button-image4"
                    />
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Artist;