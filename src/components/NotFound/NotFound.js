import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="mars py-3"></div>
            <img src="https://assets.codepen.io/1538474/404.svg" alt="..." className="logo-404" />
            <img src="https://assets.codepen.io/1538474/meteor.svg" alt="..." className="meteor" />
            <p className="title">Oh no!!</p>
            <h1>page not found</h1>


            <div align="center">
                <NavLink className="btn-back" to="/home"><button className="btn btn-dark">Back to home page </button></NavLink>
            </div>
            <img src="https://assets.codepen.io/1538474/astronaut.svg" alt="..." className="astronaut" />
            <img src="https://assets.codepen.io/1538474/spaceship.svg" alt=".." className="spaceship" />
        </div>
    );
};

export default NotFound;