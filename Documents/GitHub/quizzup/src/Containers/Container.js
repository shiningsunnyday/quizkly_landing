import React from 'react';
import BeforeAfterList from './BeforeAfterList.js';
import './Container.css';
import { PageHeader, Navbar, NavDropdown, MenuItem, NavItem, Nav, Grid, Row, Col, Popover, Overlay } from 'react-bootstrap';
import MailingList from './NavBarItems/MailingList.js';
import AboutUs from './NavBarItems/AboutUs.js';
import RequestDemo from './NavBarItems/RequestDemo.js';

const Container1 = () => {
  return (
    <PageHeader className="pageHeader">
      Quizkly
    </PageHeader>
  );
}

const BeforeAfterFlow = (props) => {

  return (
    <BeforeAfterList listItems={props.elems}/>
  );
}

const Container2 = () => {

  return (
    <PageHeader className="pageHeader">
      Quizkly
    </PageHeader>
  );
}

const NavBar = (props) => {
  var titles = props.navBar.buttonTitles;
  let pop = props.navBar.pop;
  let popName = props.popName;
  console.log("Loading NavBar, current target is", props.navBar.target);

  let buttonStyle = {
      width: '100%',
      backgroundColor: 'orange',
      borderStyle: "solid",
      borderWidth: 2,
  };

  return (
    <div className="navBar">
      <div style={{height: 50, display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: 1}}>
          <button id="demo" style={buttonStyle} onClick={props.handleClick} type="button" class="btn btn-default">{titles[0].title}</button>
        </div>
        <div style={{flex: 1}}>
          <button id="mail" style={buttonStyle} onClick={props.handleClick} type="button" class="btn btn-default">{titles[1].title}</button>
        </div>
        <div style={{flex: 1}}>
          <button id="about" style={buttonStyle} onClick={props.handleClick} type="button" class="btn btn-default">{titles[2].title}</button>
        </div>
      </div>
      <Overlay style={{width: '95%', flex: 1}} show={props.navBar.show} target={props.navBar.target} placement="bottom" container={props.navBar.container} containerPadding={20}>
        <Popover id="popover-contained" title={popName}>
          { pop }
        </Popover>
      </Overlay>
    </div>

  );
}

//pop

// const styles = (style) => {
//   switch(style) {
//     case 'navBar':
//       return { width: '80%' };
//     default:
//       return null;
//   }
// }

export {
  Container1,
  Container2,
  BeforeAfterFlow,
  NavBar
}
