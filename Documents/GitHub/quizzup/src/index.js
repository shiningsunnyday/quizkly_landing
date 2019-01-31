import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Quizkly from './Quizkly';
import Background from './Routes/Background';
import * as serviceWorker from './serviceWorker';
import Interface from './Components/Horizontal/Interface';
import Quiz from './Components/Horizontal/Interface/Quiz';

// const Application = () => (
//   <div>
//     <Route path="/" component={Background} />
//     <Route path="/login" component={Background} />
//     <Route path="/documents" component={Quizkly} />
//     <Route path="/new" component={Quizkly} />
//   </div>
// )

const Login = () => (
  <div>
    <Background />
    <Interface status='login' />
  </div>
)

const Documents = () => (
  <div>
    <Background />
    <Interface status='documents' />
  </div>
)

const Mainpage = () => (
  <div>
    <Background />
    <Interface status='main' />
  </div>
)

const QuizzesInterface = ({match}) => {
  return(
    <div>
      <Background />
      <Interface status='quizzes' index={0}/>
    </div>
  )
}

const QuizInterface = ({match}) => {
  console.log(match.params.id)
  return(
    <div>
      <Background />
      <Interface status='quiz' index={match.params.id}/>
    </div>
  )
}


      // <Route exact path="/app" component={Mainpage} />
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/app" component={Mainpage} />
      <Route exact path="/app/documents" component={Documents} />
      <Route exact path="/app/quizzes" component={QuizzesInterface} />
      <Route exact path="/app/quizzes/quiz/:id" component={QuizInterface} />
      <Route exact path="/app/new" component={Documents} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
