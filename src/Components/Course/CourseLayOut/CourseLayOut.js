import React from "react";
import { Card, ListGroup } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
// import CourseDetails from "../../CourseDetails/CourseDetails";
// import Category from "../Category/Category";

import "./CorseLayOut.css";

const CourseLayOut = () => {
  const data = useLoaderData();
  const { name, picture, details } = data;
  console.log(data);

  return (
    <Card>
      <Card.Title className="fs-1 shdow">{name}</Card.Title>
      <Card.Img
        className="w-50 m-auto shadow rounded-5 bg-dark"
        variant="top"
        src={picture}
      />
      <Card.Body>
        <Card.Text>{details}</Card.Text>
        <ListGroup>
          <ListGroup.Item>Item 1</ListGroup.Item>
          <ListGroup.Item>Item 2</ListGroup.Item>
          <ListGroup.Item>Item 3</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    // <div>
    //   <h2>length:{data.length}</h2>
    //   {
    //     data.map(da=><CourseDetails
    //       key={da.id}
    //       da={da}
    //     ></CourseDetails>)
    //   }
    // </div>
  );
};

export default CourseLayOut;
