import React, { useState } from 'react';
import { Modal, Button, Toast, Alert } from 'react-bootstrap';

function Tile6({ show, handleClose }) {

  const [clicked, setClicked] = useState(false);

  function handleClick(){
    setClicked(true);
  }
  
  return (
    <>

    <Modal show={show} onHide={handleClose} style={{marginTop: '250px'}}>
      <Modal.Header >
        Click on the bottle to reveal the message!
      </Modal.Header>
      <Modal.Body>
        {
          <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            {clicked ? (
              <img src="src\assets\images\6-2.jpg" style={{height:"300px"}} onClick={handleClose}/>
            ) : (
              <img src="src\assets\images\6-1.jpg" style={{height:"300px"}} onClick={handleClick}/>
            )}
            
          </div>
        }
      </Modal.Body>
    </Modal>

    </>


  );
}

export default Tile6;