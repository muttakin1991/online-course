import React from 'react';
import { useState } from 'react';
import Cart from '../cart/Cart';
import Course from '../course/Course';
import './Maincourse.css'


function Maincourse() {
    const products = [
        {name: 'web-design', duration: '6 month', price: '5000'},
        {name: 'web-development', duration: '6 month', price: '7000'},
        {name: 'digital-marketing', duration: '3 month', price: '3500'},
        {name: 'affiliate-marketing', duration: '2.5 month', price: '2500'},
        {name: 'graphics-design', duration: '6 month', price: '4400'},
        {name: 'paython', duration: '6 month', price: '7000'},
        {name: 'javaScript', duration: '6 month', price: '10000'},
        {name: 'programming', duration: '6 month', price: '7000'},
        {name: 'app-development', duration: '6 month', price: '12000'},
        {name: 'freelancing', duration: '2 month', price: '2000'},
        {name: 'speaking- english', duration: '2 month', price: '2000'},
        {name: 'data- science', duration: '2 month', price: '2000'}
    ]

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className="main-div">
            
            <Cart cart={cart}></Cart>
            {
               products.map(product => <Course product={product} handleAddProduct={handleAddProduct}></Course>) 
            }

        </div>
    );
}


export default Maincourse;