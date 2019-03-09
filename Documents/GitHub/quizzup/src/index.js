import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import App from './App';
import Quizkly from './Quizkly';
import Background from './Routes/Background';
import * as serviceWorker from './serviceWorker';
import Interface from './Components/Horizontal/Interface';
import Quiz from './Components/Horizontal/Interface/Quiz';
import New from './Components/Horizontal/Interface/New';

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
    <Interface status='login' browser={routing}/>
  </div>
)

const Documents = () => (
  <div>
    <Background />
    <Interface status='documents' browser={routing}/>
  </div>
)

const Mainpage = ({location}) => {
  sta = "error"
  console.log(location.state)
  if(typeof location.state !== 'undefined' && location.state.state.didLogIn) {
    var sta = "main"
  } else {
    var sta = "error"
  }
  return (
    <div>
      <Background />
      <Interface status={sta} state={location.state} browser={routing}/>
    </div>
  )
}

const QuizzesInterface = ({location}) => {
  return(
    <div>
      <Background />
      <Interface index={0} state={location.state} status="quizzes" browser={routing}/>
    </div>
  )
}

const QuizInterface = ({match, location}) => {
  console.log(match.params.id)
  console.log(location)
  return(
    <div>
      <Background />
      <Interface status='quiz' state={location.state} index={match.params.id} browser={routing}/>
    </div>
  )
}

const NewInterface = ({location}) => {
  console.log(location.state)
  return(
    <div>
      <Background />
      <Interface status='new' state={location.state} browser={routing}/>
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
      <Route exact path="/app/new" component={NewInterface} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
