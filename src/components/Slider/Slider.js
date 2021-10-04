import React from 'react';
import slider1 from "../../images/slider1.png"
import slider2 from "../../images/slider2.png"
import slider3 from "../../images/slider3.jpg"
import "./Slider.css"

const Slider = () => {
    return (
        <section>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100  my-slider" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>You can also become an Android apps developer by following our course</h3>

                        </div>
                    </div>
                    <div className="carousel-item" >
                        <img src={slider2} className="d-block w-100  my-slider" alt="..." />
                        <div className="carousel-caption d-none d-md-block">

                            <h3>This course is for you if you want to be a software developer</h3>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <img src={slider3} className="d-block w-100  my-slider" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Our course will make you an (expert level) web developer</h3>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default Slider;