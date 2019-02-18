import React, {Component } from 'react';
import LoginScreen from './LoginScreen.js';
import { BrowserRouter, withRouter, Link } from 'react-router-dom';
import Documents from './Documents.js';
import Quiz from './Quiz.js';
import Flashcards from './Flashcards.js';
import Quizzes from './Quizzes.js';
import QuizScreen from './QuizScreen.js';
import Main from './Main.js';
import New from './New.js';
import '../../Components.css';
import { Button } from 'primereact/button';

class InnerInterface extends Component {

  constructor(props) {
    super(props);
    console.log(props.status);
    if(typeof props.state !== 'undefined') {
      this.state = props.state;
      console.log(props.state);
      console.log("this.state", this.state);
    }
    this.state.status = props.status;
    this.state.index = props.index;
  }


  state = {
    browser: null,
    loading: false,
    needRetrieve: true,
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
    this.setState({loading: true})
    var csrftoken = document.getElementById('token').getAttribute('value');
    console.log(csrftoken, " token submit lol");
    console.log(csrftoken, " token submit lol");
    console.log(csrftoken, " token submit lol");
    console.log(csrftoken, " token submit lol");
    console.log(csrftoken, " token submit lol");
    console.log(this.state.newCorpusValue);
    console.log("Generating corpus now")
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
        console.log("Okie done")
        this.setState({loading: false,})
        if(response.status == 201) {
          this.setState({
            status: 'main',
            newCorpusName: "",
          })
        }
      }
    )
  }

  updateMain(bool, value) {
    console.log("Update main", bool)
    if(bool) {
      this.setState({documents: value, needRetrieve: false,})
    } else {
      this.setState({status: 'error', needRetrieve: false})
    }
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
    console.log(csrftoken, " token submit");
    console.log(csrftoken, " token submit");
    console.log(csrftoken, " token submit");
    console.log(csrftoken, " token submit");
    console.log(csrftoken);
    console.log(csrftoken, " about to submit token");
    console.log(csrftoken);
    console.log(csrftoken);
    console.log(csrftoken, " about to submit token");
    console.log(csrftoken);
    console.log(csrftoken);
    console.log(csrftoken, " about to submit token");
    console.log(csrftoken);
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

  loginSubmit(e) {
    e.preventDefault();
    var csrftoken = document.getElementById('token').getAttribute('value');
    console.log(csrftoken);
    console.log(csrftoken, " about to submit token");
    console.log(csrftoken);
    console.log(csrftoken);
    console.log(csrftoken, " about to submit token");
    console.log(csrftoken);
    console.log(csrftoken);
    console.log(csrftoken, " about to submit token");
    console.log(csrftoken);
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
            didLogIn: true,
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

  backTrack() {
    var newStatus = "main";
    switch(this.state.status) {
      case 'flashcards':
        newStatus = 'quiz';
        break;
      case 'quiz':
        newStatus = 'quizzes';
        break;
      case 'new':
        newStatus = 'main';
        break;
      default:
        break;
    }
    this.setState({status: newStatus})
  }

  editQuiz(e) {
    console.log(e.target.getAttribute('index'));
  }

  getQuizzes() {
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
    console.log("Current status ", this.state.status)
    const backMapper = {"quizzes": "", "quiz": "quizzes", "flashcards": "quiz", "new": ""}
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
      console.log(this.state)
      content = <QuizScreen editQuiz={this.editQuiz.bind(this)} state={this.state} titles={this.state.documents.map((document) => {
        return document.title;
      })} />
    }
    if(this.state.status == 'main' || this.state.status == 'error') {
      console.log("Documents", this.state.documents)
      console.log(this.state)
      content = <Main updateMain={this.updateMain.bind(this)} state={this.state}/>
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
      console.log("is loading ", this.state.loading)
      content = <New handleNewCorpusName={this.handleNewCorpusName.bind(this)}
        handleNewCorpus={this.handleNewCorpus.bind(this)}
        corpusSubmit={this.corpusSubmit.bind(this)}
        loading={this.state.loading}/>
    }

    if(this.state.status === 'error') {
      return (
        <div>
          <div style={styles.errorMessage}>
            You have not logged in. Placeholder quizzes will be shown.
          </div>
          <div style={styles.content}>
            {content}
          </div>
        </div>
      )
    }

    if(this.state.status === 'main' || this.state.status === 'login' || this.state.status === 'Login') {
      return (
        <div style={styles.content}>
          {content}
        </div>
      )
    }

    return (
      <div className="innerInterface">
        <div style={styles.backButton}>
          <Link style={styles.navButton} to={{
            pathname: `/app/${backMapper[this.state.status]}`,
            state: { state: this.state }
          }}>
            <Button style={{position: 'relative', height: '100%', width: '100%'}} onClick={this.backTrack.bind(this)} icon="pi pi-arrow-left"/>
          </Link>
        </div>
        <div style={styles.content}>
          {content}
        </div>
      </div>
    );
  }

}

// <Link style={styles.navButton} to={{
//   pathname: `/app/${backMapper[this.state.status]}`,
//   state: { state: this.state},
// }}>

const styles = {
  content: {
    position: 'absolute',
    left: '5%',
    top: '15%',
    width: '90%',
    height: '80%',
    flexDirection: 'column',
    alignItems: 'stretch',
    overflowY: 'scroll',
    backgroundColor: 'yellow',
    boxShadow: '10px 10px 10px grey',
    borderRadius: '30px',
  },
  backButton: {
    position: 'absolute',
    left: '0%',
    top: '52.5%',
    width: '4%',
    height: '5%',
  },
  errorMessage: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.5vh',
    fontFamily: 'Lato',
    backgroundColor: 'transparent',
    width: '100%',
    top: '10%',
    height: '5%',
  },
  navButton: {
    position: 'relative',
    height: '80%',
    top: '10%',
    width: '80%',
    left: '10%',
    backgroundColor: 'transparent',
  },
}

export default withRouter(InnerInterface);
