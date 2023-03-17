import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import CourseCard from '../CourseCard/CourseCard';
import './CorseLayOut.css'


const CourseLayOut = () => {
    const data = useLoaderData();
    return (

            <div>
            <h1>This is Courses file {data.length}</h1>
           <Container>
           <Row  className=''>
                    <Col className='border ' lg="3">
                        <h2 className='bg-secondary w-full'>Course Name</h2>
                       {
                        data.map(da => <Category
                        key={da.id}
                        category={da}
                        ></Category>)
                       }
                    </Col>


                    <Col  lg="9">
                    <h2 className='bg-secondary'>Course About</h2>
                      <div className='grid-container'>
                        {
                            data.map(da =><CourseCard
                            key={da.id}
                            courseCard={da}
                            ></CourseCard>)
                        }
                      </div>
                    </Col>


                </Row>

           </Container>

        </div>

    );
};

export default CourseLayOut;