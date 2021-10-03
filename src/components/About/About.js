import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../../App';
import img from "../../images/sharif.png"


const About = () => {
    const name = useContext(MyContext)
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>
                This is Shariful. I'm an expert in website design and development. If you want to create a responsive website. I'll create your website as you like. I Specialize in Html5, CSS3, Javascript react, Bootstrap5. I would love to work on your projects. If you have any questions do not hesitate to contact me I will do your work. I work fast and you will get guaranteed quality results.
            </p>

        </div>
    );
};

export default About;