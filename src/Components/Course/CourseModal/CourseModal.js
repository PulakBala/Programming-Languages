import React from 'react';
import { Card } from 'react-bootstrap';

const CourseModal = ({setOpenModal, value}) => {

    const {name,picture} = value.cors;

    console.log(name);
    return (
        <>
        <div className="modal-wrapper" onClick={()=>{setOpenModal(false)}}></div>
        <div className="modal-container">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{name}</h1>
        </div>
        <div className="body">
        <Card.Img
          className="m-auto shadow mt-2 rounded-5"
          style={{ height: "300px", width: "300px" }}
          variant="top"
          src={picture}
        />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
        </div>
      </>
    );
};

export default CourseModal;