import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';


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
                    <Col className='border' lg="9">
                        <h2>right side content</h2>
                    </Col>
                </Row>

           </Container>

        </div>

    );
};

export default CourseLayOut;