import React, { Component } from 'react';
import { Container1, Container2, BeforeAfterFlow, NavBar } from './Containers/Container.js';
import './App.css';
import { PageHeader, Navbar, NavDropdown, MenuItem, NavItem, Nav, Grid, Row, Col, Popover, Overlay } from 'react-bootstrap';
import MailingList from './Containers/NavBarItems/MailingList.js';
import AboutUs from './Containers/NavBarItems/AboutUs.js';
import RequestDemo from './Containers/NavBarItems/RequestDemo.js';

class App extends Component {

  getValidationState = () => {

    let msg = this.state.demoValue;
    console.log(msg);
    console.log("That was the message");
    if(msg.length > 5) {
      return 'success';
    } else {
      return 'warning';
    }
    return null;
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      demoValue: e.target.value
    });
    console.log(this.state.demoValue);
  }

  handleClick = (e) => {

    var newState = {...this.state.navBar};
    let pop = null;
    let popName = "";
    console.log("Current target is")
    console.log(newState.target);
    if(newState.target === null || newState.target.id === e.target.id) {
      console.log("Change show from", newState.show, !this.state.navBar.show);
      newState.show = !this.state.navBar.show;
    }

    if(e.target != null){
      newState.target = e.target;
      console.log("E's target", e.target);
    } else {
      newState.target = document.getElementById("mail");
      newState.show = true;
    }

    console.log(e.target);
    console.log("Found target");
    switch(newState.target.id) {
      case "demo":
        console.log("Got the demo");
        popName = "Request a demo from us";
        pop = (
          <div>
            <RequestDemo value={this.state.demoValue}/>
          </div>
        );
        break;

      case "about":
        console.log("Got the about");
        popName = "Learn more about who created the app";
        pop = (
          <div>
            <AboutUs />
          </div>
        );
        break;
      case "mail":
        console.log("Got the mail");
        popName = "Sign up for our mailing list";
        pop = (
          <div style={{flex: 1, width: '100%'}}>
            <MailingList />
          </div>
        );
      default:
        console.log("Nothing");
    }

    newState.pop = pop;
    newState.popName = popName;
    this.setState({navBar: newState})
    console.log("State was juset set");
    console.log(this.state.navBar.show);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight }, console.log(this.state.width, this.state.height));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    // binds this once constructor loads
  }


  state = {
    width: 0,
    height: 0,
    demoValue: "",
    navBar: {
      buttonTitles: [
        { title: 'Request a demo' },
        { title: 'Sign up for mailing list' },
        { title: 'About us' }
      ],
      show: false,
      target: null,
      container: this,
      pop: null,
      popName: "",
    },
    beforeAfterElements: [
      { before: 'My learning effiency is low. My memorization ability isn\'t good, so I have to spend a lot of time creating flashcards to test myself with.',
        after: 'I can automate my entire routine with Quizkly! All I need is paste in the content I have to memorize and out pops multiple choice quizzes on demand.' },
      { before: 'Testing myself is like playing cards with myself, and I don\'t have anyone who\'s always there to test my learning. Even when studying with a friend, my friend doesn\'t know my level of understanding and I may easily get distracted.',
        after: 'I now have a tester who\'s always there, knows what I know better than I do, and becomes more personalized to my understanding over time!' },
      { before: 'Organizing my studying is hard. I find it hard to keep track of my formative assessments, homework, and flashcards in different places.',
        after: 'I can store, view, and test myself with these auto-generated quizzes on demand, all in one app!' },
    ],

  }

  // <Container1 />
  // <BeforeAfterFlow elems={this.state.beforeAfterElements}/>
  // <NavBar navBar={this.state.navBar} handleClick={this.handleClick} handleChange={this.handleChange} validate={this.getValidationState}/>
  // <Container2 />
  // <div class="form-group has-error">
  //     <input type="text" value="" placeholder="Error" class="form-control" />
  // </div>

  render() {
    if(this.state.height > this.state.width) {
      return (
        <div className="App">
          <div style={{display: 'flex', flexDirection: 'column', height: this.state.height * 0.95, width: this.state.width * 0.95, marginLeft: this.state.width * 0.025, marginRight: this.state.width * 0.025, marginTop: this.state.height * 0.025, marginBottom: this.state.height * 0.025, backgroundColor: 'blue'}}>
            <div style={{flex: 2, backgroundColor: 'red'}}>
              <h5>Automatic Multiple Choice Quiz Generation with Machine Learning</h5>
            </div>
            <div style={{flex: 4, display: 'flex', flexDirection: 'row', backgroundColor: 'yellow'}}>
              <div style={{flex: 1, backgroundColor: 'purple', display: 'flex'}}>
                <h5>Quizzes</h5>
              </div>
              <div style={{flex: 4, backgroundColor: 'pink'}}>
                <h1>Quizkly</h1>
              </div>
              <div style={{flex: 1, backgroundColor: 'purple'}}>
                <h5>Quickly</h5>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flex: 15, backgroundColor: 'green'}}>
              <div style={{flex: 6, backgroundColor: 'red'}}>
              </div>
              <div style={{display: 'flex', flex: 7, flexDirection: 'column', backgroundColor: 'white'}}>
                <div style={{flex: 3}}>
                </div>
                <div style={{flex: 3}}>
                  <img style={{width: '80%', height: '20%', backgroundColor: 'gray'}} src={require('./Containers/imgs/arrow.png')} alt="..." />
                </div>
                <div style={{flex: 1}}>
                </div>
              </div>
              <div style={{flex: 6, backgroundColor: 'red'}}>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flex: 8, backgroundColor: 'gray'}}>
              <div style={{flex: 1, backgroundColor: 'purple'}}>

              </div>
              <div style={{flex: 4, backgroundColor: 'pink'}}>

              </div>
              <div style={{flex: 1, backgroundColor: 'purple'}}>

              </div>
            </div>
            <div style={{flex: 1, backgroundColor: 'black'}} />
            <div style={{flex: 2, display: 'flex', flexDirection: 'column', justityContent: 'spaceBetween', backgroundColor: 'red'}}>
              <div class="form-group has-error">
                  <input type="text" value="" placeholder="Error" class="form-control" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="App">
        <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
          <div style={{display: 'flex', flexDirection: 'column', height: this.state.height * 0.975, width: this.state.width * 0.95, marginLeft: this.state.width * 0.025, marginRight: this.state.width * 0.025, marginTop: this.state.height * 0.025, backgroundColor: 'blue'}}>
            <div style={{display: 'flex', flex: 2, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'red'}}>
              <h5 style={{fontSize: '3vh'}}>Automatic Multiple Choice Quiz Generation with Machine Learning</h5>
            </div>
            <div style={{flex: 4, display: 'flex', flexDirection: 'row', alignItems: 'stretch', backgroundColor: 'yellow'}}>
              <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white'}}>
                <h5 style={{fontSize: '5vh'}}>Quizzes</h5>
              </div>
              <div style={{display: 'flex', flex: 4, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white'}}>
                <span style={{fontSize: '15vh'}}>Quizkly</span>
              </div>
              <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white'}}>
                <h5 style={{fontSize: '5vh'}}>...quickly!</h5>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flex: 15, backgroundColor: 'green'}}>
              <div style={{display: 'flex', flex: 6, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                <img style={{width: '100%', height: '80%', backgroundColor: 'gray'}} src={require('./Containers/imgs/documents_icon.jpg')} alt="..." />
              </div>
              <div style={{display: 'flex', flex: 7, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                <img style={{width: '80%', height: '10%', backgroundColor: 'white'}} src={require('./Containers/imgs/arrow.png')} alt="..." />
              </div>
              <div style={{display: 'flex', flex: 6, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
                <img style={{width: '100%', height: '100%', backgroundColor: 'white'}} src={require('./Containers/imgs/flashcard_icon.png')} alt="..." />
              </div>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', height: 2/3 * 0.975 * this.state.height, width: this.state.width * 0.95, marginLeft: this.state.width * 0.025, marginRight: this.state.width * 0.025, marginBottom: this.state.height * 0.025, backgroundColor: 'blue'}}>
            <div style={{display: 'flex', flexDirection: 'row', flex: 7, backgroundColor: 'gray'}}>
              <div style={{flex: 1, backgroundColor: 'white'}}>

              </div>
              <div style={{flex: 4, display: 'flex', flexDirection: 'column', alignItems: 'stretch', backgroundColor: 'pink'}}>
                <iframe style={{flex: 1}} src="https://www.youtube.com/embed/AlQD5QnjfCY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div style={{flex: 1, backgroundColor: 'white'}}>

              </div>
            </div>
            <div style={{flex: 1, backgroundColor: 'white'}}>
            </div>
            <div style={{flex: 2, display: 'flex', flexDirection: 'column', justityContent: 'center', alignItems: 'stretch', backgroundColor: 'white'}}>
              <div class="form-group has-error" style={{flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'stretch', backgroundColor: 'white', margin: 0}}>
                  <input type="text" value={this.state.demoValue} placeholder="Enter your mailing address to receive updates!" class="form-control" style={{flex: 1, margin: 'auto', textAlign: 'center'}}/>
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <button type="submit" className="btn btn-primary" style={{width: '10vw', backgroundColor: 'green', margin: '1px', borderRadius: '5px', fontSize: '2vh'}}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
