import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { product, handleAddToCart } = props;
    const { name, price, img, seller, rating } = product;
    return (
        <div className='product-card'>
            <img
                src={img}
                alt=""
                onError={(e) => {
                    e.currentTarget.src = "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=900&t=st=1664211635~exp=1664212235~hmac=e1dad493f988c194206294f1e039f7a4df5224394a0b610b1690d8b60899ed97";
                }}
            />
            <div className='product-details'>
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p>Manufacser: {seller}</p>
                <small>Rating: {rating}</small>
            </div>
            <button onClick={() => handleAddToCart(product)} className='add-btn'>Add To Cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>

        </div>
    );
};

export default Product; <h2>this is product</h2>