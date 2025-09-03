import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logoFlo from '../images/logoFlo.svg';
import logoCartS from '../images/logoCartStatic.svg';
import visionS from '../images/visionStatic.svg';
import storeS from '../images/storeStatic.svg';
import artistS from '../images/artistStatic.svg';

const Header = ({}) => {
    const navigate = useNavigate();
    const handleHomeClick = () => navigate('/'); // Навігація на домашню сторінку

    return (
        <header className="header">
          <div className="header-container">
            <div className="logo" onClick={() => handleHomeClick()}>
              <img src={logoFlo} alt="Logo" />
            </div>
          </div>

          <div className="header2-container">
            <Link to="/vision" className="vision-button">
                <img
                    src={visionS}
                    alt="Vision"
                    className="button-image"
                />
            </Link>
            <Link to="/vision" className="store-button">
                <img
                    src={storeS}
                    alt="Store"
                    className="button-image"
                />
            </Link>
            <Link to="/vision" className="artist-button">
                <img
                    src={artistS}
                    alt="Artist"
                    className="button-image"
                />
            </Link>
            <Link to="/cart" className="cart-button">
                <img
                    src={logoCartS}
                    alt="Cart"
                    className="icon-image"
                />
            </Link>
          </div>
        </header>
      );
};

export default Header;