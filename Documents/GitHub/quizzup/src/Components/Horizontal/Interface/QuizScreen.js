import React, { Component } from 'react';
import Question from './Question.js';
import { Link } from 'react-router-dom';
import './Interface.css';

const QuizScreen = (props) => {

  return (
    props.titles.map((title, index) => {
      return <div style={styles.title}>
        <Link to={`./quizzes/quiz/${index}`}>
          <div style={{fontSize: '5vh'}}>{title}</div>
        </Link>
        </div>;
    })
  )
}

const styles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    margin: '1%'
  },
}

export default QuizScreen;
