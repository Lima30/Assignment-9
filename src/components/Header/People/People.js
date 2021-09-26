import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
// import Cart from '../../Cart/Cart';
import Information from '../../Information/Information';
import './People.css'

const People = () => {
    const [people, setPeople] = useState([])
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('./people.JSON')
            .then(res => res.json())
            .then(data => setPeople(data));

    }, [])

    const handleAddToCart = (people) => {
        // console.log(people.name);
        const newCart = [...cart, people];
        setCart(newCart);
    }

    return (
        <div className="people-container">
            <div className="people-info">

                {
                    people.map(people => <Information

                        people={people}
                        handleAddToCart={handleAddToCart}
                    >
                    </Information>)
                }


            </div>
            <div className="total-people">
                <Cart cart={cart} ></Cart>
            </div>

        </div>
    );
};

export default People;