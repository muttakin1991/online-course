import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;


    let total = 0;
    let courseName= [];
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + Number(product.price);
        courseName = courseName + " , " + product.name;
    }

    return (
        <div courseName="cart-main-div">
            <div className="cart-sub-div">
                <h1>Order Summary: {cart.length}</h1>
                <h5>Course Name: {courseName}</h5>
                <p>Total price: {total}</p>
            </div>
        </div>
    );
};

export default Cart;