import React from 'react';
import ListItem from './BeforeAfterListItem';
import './Container.css';

const BeforeAfterList = (props) => {
  return (
    <div className="beforeAfterListDiv">
      <div>
        <ListItem elem={props.listItems[0]} />
      </div>
      <div>
        <ListItem elem={props.listItems[1]} />
      </div>
      <div>
        <ListItem elem={props.listItems[2]} />
      </div>
    </div>
  )
}

export default BeforeAfterList
