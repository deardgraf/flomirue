import React from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router-dom';
import background1 from '../images/background1.jpg';
import flomirueTitle from '../images/flomirueTitle.svg';
import embraceS from '../images/embraceStatic.svg';

function HomePage() {
  return (
    <div className="HomePage">
        <img src={background1} alt="background1" className="bg1" />
        <img src={flomirueTitle} alt="FLOMIRUE" className="flomirueTitle" />
        <Link to="/" className="embrace-button">
                <img
                    src={embraceS}
                    alt="Embrace"
                    className="button-image1"
                />
            </Link>
    </div>
  );
}

export default HomePage;