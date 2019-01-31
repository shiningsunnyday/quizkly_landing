import React from 'react';
import InnerInterface from './Interface/InnerInterface.js'

const Interface = (props) => {

  console.log(props.index, " is index");
  return (
    <div style={{flex: 19, backgroundColor: 'black'}}>
      {props.index}
      <InnerInterface className="innerInterface" index={props.index} status={props.status}/>
    </div>
  );

}

export default Interface;
