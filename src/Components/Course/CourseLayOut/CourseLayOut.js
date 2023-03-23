import React from "react";
import { Card } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
// import CourseDetails from "../../CourseDetails/CourseDetails";
// import Category from "../Category/Category";

import "./CorseLayOut.css";

const CourseLayOut = () => {
  const data = useLoaderData();
  const {name, picture,details}= data;
  console.log(data);
  
  return (
    <Card>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
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
