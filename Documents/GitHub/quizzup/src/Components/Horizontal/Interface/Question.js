import React from 'react';
import './Interface.css';

const Question = (props) => {
  console.log(props, " is a question");
  return (
    <div style={styles.quizStyle}>
      <div style={styles.questionStyle}>
        { props.question }
      </div>
      <div style={styles.answersStyle}>
        { props.answers.map((answer, index) => {
          return <div index={index} onClick={props.didClick} style={styles.answerChoiceStyle}>{answer}</div>
        })}
      </div>
    </div>
  );
}

const styles = {
  quizStyle: {
    flex: 1, display: 'flex', flexDirection: 'column',
  },
  questionStyle: {
    flex: 1,
    backgroundColor: 'lightGreen',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  answersStyle: {
    flex: 5,
    backgroundColor: 'white',
  },
  answerChoiceStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    cursor: 'pointer',
    position: 'relative',
    left: '0%',
    width: '100%',
    backgroundColor: 'yellow'
  }
}

export default Question;
