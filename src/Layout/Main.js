import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNavbar from '../Components/Course/LeftSideNavbar/LeftSideNavbar';
import Header from '../Header/Header';
import MyFooter from '../Components/MyFooter/MyFooter'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="3" className='d-none d-lg-block'>
                    <LeftSideNavbar></LeftSideNavbar>
                    </Col>
                    <Col lg="9">
                    <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <MyFooter></MyFooter>
        </div>
    );
};

export default Main;