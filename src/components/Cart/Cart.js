import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;
    let total = 0;
    for (const people of cart) {
        total = total + people.balance;
    }




    return (
        <div>
            <h4>summary</h4>
            <h3>People Added:{props.cart.length} </h3>
            <h4>Total Cost:{total} </h4>
        </div>
    );
};

export default Cart;