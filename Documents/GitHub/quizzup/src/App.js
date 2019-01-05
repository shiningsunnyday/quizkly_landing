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

    if(e.target != null){
      newState.target = e.target;
    } else {
      newState.target = document.getElementById("mail");
    }
    console.log(e.target);
    console.log(this.state.navBar.show);
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
        <NavBar navBar={this.state.navBar} handleClick={this.handleClick} handleChange={this.handleChange} validate={this.getValidationState} state={this.state}/>
        <Container2 />
      </div>
    );
  }
}

export default App;
