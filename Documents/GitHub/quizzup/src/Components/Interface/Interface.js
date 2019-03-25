import React from 'react';
import InnerInterface from './InnerInterface.js'
import './Interface.css';

const Interface = (props) => {
  console.log(props.state)
  if(typeof props.state !== 'undefined') {
    console.log(props.status)
    var tempState = props.state.state
    tempState.status = props.status
    return (
      <div style={{flex: 19, backgroundColor: 'black'}}>
        <InnerInterface state={tempState} index={props.index} status={props.status}/>
      </div>
    )
  } else {
    return (
      <div style={{flex: 19, backgroundColor: 'black'}}>
        <InnerInterface index={props.index} status={props.status}/>
      </div>
    );
  }
}

export default Interface;
