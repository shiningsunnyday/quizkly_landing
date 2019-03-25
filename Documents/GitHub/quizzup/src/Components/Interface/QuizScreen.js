import React, { Component } from 'react';
import Question from './Question.js';
import { Link } from 'react-router-dom';
import { FaEllipsisH } from 'react-icons/fa';
import {Sidebar} from 'primereact/sidebar';
import './Interface.css';

const QuizScreen = (props) => {

  return (
    props.titles.map((title, index) => {
      return (
        <div style={styles.title}>
          <div style={styles.quizTabItem1}></div>
          <Link style={{flex: 25}} to={{
            pathname: `./quizzes/quiz/${index}`,
            state: {state: props.state},
          }}>
            <div style={styles.quizTab}>{title}</div>
          </Link>
          <div style={styles.quizTabItem2}><FaEllipsisH onClick={() => props.showSideBar(index)}/></div>
        </div>
      );
    })
  )
}

const styles = {
  title: {
    display: 'flex',
    flexDirection: 'row',
    height: '10vh',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    margin: '1%'
  },
  quizTab: {
    fontSize: '5vh',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quizTabItem1: {
    flex: 1,
    display: 'flex',
  },
  quizTabItem2: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  }
}


export default QuizScreen;
