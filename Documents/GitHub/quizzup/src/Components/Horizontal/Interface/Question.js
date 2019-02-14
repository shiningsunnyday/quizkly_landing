import React from 'react';
import './Interface.css';

const Question = (props) => {
  return (
    <div style={styles.quizStyle}>
      <div style={styles.questionStyle}>
        { props.question }
      </div>
      <div style={styles.answersStyle}>
        { props.answers.map((answer, index) => {
          return <div index={index} correctIndex={props.correctIndex} onClick={props.click} style={styles.answerChoiceStyle}>{answer}</div>
        })}
      </div>
    </div>
  );
}

const styles = {
  quizStyle: {
    flex: 1, display: 'flex', flexDirection: 'column', height: '25vh',
  },
  questionStyle: {
    flex: 1,
    backgroundColor: 'lightGreen',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  answersStyle: {
    flex: 3,
    backgroundColor: 'white',
    overflowY: 'scroll',
    flexDirection: 'column',
    display: 'flex',
  },
  answerChoiceStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    cursor: 'pointer',
    position: 'relative',
    flex: 1,
    left: '0%',
    width: '100%',
    backgroundColor: 'yellow'
  }
}

export default Question;
