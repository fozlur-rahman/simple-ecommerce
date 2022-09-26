import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong, faRemove } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { cart } = props;
    // const { price } = cart;
    console.log(cart);
    return (
        <div>
            <h3>Order summery</h3>
            <div className='cart-deatils'>
                <p>Select Items: {cart.length}</p>
                {/* <p>Total price: {price}</p> */}
                <p>Total Shipping Charge:</p>
                <p>tax: </p>
                <h5>Grand Tota: </h5>
                <button style={{ background: '#FF3030' }}>Clear Cart <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>  </button>
                <button style={{ background: '#FF9900' }}>Preview order <FontAwesomeIcon icon={faRightLong}></FontAwesomeIcon> </button>
            </div>
        </div>
    );
};

export default Cart;