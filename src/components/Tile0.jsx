import React, { useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import './Tile0.css';

function Tile0({ show, handleClose }) {

  const [showAlert, setShowAlert] = useState(false);

  function handleNoClick() {
    setShowAlert(true);
  }

  function handleAlertClose() {
    setShowAlert(false);
  }

  return (
    <Modal show={show} onHide={handleClose} style={{marginTop: '250px'}}>
      
      <Modal.Body style={{padding: '40px'}}>
        
        <div style={{textAlign: 'center'}}>
            <h1 className="mainMenu-header">PURRCHI <br/> JOURNEY</h1>
        </div>
        <div className='button-bar'>
          <Button className="play-btn" onClick={handleClose}>PLAY</Button>
          <Button className="exit-btn" onClick={handleNoClick}>EXIT</Button>

          
          
        </div>
        {showAlert && (
                <Alert show={show} onClose={handleAlertClose} dismissible className='alert'>
                  Dont wanna play? And here I thought you loved me!
              
        
              </Alert>

              )}
        
      </Modal.Body>
    </Modal>

  );
}

export default Tile0;