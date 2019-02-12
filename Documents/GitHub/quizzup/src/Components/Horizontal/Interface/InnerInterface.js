import React, {Component } from 'react';
import LoginScreen from './LoginScreen.js';
import { BrowserRouter, withRouter } from 'react-router-dom';
import Documents from './Documents.js';
import Quiz from './Quiz.js';
import Flashcards from './Flashcards.js';
import Quizzes from './Quizzes.js';
import QuizScreen from './QuizScreen.js';
import Main from './Main.js';
import New from './New.js';
import '../../Components.css';

class InnerInterface extends Component {

  constructor(props) {
    super(props);
    this.state.status = props.status;
    this.state.index = props.index;
  }

  state = {
    browser: null,
    status: 'Login',
    didLogIn: false,
    index: 0,
    username: "",
    password: "",
    contact: "",
    newCorpusName: "",
    newCorpusValue: "",
    documents: [
      {
        title: "Obama Quiz",
        text: "Barack Obama was the fourty-fourth president of the United States.",
        quiz: [
          {
            question: "Barack Obama was the ____ president of the United States.",
            answers: [
              "fourty-fifth", "fourty-fourth", "fourty-ninth", "fourty", "fourty-two",
            ],
            correctIndex: 1,
          },
          {
            question: "Mitt Romney was the ____ president of the United States.",
            answers: [
              "fourty-fifth", "fourty-fourth", "fourty-ninth", "fourty", "fourty-two",
            ],
            correctIndex: 2,
          }
        ]
      },
      {
        title: "Obama Again",
        text: "Barack Obama was the fourty-two president of the United States.",
        quiz: [{
          question: "Barack Obama was the ____ president of the United States.",
          answers: [
            "fourty-fifth", "fourty-fourth", "fourty-ninth", "fourty", "fourty-two",
          ],
          correctIndex: 4,
        }]
      },
      {
        title: "Another Obama",
        text: "Barack Obama was the fourty-ninth president of the United States.",
        quiz: [{
          question: "Barack Obama was the ____ president of the United States.",
          answers: [
            "fourty-fifth", "fourty-fourth", "fourty-ninth", "fourty", "fourty-two",
          ],
          correctIndex: 2,
        }]
      },
    ],
  }

  handleNewCorpus(e) {
    console.log(e, e.target.value)
    this.setState({newCorpusValue: e.target.value})
  }

  handleNewCorpusName(e) {
    console.log(e, e.target.value)
    this.setState({newCorpusName: e.target.value})
  }


  corpusSubmit(e) {
    console.log(this.state.newCorpusValue);
    e.preventDefault();
    var csrftoken = document.getElementById('token').getAttribute('value');
    console.log(csrftoken, " about to submit token");
    console.log(csrftoken, " about to submit token");
    console.log(csrftoken, " token");
    console.log(this.state.newCorpusValue);
    fetch('http://localhost:8000/corpuses/', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
        name: this.state.newCorpusName,
        content: this.state.newCorpusValue,
      }),
    }).then(
      (response) => {
        if(response.status == 201) {
          this.setState({
            status: 'main',
          })
        }
      }
    )
  }

  handleChangeUserName(e) {
    this.setState({username: e.target.value});
  }

  handleChangePassword(e) {
    this.setState({password: e.target.value});
  }

  handleChangeContact(e) {
    this.setState({contact: e.target.value});
  }

  handleError(error) {
    console.log(error, " found error");
  }

  toFlashcards(e) {
    this.setState({status: 'flashcards'});
  }

  signupSubmit(e) {
    e.preventDefault();
    var csrftoken = document.getElementById('token').getAttribute('value');
    console.log(csrftoken);
    console.log(csrftoken, " about to submit token");
    fetch('http://localhost:8000/signup/', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email: this.state.contact,
      }),
    }).then(
      (response) => {
        this.setState({
          status: 'Login',
        })
      }
    )
  }

  loginSubmit = (e) => {
    e.preventDefault();
    var csrftoken = document.getElementById('token').getAttribute('value');
    console.log(csrftoken);
    console.log(csrftoken, " about to submit token");
    fetch('http://localhost:8000/login/', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email: this.state.contact,
      }),
    }).then(
      (response) => {
        if(response.status == 200) {
          this.setState({
            status: 'main',
          })
        } else if(response.status == 403) {
          this.setState({
            status: 'Wrong credentials, try again!',
          })
        }
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    );
  }

  didClick(e) {
    console.log(e.target.getAttribute('index'));
    if(parseInt(e.target.getAttribute('index')) == e.target.getAttribute('correctIndex')) {
      console.log("You're right!")
    }
  }

  editQuiz(e) {
    console.log(e.target.getAttribute('index'));
  }

  async getQuizzes() {
    var csrftoken = document.getElementById('token').getAttribute('value');
    console.log(csrftoken);
    console.log(csrftoken, " about to submit token");
    fetch('http://localhost:8000/quizzes/', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
      }),
    }).then(
      (response) => {
        console.log(response)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    );
  }

  render() {
    let content = <LoginScreen status={this.state.status}
                    toSignUp={() => this.setState({status: 'Signup'})}
                    handleChangeUserName={this.handleChangeUserName.bind(this)}
                    handleChangePassword={this.handleChangePassword.bind(this)}
                    handleChangeContact={this.handleChangeContact.bind(this)}
                    loginSubmit={this.loginSubmit.bind(this)}
                    signupSubmit={this.signupSubmit.bind(this)}/>

    if(this.state.status == 'documents') {
      content = <Quizzes documents={this.state.documents}/>
    }
    if(this.state.status == 'quizzes') {
      content = <QuizScreen editQuiz={this.editQuiz.bind(this)} titles={this.state.documents.map((document) => {
        return document.title;
      })} />
    }
    if(this.state.status == 'main') {
      content = <Main documents={this.state.documents} />
    }
    if(this.state.status == 'quiz') {
      console.log(this.state.documents[this.state.index], " is documents at index");
      content = <Quiz quiz={this.state.documents[this.state.index]} toFlashcards={this.toFlashcards.bind(this)} click={this.didClick.bind(this)}/>
    }

    if(this.state.status == 'flashcards') {
      let quiz = this.state.documents[this.state.index];
      content = <Flashcards quiz={quiz} />
    }

    if(this.state.status == 'new') {
      content = <New handleNewCorpusName={this.handleNewCorpusName.bind(this)} handleNewCorpus={this.handleNewCorpus.bind(this)} corpusSubmit={this.corpusSubmit.bind(this)}/>
    }


    return (
      <div style={{position: 'absolute', left: '5%', top: '15%', width: '90%', height: '80%', display: 'flex', flexDirection: 'column', alignItems: 'stretch', backgroundColor: 'yellow'}}>
        {content}
      </div>
    );
  }

}

export default withRouter(InnerInterface);
