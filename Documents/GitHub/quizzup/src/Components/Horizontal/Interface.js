import React from 'react';
import InnerInterface from './Interface/InnerInterface.js'

const Interface = (props) => {

  console.log(props.status, "is props status");
  return (
    <div style={{flex: 19, backgroundColor: 'black'}}>
      <InnerInterface className="innerInterface" status={props.status}/>
    </div>
  );

}

export default Interface;
