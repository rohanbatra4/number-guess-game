import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';
import './styles/Game.css';

function NumberGuesser() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempts(attempts + 1);
    if (guess < number) {
      setMessage('Too low!');
    } else if (guess > number) {
      setMessage('Too high!');
    } else {
      setMessage(`You guessed it in ${attempts} attempt(s)!`);
    }
  };

  const restartGame = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  return (
    <div className="center-align">
      <h1 className="animated fadeInDown">Guess the Number</h1>
      <Form onSubmit={handleSubmit} className="animated fadeIn">
        <FormGroup>
          <Label for="guess">Enter your guess:</Label>
          <Input
            type="number"
            name="guess"
            id="guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
        </FormGroup>
        <Button className="stylish-button animated fadeInUp" color="primary">Guess</Button>
      </Form>
      {message && <Alert className="animated fadeInUp" color={guess === number ? 'success' : 'danger'}>{message}</Alert>}
      <Button className="restart-button animated fadeInUp" color="secondary" onClick={restartGame}>
        Restart Game
      </Button>
    </div>
  );
}

export default NumberGuesser;
