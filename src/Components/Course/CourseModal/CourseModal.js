import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../UserContext/UserContext';

const CourseModal = ({setOpenModal, value}) => {
const {user} = useContext(AuthContext);

    const {name,picture} = value.cors;

    console.log(user);
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
          {
            user?.uid ?
            <button><Link to='/category/:id'>Continue</Link></button>
            :
            <button><Link to='/login'>Continue</Link></button>
          }
        </div>
        </div>
      </>
    );
};

export default CourseModal;