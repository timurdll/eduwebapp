import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import './InteractiveTask.css';

function InteractiveTask({ title, text, instructions, answer, onCorrectAnswer, onIncorrectAnswer }) {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().toLowerCase() === answer.trim().toLowerCase()) {
      setIsAnswerCorrect(true);
      setIsSubmitted(true);
      onCorrectAnswer(inputValue);
    } else {
      onIncorrectAnswer(inputValue);
      alert('Incorrect answer!');
    }
  };

  return (
    <div className="interactive-task">
      <h1>{title}</h1>
      <div className="interactive-task__text">{text}</div>
      {!isSubmitted ? 
        <div className="interactive-task__instructions">{instructions}</div> :
        <></>
      }
      <form className="interactive-task__form" onSubmit={handleSubmit}>
        {!isSubmitted && (
          <label>
            <input
              className="interactive-task__input"
              type="text"
              placeholder="Type your answer here"
              value={inputValue}
              onChange={handleInputChange}
            />
          </label>
        )}
        {!isAnswerCorrect && (
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!inputValue.trim()}
          >
            Submit
          </Button>
        )}
      </form>
      {isSubmitted && (
        <Alert severity="success">
          Your answer "{inputValue}" was correct!
        </Alert>
      )}
    </div>
  );
}

InteractiveTask.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onCorrectAnswer: PropTypes.func.isRequired,
  onIncorrectAnswer: PropTypes.func.isRequired,
};

export default InteractiveTask;
