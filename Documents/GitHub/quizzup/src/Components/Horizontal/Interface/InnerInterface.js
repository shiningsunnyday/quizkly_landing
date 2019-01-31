import React, {Component } from 'react';
import LoginScreen from './LoginScreen.js';
import Documents from './Documents.js';
import Quiz from './Quiz.js';
import Quizzes from './Quizzes.js';
import QuizScreen from './QuizScreen.js';
import Main from './Main.js';
import '../../Components.css';

class InnerInterface extends Component {

  constructor(props) {
    super(props);
    this.state.status = props.status;
    this.state.index = props.index;
  }


  state = {
    status: 'login',
    index: 0,
    didLogIn: false,
    username: "",
    password: "",
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

  handleChangeUserName(e) {
    this.setState({username: e.target.value});
  }

  handleChangePassword(e) {
    this.setState({password: e.target.value});
  }

  loadDocuments() {

  }

  handleError(error) {
    console.log(error, " found error");
  }

  signupSubmit() {
    var csrftoken = document.getElementById('token').getAttribute('value');
    console.log(csrftoken);
    fetch('http://localhost:8000/newuser/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    }).then(
      (response) => {
        console.log("We did it!");
        console.log(response.json);
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    );

    let signupButton = document.getElementById("signupButton");
    console.log(signupButton);
    signupButton.click();
  }

  loginSubmit = (e) => {
    e.preventDefault();
    var csrftoken = document.getElementById('token').getAttribute('value');
    console.log(csrftoken);
    fetch('http://localhost:8000/user/', {
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
      }),
    }).then(
      (response) => {
        let loginButton = document.getElementById("loginButton");
        console.log(loginButton);
        loginButton.click();
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    );
  }

  didClick(e) {
    console.log(e.target.getAttribute('index'));
    console.log(this.state.correctIndex);
    if(parseInt(e.target.getAttribute('index')) == parseInt(this.state.correctIndex)) {
      console.log("You're right!")
    }
  }

  editQuiz(e) {
    console.log(e.target.getAttribute('index'));
  }

  render() {
    let content = <LoginScreen
                    handleChangeUserName={this.handleChangeUserName.bind(this)}
                    handleChangePassword={this.handleChangePassword.bind(this)}
                    loginSubmit={this.loginSubmit.bind(this)}
                    signupSubmit={this.signupSubmit.bind(this)}
                    loadDocuments={this.loadDocuments.bind(this)}/>
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
      content = <Quiz quiz={this.state.documents[this.state.index]} />
    }


    return (
      <div style={{position: 'absolute', left: '5%', top: '15%', width: '90%', height: '80%', display: 'flex', flexDirection: 'column', alignItems: 'stretch', backgroundColor: 'white'}}>
        {content}
      </div>
    );
  }

}

export default InnerInterface;
