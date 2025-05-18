import React, { useState } from 'react';
import { Modal, Button, Toast, Alert } from 'react-bootstrap';

function Tile2({ show, handleClose }) {

  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleAlertClose = () => setShowAlert(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    handleAnswer(input);
  }

  const handleAnswer = (choice) => {
    if(input.trim().toLowerCase() === 'i like you okay'){
      setShowAlert(false);
      handleClose();
    } else{
      setShowAlert(true);
      setSubmitted(false);
    }
  }

  return (
    <>

    <Modal show={show} onHide={handleClose} style={{marginTop: '250px'}}>
      <Modal.Header >
        Fill in the blank
      </Modal.Header>
      <Modal.Body>

        <h1 style={{textAlign:"center"}}>Remember our first argument? <br/> Its embarrasing but I'll say it..</h1>
        <p style={{textAlign:"center", fontSize:"20px",paddingTop:"20px"}}>_ ____ ___ ____? I'm interested in you and i dont know if this isnt clear enough what is</p>

       
          <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <div>
            <input type="text" value={input} 
              onChange={(e)=> {setInput(e.target.value); setShowAlert(false)}}  
              style={{marginTop:"20px",backgroundColor:"#789dbc", border:"2px solid #1a3f5e",borderRadius:"8px",width:"200px", height:"40px"}}
            />
          </div>
          <Button type="submit" variant="dark" size="md" style={{marginTop:"20px"}}>Submit</Button>
        </form>
  
        
             {showAlert && (<Alert show={show} variant={"danger"} onClose={handleAlertClose} dismissible> Boo! Try again! </Alert>
        )}     
           
     
            
      </Modal.Body>
    </Modal>

    </>


  );
}

export default Tile2;