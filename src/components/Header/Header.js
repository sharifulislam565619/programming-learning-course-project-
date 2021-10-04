import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

import logo2 from "../../images/logo2.png"




const Header = () => {
    return (


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <NavLink className="navbar-brand" to="/home">
                    <img style={{ height: "50px" }} src={logo2} alt="" />
                    Learn Programming</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <NavLink activeClassName="selected" to="/home">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contact">Contact us</NavLink>
                    </div>
                </div>
            </div>
        </nav>





    );
};

export default Header;