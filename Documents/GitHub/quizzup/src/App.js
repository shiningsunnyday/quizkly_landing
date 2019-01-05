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
    console.log("Let's click");
    console.log(document.getElementById("mail"))
  }


  state = {
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

  render() {
    return (
      <div className="App">
        <Container1 />
        <BeforeAfterFlow elems={this.state.beforeAfterElements}/>
        <NavBar navBar={this.state.navBar} handleClick={this.handleClick} handleChange={this.handleChange} validate={this.getValidationState}/>
        <Container2 />
      </div>
    );
  }
}

export default App;
