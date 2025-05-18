import React, { useState } from 'react';
import { Modal, Button, Toast, Alert } from 'react-bootstrap';
import './PhotoFlip.css';

function Tile11({ show, handleClose }) {

  const [revealed, setRevealed] = useState([false, false, false]);

  const handleReveal = (index) => {
    const updated = [...revealed];
    updated[index] = true;
    setRevealed(updated);
  };

  const captions = [
    "Kulfi & the bay view",
    "Surprised you at saints",
    "First Bayview date",
    "Late night walks"
  ];

  const images = [
    "src/assets/images/11-1.jpg",
    "src/assets/images/11-2.jpg",
    "src/assets/images/11-3.jpg",
    "src/assets/images/11-4.jpg",  
  ];

  return (
    <>

    <Modal show={show} onHide={handleClose} style={{marginTop: '50px'}}>
      <Modal.Header >
        Dinner dates and late night drives with you are my favourite.
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

export default Tile11;