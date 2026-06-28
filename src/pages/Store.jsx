import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Store.css';
import orderS from '../images/orderStatic.svg';
import imageC from '../images/products/whiteCorset.png';

function Store() {
  return (
    <div className="Store">
        <div className="line"></div>
        <div className="storeHeader">
            <p className="sh1">In the world of Flomirue,</p>
            <p className="sh2">every thread tells a story
                         <br />of fleeting moments, captured in the lace and light.
            </p>
        </div>
        <div className="storeContent">
          <div className="productImage">
              <img src={imageC} alt="White Lace Corset" />
          </div>

          <div className="productInfo">
              <p className="sh3">Whispers of Lace</p>

              <p className="description">
                  The White Lace Corset is a delicate embodiment of elegance and sophistication. <br/>
                  Handcrafted with precision, each piece tells a story through intricate lace and corset mesh.
              </p>

              <div className="infoBlock">
                  <p className="sh4">Materials:</p>
                  <p className="sh5">
                      Lace and corset mesh, lined with soft cotton <br/>
                      Detachable crystal and glass bead embellishments
                  </p>
              </div>

              {/* <div className="infoBlock">
                  <p className="sh4">Made to Measure:</p>
                  <p className="sh5">
                      Available in any size upon request, tailored to perfection.
                  </p>
              </div> */}

              <div className="infoBlock">
                  <p className="sh4">Production Time:</p>
                  <p className="sh5">
                      3 weeks to ensure the finest quality and attention to every detail.
                  </p>
              </div>
              <Link to="https://instagram.com/flomirue" className="order-button">
                <img
                    src={orderS}
                    alt="Order Now"
                    className="order-button-image"
                />
              </Link>
          </div>
      </div>
    </div>
  );
}

export default Store;