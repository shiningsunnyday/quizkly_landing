import React from 'react';
import './Container.css';

const BeforeAfterListItem = (props) => {
  const elem = props.elem;
  console.log(elem);
  return (
    <div className="beforeAfterListItem">
      <div className="beforeAfterListItemItem1">
        <h1>{elem.before}</h1>
      </div>
      <div className="beforeAfterListItemItem">
        <img style={{width: '80%', height: '50%'}} src={require('./imgs/arrow.png')} alt="..." />
      </div>
      <div className="beforeAfterListItemItem2">
        <h1>{elem.after}</h1>
      </div>
    </div>
  );
}

export default BeforeAfterListItem
