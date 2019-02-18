import React, { Component } from 'react';
import Question from './Question.js';
import { Link } from 'react-router-dom';
import './Interface.css';

const QuizScreen = (props) => {

  return (
    props.titles.map((title, index) => {
      return (
        <div style={styles.title}>
          <Link to={{
            pathname: `./quizzes/quiz/${index}`,
            state: {state: props.state},
          }}>
            <div style={{fontSize: '5vh'}}>{title}</div>
          </Link>
        </div>
      );
    })
  )
}

const styles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
    height: '10vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    margin: '1%'
  },
}

export default QuizScreen;
