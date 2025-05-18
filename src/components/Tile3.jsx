import React, { useState, useEffect } from 'react';
import { Modal, Button, Toast, Alert } from 'react-bootstrap';

function Tile3({ show, handleClose }) {

  const emojis = ['🍬','🫗','😽'];
  const [droppedItems, setDroppedItems] = useState([]);
  const [showMemory, setShowMemory] = useState(false);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("emoji", item);
  }

  const handleDrop = (e) => {
    const dropped = e.dataTransfer.getData("emoji");
    if(!droppedItems.includes(dropped))
      setDroppedItems([...droppedItems, dropped]);
  }

  useEffect(() => {
    if(droppedItems.length === emojis.length){
      setShowMemory(true);
    }
  })

  return (
    <>

    <Modal show={show} onHide={handleClose} style={{marginTop: '250px'}}>
      <Modal.Header >
        
      </Modal.Header>
      <Modal.Body>
        <div>

          {
            showMemory ? (
              <div>
                    <h2 style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>12/02/22: Our First Date 📍Candies </h2>
                    <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                      <img style={{height:'300px',margin:"20px"}} src="src\assets\images\3.jpg"/>
                    </div>
              </div>
            ) : (
              <>
              <h2>Drag the emojis into the hole to reveal a memory!</h2>
              <div style={{display: 'flex', justifyContent:'center', alignItems: 'center',gap:'30px'}}>
                {emojis.map((emoji, index) => (
                  <span
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, emoji)}
                    style={{fontSize: '80px', margin: '10px'}}
                  >
                    {emoji}
                  </span>
                ))}
              </div>

              <div 
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                style={{fontSize: '150px',display: 'flex', justifyContent:'center', alignItems: 'center'}}
              >
                🕳️
          </div>
          </>
            )
          }

        </div>
            
      </Modal.Body>
    </Modal>

    </>


  );
}

export default Tile3;