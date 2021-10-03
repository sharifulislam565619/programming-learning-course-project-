import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Home = () => {

    const [courses, setCourses] = useState([])
    const newCourses = courses.slice(0, 6)

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/sharifulislam565619/fakeData/main/fageData.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 p-3">

            {
                newCourses?.map(course => <Course
                    key={course.id}
                    course={course}></Course>)
            }
        </div>
    );
};

export default Home;