import React, { useState } from 'react';
import { Modal, Button, Toast, Alert } from 'react-bootstrap';
import './PhotoFlip.css';

function Tile12({ show, handleClose }) {

  const images = [
  { src: "src/assets/images/12-1.jpg", alt: "Beach" },
  { src: "src/assets/images/12-2.jpg", alt: "Maggi" },
  { src: "src/assets/images/12-3.jpg", alt: "Rain" },
  ];

  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => setRevealed(true);
  const handleReset = () => {
    setRevealed(false);
    handleClose();
  };


  return (
    <>

    <Modal show={show} onHide={handleClose} style={{marginTop: '50px'}}>
      <Modal.Header >
        
      </Modal.Header>
        <Modal.Body className="text-center">
        {!revealed ? (
          <>
          <h2 style={{marginBottom:"20px"}}>What does this combo result in?</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                fontSize: "2rem",
              }}
            >
              
              {images.map((img, i) => (
                <React.Fragment key={i}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                    }}
                  />
                  {i < images.length - 1 && (
                    <span style={{ fontSize: "2.5rem" }}>+</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <Button
              variant="dark"
              className="mt-4"
              size="lg"
              onClick={handleReveal}
            >
              =
            </Button>
          </>
        ) : (
          <>
            <h2>A perfect date! </h2>
            <p>Lets have more such beach dates oki?</p>
            <img
              src="src/assets/images/12.jpg"
              alt="Beach Date"
              style={{
                margin: "20px",
                height: "300px"
              }}
            />
          
        
          </>
        )}
            
      </Modal.Body>
    </Modal>

    </>


  );
}

export default Tile12;