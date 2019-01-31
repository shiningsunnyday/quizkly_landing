import React from 'react';
import './Interface.css';
import Document from './Document.js';
import {Link} from 'react-router-dom';

const Main = (props) => {

  return (
    <div style={styles.main}>
      <div style={styles.quizzes}>
        <Link to="./app/quizzes">
          <div style={styles.text}>Quizzes</div>
        </Link>
      </div>
      <div style={styles.newQuiz}>
        <Link to="./new">
          <div style={styles.text}>New Quiz</div>
        </Link>
      </div>
    </div>
  );

}

const styles = {
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
    position: 'relative',
    fontSize: '10vh',
  }
}

export default Main;
