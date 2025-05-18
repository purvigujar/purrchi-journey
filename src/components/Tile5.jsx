import React, { useState } from 'react';
import { Modal, Button, Toast, Alert } from 'react-bootstrap';
import './Polaroid.css';


function Tile5({ show, handleClose }) {

  const [revealed, setRevealed] = useState(false);

  return (
    <>

    <Modal show={show} onHide={handleClose} style={{marginTop: '250px'}}>
      <Modal.Header >
        
      </Modal.Header>
      <Modal.Body>
        
        <div className='polaroid-container' >
          {revealed && (
            <h3 className='note'>
              Soft launching. 29.03.22 💘
            </h3>
          )} 
          <div 
            className={`polaroid ${revealed ? 'revealed' : ''}`}
            onClick={() => setRevealed(true)}
          >
            <img src="src\assets\images\5.jpg" className='background-image' />
          </div>
          
          
        </div>
            
      </Modal.Body>
    </Modal>

    </>


  );
}

export default Tile5;