import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function ReadingPage(props) {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate()

  const { title, text, questions, next, back } = props;

  const handleAnswerChange = (questionIndex, answerIndex) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: answerIndex,
    }));
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const score = Object.keys(answers).reduce((acc, questionIndex) => {
    const answerIndex = answers[questionIndex];
    const question = questions[questionIndex];

    return question.correctAnswer === answerIndex ? acc + 1 : acc;
  }, 0);

  const isScoreAboveThreshold = score >= 3;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 5, marginTop: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>{title}</Typography>
      <Typography variant="body1" align="left" sx={{ maxWidth: 800 }}>{text}</Typography>
      <Box sx={{ mt: 4 }}>
        {questions.map((question, index) => (
          <Box key={index} sx={{ mt: 3 }}>
            <Typography variant="body1" align="left">{`${index + 1}. ${question.text}`}</Typography>
            <RadioGroup
              aria-label={`Question ${index + 1}`}
              name={`question-${index}`}
              value={answers[index]}
              onChange={(event) => handleAnswerChange(index, parseInt(event.target.value))}
            >
              {question.answers.map((answer, answerIndex) => (
                <FormControlLabel
                  key={answerIndex}
                  value={answerIndex}
                  control={<Radio />}
                  label={answer}
                  sx={{ ml: 1, my: 1 }}
                />
              ))}
            </RadioGroup>
          </Box>
        ))}
      </Box>
      {showResults && (
        <Typography variant="body1" align="center" sx={{ mt: 4 }}>
          You scored {score} out of {questions.length}.
        </Typography>
      )}
      <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center', mt: 4, justifyContent: 'space-between' }}>
        <Button variant="contained" onClick={() => navigate(back)}  sx={{ width: '10%',  minWidth: 85}} >
          Back
        </Button>
        <Button variant="contained" onClick={handleShowResults} sx={{ width: '15%',  minWidth: 110}}>
          Submit
        </Button>
        <Button variant="contained" color='success' disabled={!isScoreAboveThreshold} onClick={() => navigate(next)} sx={{ width: '10%',  minWidth: 85}}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

ReadingPage.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string).isRequired,
      correctAnswer: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default ReadingPage;
