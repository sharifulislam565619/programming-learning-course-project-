import React from 'react';
import { NavLink } from 'react-router-dom';
import './Course.css'

const Course = (props) => {
    const { title, img, price, desc, info } = props.course

    return (

        <div className="col g-4">
            <div className="card my-card">
                <div className="text-center p-2">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <h5><b>Fee:</b> {price}</h5>
                    <p className="card-text">{desc.slice(0, 90)}</p>
                </div>
                <div>
                    <a href={info} target="_blank" rel="noreferrer">
                        <button className="btn btn-info me-2">Details</button>
                    </a>
                    <NavLink style={{ textDecoration: "none" }} to="/contact"> <button className="btn btn-primary">Buy Course</button></NavLink>
                </div>
            </div>
        </div>


    )

}

export default Course;