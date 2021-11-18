import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';

const Services = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/sharifulislam565619/fakeData/main/fakeData.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-3">

                {
                    courses?.map(course => <Course
                        key={course.id}
                        course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Services;