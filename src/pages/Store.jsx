import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Store.css';
import orderS from '../images/orderStatic.svg';
import { products } from '../data/products';

function Store() {
  const [productIndex, setProductIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const product = products[productIndex];

  const prevProduct = () => {
    setProductIndex((i) => (i - 1 + products.length) % products.length);
    setPhotoIndex(0);
  };

  const nextProduct = () => {
    setProductIndex((i) => (i + 1) % products.length);
    setPhotoIndex(0);
  };

  const prevPhoto = () => {
    setPhotoIndex((i) => (i - 1 + product.images.length) % product.images.length);
  };

  const nextPhoto = () => {
    setPhotoIndex((i) => (i + 1) % product.images.length);
  };

  return (
    <div className="Store">
      <div className="line"></div>
      <div className="storeHeader">
        <p className="sh1">In the world of Flomirue,</p>
        <p className="sh2">
          every thread tells a story
          <br />of fleeting moments, captured in the lace and light.
        </p>
      </div>

      <div className="storeContent">
        {/* Стрілка ліво — між продуктами */}
        <button className="productNav productNav--prev" onClick={prevProduct}>&#8592;</button>

        <div className="productImage">
          {product.images.length > 1 && (
            <button className="photoNav photoNav--prev" onClick={prevPhoto}>&#8592;</button>
          )}
          <img src={product.images[photoIndex]} alt={product.name} />
          {product.images.length > 1 && (
            <button className="photoNav photoNav--next" onClick={nextPhoto}>&#8594;</button>
          )}
          {product.images.length > 1 && (
            <div className="photoDots">
              {product.images.map((_, i) => (
                <span
                  key={i}
                  className={`photoDot ${i === photoIndex ? 'photoDot--active' : ''}`}
                  onClick={() => setPhotoIndex(i)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="productInfo">
          <p className="sh3">{product.name}</p>
          <p className="description">{product.description}</p>

          <div className="infoBlock">
            <p className="sh4">Materials:</p>
            <p className="sh5">{product.materials}</p>
          </div>

          <div className="infoBlock">
            <p className="sh4">Production Time:</p>
            <p className="sh5">{product.productionTime}</p>
          </div>

          <Link to="https://instagram.com/flomirue" className="order-button">
            <img src={orderS} alt="Order Now" className="order-button-image" />
          </Link>
        </div>

        {/* Стрілка право — між продуктами */}
        <button className="productNav productNav--next" onClick={nextProduct}>&#8594;</button>
      </div>
    </div>
  );
}

export default Store;