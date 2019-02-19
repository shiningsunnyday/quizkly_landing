import React from 'react';
import './Interface.css';
import './Main.css'
import Document from './Document.js';
import {Link} from 'react-router-dom';

const retrieveQuizzes = async () => {
  console.log("Curses")
  var csrftoken = await document.getElementById('token').getAttribute('value');
  return fetch('http://localhost:8000/corpuses/', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      }
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      return data.map((corpus) => {
        return ({
          title: corpus.quiz.name,
          text: corpus.content,
          quiz: corpus.quiz.question_set.map((question) => {
            return ({
              question: question.question,
              answers: question.distractor_set.map((distractor) => {
                return distractor.text
              }),
              correctIndex: question.correct,
            })
          })
        })
      })
    })
}

const Main = (props) => {
  console.log(props.state.needRetrieve, "need retrieve");
  if(props.state.needRetrieve) {
    retrieveQuizzes().then(
      (res) => {
        console.log("Res", res)
        props.updateMain(true, res);
      }
    ).catch(
      (error) => {
        console.log(error)
        props.updateMain(false)
      }
    )
  }
  return (
    <div className="main">
      <div style={styles.quizzes}>
        <div style={styles.text}>
          <Link style={styles.link} to={{
            pathname: "/app/quizzes",
            state: { state: props.state},
          }}>Quizzes</Link>
        </div>
      </div>
      <div style={styles.newQuiz}>
        <div style={styles.text}>
          <Link style={styles.link} to={{
            pathname: "/app/new",
            state: { state: props.state },
          }}>New Quiz</Link>
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
