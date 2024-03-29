import React, {Component } from 'react';
import LoginScreen from './LoginScreen.js';
import { BrowserRouter, withRouter, Link, Redirect } from 'react-router-dom';
import Documents from './Documents.js';
import Quiz from './Quiz.js';
import Flashcards from './Flashcards.js';
import Quizzes from './Quizzes.js';
import QuizScreen from './QuizScreen.js';
import { Main } from './Main.js';
import New from './New.js';
import '../Components.css';
import { Button } from 'primereact/button';
import { retrieveQuizzes } from './Main.js';
import {Sidebar} from 'primereact/sidebar';
import {Topbar} from './Topbar.js';
import { getToken } from './Main.js';

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
    sidebar: {quizNo: -1, quizName: ""},
    newQuizMade: false,
    csrf: null,
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
    this.setState({newCorpusValue: e.target.value})
  }

  handleNewCorpusName(e) {
    this.setState({newCorpusName: e.target.value})
  }

  corpusSubmit(e) {
    console.log(this.state.newCorpusValue);
    e.preventDefault();
    this.setState({loading: true})
    getToken().then((csrftoken) => {
      this.setState({csrf: csrftoken})
      console.log("Got token")
      return csrftoken;
    }).then(async (csrftoken) => {
      let response = await fetch('http://localhost:8000/corpuses/', {
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
      })
      return response
    }).then(async () => {
      let updatedQuizzes = await retrieveQuizzes();
      console.log(updatedQuizzes);
      return updatedQuizzes;
    }).then(
      (updatedQuizzes) => {
        this.updateMain(true, updatedQuizzes);
      }
    )
  }

  // (response) => {
  //   console.log("Okie done")
  //   this.setState({loading: false,})
  //   if(response.status == 201) {
  //   }
  //   this.setState({
  //     status: 'main',
  //     newCorpusName: "",
  //     needRetrieve: true,
  //   })
  // }

  updateMain(bool, value) {
    console.log("Update main", bool)
    if(bool && this.state.status == 'new') {
      this.setState({status: 'quizzes', loading: false, documents: value, newQuizMade: true, needRetrieve: false})
    } else if(bool) {
      this.setState({documents: value, loading: false, needRetrieve: false})
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
      case 'Signup':
        newStatus = 'login';
        break
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
    console.log(csrftoken, " about to submit tokena");
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

  saveAfterEdit(e, edits, quiz_id) {
    getToken().then(
      (csrftoken) => {
        return fetch(`http://localhost:8000/corpuses/`, {
          credentials: 'include',
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
          },
          body: JSON.stringify({
            quiz_id: quiz_id,
            edits: edits
          }),
        })
      }
    ).then(function(response) {
      return response.json()
    }).then(function(data) {
      console.log(data)
      return data.question_set.map((ques) => {
        return ({
          question: ques.question,
          answers: ques.distractor_set.map((distractor) => {
            return distractor.text
          }),
          correctIndex: ques.correct,
        })
      })
    }).then((data) => {
      this.state.documents[quiz_id].quiz = data;
      this.setState({documents: this.state.documents});
    })

  }

  editTitle(e, newTitle) {
    getToken().then(
      (csrftoken) => {
        return fetch(`http://localhost:8000/quizzes/${newTitle.index}/`, {
          credentials: 'include',
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
          },
          body: JSON.stringify({
            newTitle: newTitle.newTitle
          }),
        })
      }
    ).then(function(response) {
      return response.json();
    }).then((data) => {
      this.state.documents[newTitle.index].title = data.name
      this.setState({documents: this.state.documents})
    })
  }

  deleteTitle(e, index) {
    getToken().then(
      (csrftoken) => {
        return fetch(`http://localhost:8000/quizzes/${index}/`, {
          credentials: 'include',
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
          },
        })
      }
    ).then((response) => {
      if(response.status == 204) {
        this.state.documents.splice(index, 1);
        this.setState({documents: this.state.documents});
      }
    })
  }

  showSideBar(index) {
    this.state.sidebar.quizNo = index;
    if(index >= 0)
      this.state.sidebar.quizName = this.state.documents[index].title
    this.setState({sidebar: this.state.sidebar})
  }

  render() {
    const backMapper = {"quizzes": "", "quiz": "quizzes", "flashcards": "quizzes", "new": "", "Signup": "login"}
    let content = null;
    switch(this.state.status) {
      case "documents":
        content = <Quizzes documents={this.state.documents}/>
        break;
      case "quizzes":
        if(this.state.newQuizMade == true) {
          let redirectState = this.state;
          redirectState.newQuizMade = false;
          return <Redirect to={{
              pathname: `../app/quizzes/quiz/${this.state.documents.length - 1}`,
              state: { state: redirectState }
            }}/>
        }
        content = <QuizScreen editQuiz={this.editQuiz.bind(this)} state={this.state}
          showSideBar={this.showSideBar.bind(this)} titles={this.state.documents.map((document) => {
          return document.title;
        })} />
        break;
      case "quiz":
        content = <Quiz quiz={this.state.documents[this.state.index]}
                    this={this}
                    index={this.state.index}
                    toFlashcards={this.toFlashcards.bind(this)}
                    saveAfterEdit={this.saveAfterEdit.bind(this)}
                    click={this.didClick.bind(this)}/>
        break;
      case "flashcards":
        let quiz = this.state.documents[this.state.index];
        content = <Flashcards quiz={quiz} />
        break;
      case "new":
        content = <New handleNewCorpusName={this.handleNewCorpusName.bind(this)}
          handleNewCorpus={this.handleNewCorpus.bind(this)}
          corpusSubmit={this.corpusSubmit.bind(this)}
          loading={this.state.loading}/>
        break;
      case "main": // handles both main and error cases
        content = <Main updateMain={this.updateMain.bind(this)} state={this.state}/>
        break;
      case "error":
        content = <Main updateMain={this.updateMain.bind(this)} state={this.state}/>
        break;
      default:
        content = <LoginScreen status={this.state.status}
                      toSignUp={() => this.setState({status: 'Signup'})}
                      handleChangeUserName={this.handleChangeUserName.bind(this)}
                      handleChangePassword={this.handleChangePassword.bind(this)}
                      handleChangeContact={this.handleChangeContact.bind(this)}
                      loginSubmit={this.loginSubmit.bind(this)}
                      signupSubmit={this.signupSubmit.bind(this)}/>
    }
    var pathname = `/app/${backMapper[this.state.status]}`
    if(this.state.status === 'Signup') {
      pathname = '/login'
    }
    console.log(this.state.status)
    switch(this.state.status) {
      case "error":
        return (
          <div>
            <div style={styles.errorMessage}>
              You have not logged in. Placeholder quizzes will be shown.
            </div>
            <div className="innerInterface">
              <div style={styles.content}>
                {content}
              </div>
            </div>
          </div>
        )
        break;
      case "login":
        return (
          <div>
            {content}
          </div>
        )
        break;
      case "Signup":
        return (
          <div>
            <div style={styles.backButton}>
              <Link style={styles.navButton} to={{
                pathname: pathname,
                state: { state: this.state }
              }}>
                <Button style={{position: 'relative', height: '100%', width: '100%'}} onClick={this.backTrack.bind(this)} icon="pi pi-arrow-left"/>
              </Link>
            </div>
            <div>
              {content}
            </div>
          </div>
        )
        break;
      case "main":
        return (
          <div className="innerInterface">
            <div style={styles.content}>
              {content}
            </div>
          </div>
        )
      default:
        return (
          <div className="innerInterface">
            <Topbar sidebar={this.state.sidebar} editTitle={this.editTitle.bind(this)}
              deleteTitle={this.deleteTitle.bind(this)}
              showSideBar={this.showSideBar.bind(this)}/>
            <div style={styles.backButton}>
              <Link style={styles.navButton} to={{
                pathname: pathname,
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
