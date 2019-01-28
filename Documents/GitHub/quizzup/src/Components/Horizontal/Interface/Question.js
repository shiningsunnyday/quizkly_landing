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
  },
  answersStyle: {
    flex: 5,
    backgroundColor: 'white',
  },
  answerChoiceStyle: {
    flex: 1,
    cursor: 'pointer',
    position: 'relative',
    left: '10%',
    width: '80%',
    backgroundColor: 'yellow'
  }
}

export default Question;
