import React from 'react';
import './Interface.css';
import Document from './Document.js';
import {Link} from 'react-router-dom';

const Main = (props) => {

  return (
    <div style={styles.main}>
      <div style={styles.quizzes}>
      <div style={styles.text}>
        <Link style={styles.link} to="./app/quizzes">Quizzes</Link>
      </div>
      </div>
      <div style={styles.newQuiz}>
        <div style={styles.text}>
          <Link style={styles.link} to="./app/new">New Quiz</Link>
        </div>
      </div>
    </div>
  );

}

const styles = {
  link: {
    color: 'black',
    display: 'flex',
    justifyContent: 'center'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    flex: 1,
  },
  quizzes: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  newQuiz: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    flex: 1,
    color: 'black',
    position: 'relative',
    fontSize: '10vh',
  }
}

export default Main;
