import React from 'react';
import InnerInterface from './Interface/InnerInterface.js'

const Interface = (props) => {
  if(typeof props.state !== 'undefined') {
    console.log(props.status)
    var tempState = props.state.state
    tempState.status = props.status
    return (
      <div style={{flex: 19, backgroundColor: 'black'}}>
        {props.index}
        <InnerInterface className="innerInterface" state={tempState} index={props.index} status={props.status}/>
      </div>
    )
  }
  return (
    <div style={{flex: 19, backgroundColor: 'black', overflowY: 'scroll'}}>
      {props.index}
      <InnerInterface className="innerInterface" index={props.index} status={props.status}/>
    </div>
  );

}

export default Interface;
