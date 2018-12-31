import React, { Component } from 'react';
import { Container1, Container2, BeforeAfterFlow, NavBar } from './Containers/Container.js';
import './App.css';

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
    console.log("Current target is")
    console.log(newState.target);
    if(newState.target === null || newState.target.id === e.target.id) {
      console.log("Change show")
      newState.show = !this.state.navBar.show;
    }

    newState.target = e.target;
    console.log(e.target);
    this.setState({navBar: newState});
    console.log(this.state.navBar.show);
  };

  componentDidMount() {
    console.log("Let's click");
    document.getElementById("mail").click();
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
    },
    beforeAfterElements: [
      { before: 'Manually entering key/value pairs of knowledge into Quizlet or onto flashcards, time consuming', after: 'Instant' },
      { before: 'Mentally keep track of understanding, uncertain how to address weak points of knowledge and what they are, so ends up overstudying', after: 'Personalized' },
      { before: 'Inflexibility of using different platforms to test oneself, annoying', after: 'All basic services in one' },
    ],

  }

  render() {
    return (
      <div className="App">
        <Container1 />
        <BeforeAfterFlow elems={this.state.beforeAfterElements}/>
        <NavBar navBar={this.state.navBar} handleClick={this.handleClick} handleChange={this.handleChange} validate={this.getValidationState} state={this.state}/>
        <Container2 />
      </div>
    );
  }
}

export default App;
