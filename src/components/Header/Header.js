import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <nav className="header bg-info text-center">
            <h2>Lima's Language Learning Center</h2>
            <Link className="text-black font-weight-bold" to="/Home">Home</Link>
            <br />

            <Link className="text-black" to="/About">About</Link>
            <br />

            <Link className="text-black" to="/Services">Services</Link>
            <br />

            <Link className="text-black" to="/Contact">Contact</Link>

        </nav>

    );
};

export default Header;