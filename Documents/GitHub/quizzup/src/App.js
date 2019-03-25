import React, { Component } from 'react';
import './App.css';
import './style.css';

import Header from './Components/Landing/Header.js';
import Mailing from './Components/Landing/Mailing.js';
import Title from './Components/Landing/Title.js';
import Video from './Components/Landing/Video.js';
import Visual from './Components/Landing/Visual.js';

class App extends Component {

  handleFormChange = (e) => {
    this.setState({
      demoValue: e.target.value,
    });
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
    this.state = { width: 0, height: 0, checked: false, };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // binds this once constructor loads
  }

  checkedChange(e) {
    this.setState({checked: e.target.checked})
  }

  state = {
    checked: false,
    showSuccess: 0,
    about: false,
    hero: "hero__mask",
    width: 0,
    height: 0,
    demoValue: "",
  }

  handleSubmit(e) {
    fetch('http://shiningsunnyday.pythonanywhere.com/contacts/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.demoValue,
        beta: this.state.checked,
      }),
    }).then(
      (response) => {
        console.log("Status", response.status);
        if(response.status == 201) {
          this.setState({demoValue: "", showSuccess: 1});
        } else {
          this.setState({demoValue: "", showSuccess: -1});
        }
      }
    )
  }

  render() {
    let classname = (this.state.about) ? "hero__mask_": "hero__mask";
    let vert = this.state.height > this.state.width
    let upperPageHeight = (vert) ? 1 / ( 1 + 2/3 * (1/0.975)) : 1;
    let lowerPageHeight = (vert) ? (2/3 * 0.975) / ( 1 + 2/3 * (1/0.975)) : 2/3 * 0.975;
    let maskHeight = (vert) ? 1 : ( 1 + 2/3 * (1/0.975));
    let headerHeight = (vert) ? '5vh': '10vh';
    return (
      <div className="App">
        <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
          <div class={classname} style={{
            height: this.state.height * maskHeight }}></div>
          <div class="hero__overlay hero__overlay--gradient" style={{height: this.state.height * maskHeight}}></div>
          <div style={{display: 'flex', flexDirection: 'column', height: this.state.height * upperPageHeight, width: this.state.width * 0.95, marginLeft: this.state.width * 0.025, marginRight: this.state.width * 0.025,}}>
            <Header height={headerHeight} about={this.state.about} style={{zIndex: 5,}}/>
            <Title style={{zIndex: 5,}}/>
            <Visual style={{zIndex: 5,}}/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', height: this.state.height * lowerPageHeight, width: this.state.width * 0.95, marginLeft: this.state.width * 0.025, marginRight: this.state.width * 0.025, marginBottom: this.state.height * 0.025, }}>
            <Video style={{zIndex: 5}}/>
            <div style={{flex: 1, }}>
            </div>
            <Mailing style={{zIndex: 5}} self={this} showSuccess={this.state.showSuccess} value={this.state.demoValue} handleFormChange={this.handleFormChange.bind(this)} handleSubmit={this.handleSubmit} checkedChange={this.checkedChange.bind(this)} checked={this.state.checked}/>
          </div>
        </div>
      </div>
      );
    }

}

export default App;
