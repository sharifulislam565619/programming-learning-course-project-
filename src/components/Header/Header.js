import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"



const Header = () => {
    return (

        <nav className="navbar">
            <div>
                <h1>Learn Programming</h1>
            </div>
            <div>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact us</NavLink>
            </div>
        </nav>


    );
};

export default Header;