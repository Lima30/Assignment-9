import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './Information.css'

const Information = (props) => {
    // console.log(props)
    const { name, gender, age, company, picture, balance } = props.people;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="detail-info">
            <img src={picture} alt="" />
            <h4>Name: {name} </h4>
            <h4>Gender: {gender} </h4>
            <h4>Age: {age} </h4>
            <h4>Founder: {company}</h4>
            <h4>Salary:${balance} </h4>
            <button
                onClick={() => props.handleAddToCart(props.people)}
                className="button">{element} Add to Cart</button>

        </div>
    );
};

export default Information;