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
            <img src={img} alt="" />
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