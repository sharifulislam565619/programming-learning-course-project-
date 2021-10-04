import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mb-5 pb-5">

            <img style={{ width: "200px", height: "150px" }} src="https://assets.codepen.io/1538474/404.svg" alt="..." className="logo-404" />

            <p className="title">Oh no!!</p>
            <h1>page not found</h1>


            <div align="center">
                <NavLink className="btn-back" to="/home"><button className="btn btn-dark">Back to home page </button></NavLink>
            </div>

        </div>
    );
};

export default NotFound;