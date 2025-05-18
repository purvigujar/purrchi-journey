import React, { useState } from 'react';
import { Modal, Button, Toast, Alert } from 'react-bootstrap';

function Tile7({ show, handleClose }) {

  const [selected, setSelected] = useState(0);

  function handleClick() {
    setSelected(1);
  }


  return (
    <>

    <Modal show={show} onHide={handleClose} style={{marginTop: '250px'}}>
      <Modal.Header >
        
      </Modal.Header>
      <Modal.Body>
        { (selected!== 0) ? (
          <div>
                    <h3 style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>pyaar vyaar me hai kya? </h3>
                    <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                      <img style={{height:'300px',margin:"20px"}} src="src\assets\images\7-4.jpg"/>
                    </div>
              </div>
        ) : (
          <div>
            <h3>Which outfit did I wear when I met your mom for the first time?</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <img src ="src/assets/images/7-1.jpg" style={{height:"150px"}}/>
                <img src ="src/assets/images/7-2.jpg" style={{height:"150px"}} onClick={handleClick}/>
                <img src ="src/assets/images/7-3.jpg" style={{height:"150px"}}/>
            </div>
        </div>
        )}
        
        
           
      </Modal.Body>
    </Modal>

    </>


  );
}

export default Tile7;