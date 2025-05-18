import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button, Toast, Alert, Card } from 'react-bootstrap';

function Tile9({ show, handleClose }) {
  const questions = [
  {
    question: "What’s your vibe at an arcade?",
    options: [
      { answer: "Hyper and running around", character: "Hinata" },
      { answer: "Laser focused to win", character: "Kageyama" },
      { answer: "Flirty and smooth", character: "Oikawa" },
      { answer: "Quiet and thoughtful", character: "Kenma" },
      { answer: "Calm but encouraging", character: "Akaashi" },
    ],
  },
  {
    question: "Pick a favorite Timezone game:",
    options: [
      { answer: "Basketball", character: "Hinata" },
      { answer: "Air Hockey", character: "Kageyama" },
      { answer: "Claw machine", character: "Kenma" },
      { answer: "Dance game", character: "Oikawa" },
      { answer: "Trivia quiz", character: "Akaashi" },
    ],
  },
  {
    question: "How do you celebrate a win?",
    options: [
      { answer: "Scream and jump around", character: "Hinata" },
      { answer: "Nod seriously", character: "Kageyama" },
      { answer: "Smirk and wink", character: "Oikawa" },
      { answer: "Smile quietly", character: "Kenma" },
      { answer: "Give a small proud smile", character: "Akaashi" },
    ],
  },
];

const characterDescriptions = {
  Hinata: "Bursting with energy and always up for fun — just like you on our Timezone date! 🧡",
  Kageyama: "Focused and competitive, but deep down very caring. You always play to win!",
  Oikawa: "Charming and playful — you know how to have fun and make me laugh!",
  Kenma: "Calm, observant and introverted, but always thoughtful — like when we played together quietly.",
  Akaashi: "Supportive and composed — you always know the right words and make everything feel steady and safe. 💙",
};

const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswerClick = (character) => {
    const newAnswers = [...answers, character];
    if (currentQuestion === questions.length - 1) {
      calculateResult(newAnswers);
    } else {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const calculateResult = (answersArray) => {
    const count = {};
    answersArray.forEach((char) => {
      count[char] = (count[char] || 0) + 1;
    });
    const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    setResult(sorted[0][0]);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };
  
  return (
    <>

    <Modal show={show} onHide={handleClose} style={{marginTop: '250px'}}>
      <Modal.Header >
        Which Haikyuu character are you?
      </Modal.Header>
      <Modal.Body>
        {!result ? (
          <div>
            <h2>{questions[currentQuestion].question}</h2>
            <div>
      {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      className="m-2"
                      onClick={() => handleAnswerClick(option.character)}
                      variant="outline-dark"
                    >
                      {option.answer}
                    </Button>
                  ))}
            </div>
            
          </div>
        ) : (
          <Card>
            <Card.Body>
              <Card.Title>You’re most like {result}! 🏐</Card.Title>
              <Card.Text>{characterDescriptions[result]}</Card.Text>
              <div className="text-center mt-3">
                <Button variant="secondary" onClick={restartQuiz}>Play Again</Button>
              </div>
            </Card.Body>
          </Card>
        )}
      </Modal.Body>
    </Modal>

    </>


  );
}

export default Tile9;