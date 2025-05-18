import React, { useState } from 'react';
import { Modal, Button, Toast, Alert } from 'react-bootstrap';

function Tile1({ show, handleClose }) {

  const imgStyles = {
    width: '150px',
    height: '150px',
    margin: '20px',
    padding: '0px'
  }

  const [showMemory, setShowMemory] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleAnswer = (choice) => {
    if(choice === 'Chifuyu'){
      setShowMemory(true);
      setShowAlert(false);
      // handleClose();
    } else{
      setShowAlert(true);
    }
  }

  const handleAlertClose = () => setShowAlert(false);

  return (
    <>

    <Modal show={show} onHide={handleClose} style={{marginTop: '250px'}}>
      <Modal.Header >
        
      </Modal.Header>
      <Modal.Body>

            { showMemory ? 
              (
              <Modal show={show} onHide={handleClose} style={{marginTop: '250px'}}>
              <Modal.Header >
                
              </Modal.Header>
              <Modal.Body>
                <div>
                    <h1 > You remembered!! ❤️ </h1>
                    <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                      <img style={{height:'300px'}} src="src\assets\images\2-5.jpg"/>
                    </div>
                  </div>
              </Modal.Body>
            </Modal>
                  
            ) : (
            <>
              {showAlert && (
                <Alert show={show} variant={"danger"} onClose={handleAlertClose} dismissible>
                  Wrong!
        
              </Alert>

              )}
              <div>
                  <h1 style={{textAlign:'center'}}>Which character helped begin our love story? Take a guess!</h1>
                  <div style={{display:'grid', gridTemplateColumns: 'auto auto'}}>
                    <button style={{padding:"0px"}}><img style={imgStyles} onClick={()=>handleAnswer('Gojo')} src="src\assets\images\2-1.jpg"/></button>
                    <button style={{padding:"0px"}}><img style={imgStyles} onClick={()=>handleAnswer('Usui')} src="src\assets\images\2-2.jpg"/></button>
                    <button style={{padding:"0px"}}><img style={imgStyles} onClick={()=>handleAnswer('Kageyama')} src="src\assets\images\2-3.jpg"/></button>
                    <button ><img style={imgStyles} onClick={()=>handleAnswer('Chifuyu')} src="src\assets\images\2-4.jpg"/></button>
                
                  </div>
              </div>
              </>
            )}
      </Modal.Body>
    </Modal>

    </>


  );
}

export default Tile1;