import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong, faRemove } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { cart } = props;
    // for totol calculation 
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandToatal = parseFloat(total + shipping + parseFloat(tax));

    // console.log(cart);
    return (
        <div>
            <h3>Order summery</h3>
            <div className='cart-deatils'>
                <p>Select Items: {quantity}</p>
                <p>Total price: $ {total}</p>
                <p>Total Shipping Charge: $ {shipping}</p>
                <p>tax: ${tax}</p>
                <h5>Grand Tota: $ {grandToatal.toFixed(2)}</h5>
                <button style={{ background: '#FF3030' }}>Clear Cart <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>  </button>
                <button style={{ background: '#FF9900' }}>Preview order <FontAwesomeIcon icon={faRightLong}></FontAwesomeIcon> </button>
            </div>
        </div>
    );
};

export default Cart;