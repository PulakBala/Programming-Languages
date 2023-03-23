import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Course/CourseCard/CourseCard';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div className='grid-container'>
            {
                allCourse.map(cors => <CourseCard
                    key={cors.id}
                    cors={cors}
                ></CourseCard>)
            }
        </div>
    );
};

export default Home;