import React, { Component } from 'react';
import { Container1, Container2, BeforeAfterFlow, NavBar } from './Containers/Container.js';
import './App.css';
import './style.css';
import { PageHeader, Navbar, NavDropdown, MenuItem, NavItem, Nav, Grid, Row, Col, Popover, Overlay } from 'react-bootstrap';
import MailingList from './Containers/NavBarItems/MailingList.js';
import AboutUs from './Containers/NavBarItems/AboutUs.js';
import RequestDemo from './Containers/NavBarItems/RequestDemo.js';

import Header from './Components/Horizontal/Header.js';
import Mailing from './Components/Horizontal/Mailing.js';
import Title from './Components/Horizontal/Title.js';
import Video from './Components/Horizontal/Video.js';
import Visual from './Components/Horizontal/Visual.js';

import HeaderV from './Components/Vertical/Header.js';
import MailingV from './Components/Vertical/Mailing.js';
import TitleV from './Components/Vertical/Title.js';
import VideoV from './Components/Vertical/Video.js';
import VisualV from './Components/Vertical/Visual.js';

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

  handleFormChange = (e) => {
    this.setState({
      demoValue: e.target.value,
    });
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

    var whoWeAre = document.getElementById("whoWeAre");
    whoWeAre.style.cursor = 'pointer';
    whoWeAre.onclick = function() {
      this.setState({about: !this.state.about});
    }.bind(this)

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
    this.handleSubmit = this.handleSubmit.bind(this);
    // binds this once constructor loads
  }

  handleSubmit(e) {

    console.log(this.state.demoValue);
    fetch('http://185.201.11.149:8080/contacts/', {
      method: 'POST',

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.demoValue,
      }),
    }).then(this.setState({demoValue: ""}, console.log(this.state.demoValue)));

  }


  state = {
    about: false,
    hero: "hero__mask",
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
            <HeaderV />
            <TitleV />
            <VisualV />
            <VideoV />
            <div style={{flex: 1, backgroundColor: 'white'}}>
            </div>
            <MailingV value={this.state.demoValue} handleSubmit={this.handleSubmit}/>
          </div>
        </div>
      );
    }

    let classname = "hero__mask";
    if(this.state.about) {
      classname = "hero__mask_";
    }

    return (
      <div className="App">
        <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
          <div class={classname} style={{
            height: this.state.height * ( 1 + 2/3 * (1/0.975))}}></div>
          <div class="hero__overlay hero__overlay--gradient" style={{height: this.state.height * ( 1 + 2/3 * (1/0.975))}}></div>
          <div style={{display: 'flex', flexDirection: 'column', height: this.state.height, width: this.state.width * 0.95, marginLeft: this.state.width * 0.025, marginRight: this.state.width * 0.025,}}>
            <Header about={this.state.about} style={{zIndex: 5,}}/>
            <Title style={{zIndex: 5,}}/>
            <Visual style={{zIndex: 5,}}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', height: 2/3 * 0.975 * this.state.height, width: this.state.width * 0.95, marginLeft: this.state.width * 0.025, marginRight: this.state.width * 0.025, marginBottom: this.state.height * 0.025, }}>
            <Video style={{zIndex: 5}}/>
            <div style={{flex: 1, }}>
            </div>
            <Mailing style={{zIndex: 5}} self={this} value={this.state.demoValue} handleFormChange={this.handleFormChange.bind(this)} handleSubmit={this.handleSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
