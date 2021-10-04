import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import Slider from '../Slider/Slider';

const Home = () => {

    const [courses, setCourses] = useState([])
    const newCourses = courses.slice(0, 4)

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/sharifulislam565619/fakeData/main/fageData.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <>
            <Slider></Slider>
            <div className="row row-cols-1 row-cols-md-2 g-4 px-md-5 py-md-3 mx-md-5">

                {
                    newCourses?.map(course => <Course
                        key={course.id}
                        course={course}></Course>)
                }
            </div>
        </>

    );
};

export default Home;