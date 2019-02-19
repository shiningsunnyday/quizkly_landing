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
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '25vh',
  },
  questionStyle: {
    flex: 1,
    backgroundColor: 'lightGreen',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    paddingLeft: '1%',
    paddingRight: '1%'
  },
  answersStyle: {
    flex: 3,
    backgroundColor: 'white',
    overflowY: 'scroll',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'stretch',
  },
  answerChoiceStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    cursor: 'pointer',
    flex: 1,
    backgroundColor: 'yellow'
  }
}

export default Question;
