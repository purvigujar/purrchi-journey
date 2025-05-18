import React, { useRef, useEffect, useState } from 'react';
import { Modal, Button, Toast, Alert } from 'react-bootstrap';

function Tile10({ show, handleClose, imageUrl }) {

  const [isShaking, setIsShaking] = useState(false);
  const [showMemory, setShowMemory] = useState(false);

  const handleShake = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      setShowMemory(true);
    }, 3000); // Duration of shake animation
  };


  return (
    <>

    <Modal show={show} onHide={handleClose} style={{marginTop: '250px'}}>
      <Modal.Header >
        
      </Modal.Header>
      <Modal.Body>
        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center',marginBottom:'40px'}}>
          <h3>Our first snow together ❄️</h3>
        </div>
        <div
          className={`snow-globe ${isShaking ? 'shake' : ''}`}
          style={{
            position: 'relative',
            width: '250px',
            height: '250px',
            margin: '0 auto',
            borderRadius: '50%',
            background: '#dfefff',
            overflow: 'hidden',
            boxShadow: '0 0 15px rgba(0,0,0,0.2)',
          }}
        >
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: '1.2rem',
                animation: `fall ${2 + Math.random() * 3}s linear infinite`,
              }}
            >
              ❄️
            </span>
          ))}

          {showMemory && (
            <img
              src="src/assets/images/10.jpg"
              alt="our snow date"
              style={{
                position: 'absolute',
                bottom: '0px',
                width: '100%',
                borderRadius: '8px',
              }}
            />
          )}
        </div>

        {!showMemory && (
          <div style={{display:"flex", justifyContent:'center', alignItems: 'center', margin:'30px'}}>
              <Button className="mt-3" onClick={handleShake} >
            Shake the Globe ❄️
          </Button>
          </div>
          
        )}
      </Modal.Body>

      <style>{`
        .shake {
          animation: shakeAnim 0.5s ease-in-out 5;
        }

        @keyframes shakeAnim {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          50% { transform: rotate(-1deg); }
          75% { transform: rotate(1deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes fall {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(250px); opacity: 0; }
        }
      `}</style>
    </Modal>

    </>


  );
}

export default Tile10;