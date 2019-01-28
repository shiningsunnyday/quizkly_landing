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
  }


  state = {
    status: 'login',
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

  loginSubmit() {
    fetch('http://127.0.0.1:8000/user/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    }).then(
      (response) => {
        console.log(response.json)
      }
    ).catch(
      (error) => {
        console.log(error);
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
    console.log(this.state.status);
    let content = <LoginScreen
                    handleChangeUserName={this.handleChangeUserName.bind(this)}
                    handleChangePassword={this.handleChangePassword.bind(this)}
                    loginSubmit={this.loginSubmit.bind(this)}
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

    // if(this.state.didLogIn){}
    // content = <Documents documents={this.state.documents}/>



    return (
      <div style={{position: 'absolute', left: '5%', top: '15%', width: '90%', height: '80%', display: 'flex', flexDirection: 'column', alignItems: 'stretch', backgroundColor: 'white'}}>
        {content}
      </div>
    );
  }

}

export default InnerInterface;
