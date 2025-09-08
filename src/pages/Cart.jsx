import React from 'react';
import '../styles/Cart.css';
import { Link } from 'react-router-dom';
import tailoring from '../images/tailoring.svg';
import backgroundCart from '../images/backgroundCart.png';
import overlay from '../images/overlayCart.svg';
import Instagram from '../images/instagram.svg';
import Email from '../images/email.svg';

function Cart() {
  return (
    <div className="Cart">
        <img src={tailoring} alt="tailoring" className="tailoring" />
        <img src={backgroundCart} alt="backgroundCart" className="backgroundCart" />
        <img src={overlay} alt="overlayCart" className="overlayCart" />
        <p className="textCart">The Flomirue store is currently under construction.</p>
        <div className="cartContactsContainer">
            <p className="cartContacts">If you wish to place an order, 
                             <br /> please reach out directly to 
                             <br /> the designer:</p>
            <div className="contactsButtons">
                <Link to="https://instagram.com/flomirue" className="instagram-button">
                    <img
                        src={Instagram}
                        alt="instagram"
                        className="button-image5"
                    />
                </Link>
                <Link to="mailto:flomirue@gmail.com" className="email-button">
                    <img
                        src={Email}
                        alt="email"
                        className="button-image6"
                    />
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Cart;