import React, { useState } from 'react'
import Card from './Card'

function Cards(props) {

    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    const getCourses = () => {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((array) => {
                array.forEach((course) => {
                    allCourses.push(course);
                })
            });
            return allCourses;

        }
        else {
            //  Return the specific category of courses
            return courses[category];
        }
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {!courses ? (
                <div>
                    <p>No Data Found</p>
                </div>
            ) : (getCourses().map((course) => {
                return <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
            }))}
        </div>
    )
}

export default Cards
