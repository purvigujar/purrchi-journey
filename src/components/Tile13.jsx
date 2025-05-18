import React, { useState } from 'react';
import { Modal, Button, Toast, Alert } from 'react-bootstrap';

function Tile1({ show, handleClose }) {


  return (
    <>

    <Modal show={show} onHide={handleClose} style={{marginTop: '250px'}}>
      <Modal.Header >
        
      </Modal.Header>
      <Modal.Body>
          <h2>Happy 24th birthday Chi!!! Today is one of the many core memories of us. I hope you have fun with me today. You are the best thing that ever happened to me. Take a step forward to meet me, I love you ❤️ </h2>
      </Modal.Body>
    </Modal>

    </>


  );
}

export default Tile1;