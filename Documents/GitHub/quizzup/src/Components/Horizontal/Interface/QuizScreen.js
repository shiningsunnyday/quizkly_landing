import React, { Component } from 'react';
import Question from './Question.js';
import './Interface.css';

const QuizScreen = (props) => {

  console.log(props.quiz, "is the quiz in the props");
  return (
    props.titles.map((title, index) => {
      return <div index={index} onClick={props.editQuiz}>{title}</div>;
    })
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

export default QuizScreen;
