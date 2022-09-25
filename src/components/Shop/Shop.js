import React, { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong, faRemove } from '@fortawesome/free-solid-svg-icons';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        handleAddToCart={handleAddToCart}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className="cart-container">

                <h3>Order summery</h3>
                <div className='cart-deatils'>
                    <p>Select Items: {cart.length}</p>
                    <p>Total price: </p>
                    <p>Total Shipping Charge: {cart.price}</p>
                    <p>tax: </p>
                    <h5>Grand Tota: </h5>
                    <button style={{ background: '#FF3030' }}>Clear Cart <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon> </button>
                    <button style={{ background: '#FF9900' }}>Preview order <FontAwesomeIcon icon={faRightLong}></FontAwesomeIcon> </button>
                </div>
            </div>
        </div>
    );
};

export default Shop;