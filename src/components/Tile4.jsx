import React, { useState } from 'react';
import { Modal, Button, Toast, Alert } from 'react-bootstrap';
import './PhotoFlip.css';

function Tile4({ show, handleClose }) {

  const [revealed, setRevealed] = useState([false, false, false]);

  const handleReveal = (index) => {
    const updated = [...revealed];
    updated[index] = true;
    setRevealed(updated);
  };

  const captions = [
    "First time at your place 🏠",
    "The ring I made you 💍",
    "Hand holding hehe 🤍",
    "Sandwich you made me🥪"
  ];

  const images = [
    "src/assets/images/4-1.jpg",
    "src/assets/images/4-2.jpg",
    "src/assets/images/4-3.jpg",
    "src/assets/images/4-4.jpg",  
  ];

  return (
    <>

    <Modal show={show} onHide={handleClose} style={{marginTop: '50px'}}>
      <Modal.Header >
        
      </Modal.Header>
      <Modal.Body >
        <div className="photo-flip-container">
        {images.map((src, index) => (
          <div key={index} className="photo-tile" onClick={() => handleReveal(index)}>
            <img
              src={src}
              className={revealed[index] ? "unblurred" : "blurred"}
              alt={`memory-${index}`}
            />
            {revealed[index] && <p className="caption">{captions[index]}</p>}
          </div>
        ))}
      </div>
            
      </Modal.Body>
    </Modal>

    </>


  );
}

export default Tile4;