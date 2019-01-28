import React, { Component } from 'react';
import Question from './Question.js';
import './Interface.css';

const Quiz = (props) => {

  console.log(props.quiz, "is the quiz in the props");
  return (
    <div style={styles.quizStyle}>
      {props.quiz.map((question, index) => {
        return <Question question={question.question} answers={question.answers} correctIndex={question.correctIndex} />
      })}
    </div>
  )

}

const styles = {
  quizStyle: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    top: '0%',
    margin: '1%',
    backgroundColor: 'red',
    overflowY: 'scroll',
  },
}

export default Quiz;
