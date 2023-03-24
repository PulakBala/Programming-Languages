import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CourseModal from "../CourseModal/CourseModal";

import "./CourseCard.css";

const CourseCard = ({ cors }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { picture, name } = cors;
  const info = {cors};
  return (
    <div>
      {modalOpen && <CourseModal setOpenModal={setModalOpen} value={info}/>}
      <div className="shadow rounded-5" style={{ width: "20rem" }}>
      <h2>{name}</h2>
        <Card.Img
          className="m-auto shadow mt-2 rounded-5"
          style={{ height: "300px", width: "300px" }}
          variant="top"
          src={picture}
          onClick={() => {
            setModalOpen(true);
          }}
        />
        
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
          variant="primary"
        >
          Course Details
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
