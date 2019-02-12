import React from 'react';
import './Interface.css';
import Document from './Document.js';
import {Link} from 'react-router-dom';

const retrieveQuizzes = async () => {
  var csrftoken = await document.getElementById('token').getAttribute('value');
  var quizzes = {};
  var docs = [];
  fetch('http://localhost:8000/questions/', {
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
      console.log(data)
      for(var i = 0; i < data.length; i++) {
        if(quizzes[data[i].quiz]) {quizzes[data[i].quiz].push(data[i].question);}
        else {quizzes[data[i].quiz] = [data[i].question]}
      }
      console.log(quizzes , "is the move");
      return fetch('http://localhost:8000/quizzes/', {
          credentials: 'include',
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
          }
      })
    }).then(function(response) {
      return response.json();
    }).then(function(qres) {
      console.log(qres);
      for(var j = 0; j < qres.length; j++) {
        docs.push({"name": qres[j].name, "text": qres[j].corpus, "questions": quizzes[qres[j].id]});
      }
      console.log(docs);
      return fetch('http://localhost:8000/corpuses/', {
          credentials: 'include',
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
          }
      })
    }).then(function(response) {
      return response.json();
    }).then(function(cres) {
      console.log(cres);
    })
}

const Main = (props) => {
  retrieveQuizzes().then(
    (res) => {
      console.log(res);
    }
  );
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
