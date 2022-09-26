import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    // for localStorage save data and  dispaly data 
    useEffect(() => {
        const storesCart = getStoredCart();
        const saveCart = [];
        // console.log(storesCart);
        for (const id in storesCart) {
            const addedProducts = products.find(product => product.id === id);
            console.log(addedProducts);
            if (addedProducts) {
                const quantity = storesCart[id];
                addedProducts.quantity = quantity;
                saveCart.push(addedProducts);
            }
        }
        setCart(saveCart);
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
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
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;