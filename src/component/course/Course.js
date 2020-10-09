import React from 'react';
import './Course.css'

const Course = (props) => {
    const {name, price, duration} = props.product;
    const handleAddProduct = props.handleAddProduct;
    
   
    return (
        <div className="main-div">
            <div className="sub-div">
                <h2>Course Name: {name}</h2>
                <p>Course Duration: {duration}</p>
                <p><small>Course Price: {price} Tk</small></p>
                <button 
                    className="button"
                    onClick={() => handleAddProduct(props.product)}
                    >
                    Enroll Now
                    </button>
            </div>

        </div>
    );
};

export default Course;