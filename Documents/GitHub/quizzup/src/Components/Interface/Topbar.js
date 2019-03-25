import React from 'react';
import {Sidebar} from 'primereact/sidebar';
import ContentEditable from "react-contenteditable";
import CSRFToken from './CSRFToken.js';

const Topbar = (props) => {
  let newTitle = {index: props.sidebar.quizNo, newTitle: props.sidebar.quizName}
  return (
    <Sidebar visible={(props.sidebar.quizNo >= 0)} position="top" baseZIndex={1000000}
    onHide={(e) => props.showSideBar(-1)} style={styles.sidebar}>
      <CSRFToken />
      <div style={styles.menuItem}>
        <div style={{display: 'flex', flex: 1, justifyContent: 'center'}}>Edit Title</div>
        <ContentEditable style={styles.editTitle} html={props.sidebar.quizName}
          onChange={(e) => {
            newTitle.newTitle = e.target.value;
          }} />
      </div>
      <div onClick={(e) => props.editTitle(e, newTitle)} style={styles.menuItem}>
        Save
      </div>
      <div onClick={(e) => props.deleteTitle(e, props.sidebar.quizNo)} style={styles.menuItem}>
        Delete
      </div>
    </Sidebar>
  )

}

// <ContentEditable html={props.sidebar.quizName} disabled={false} style={styles.quizName}/>


const styles = {
  sidebar: {
    display: 'flex',
    justifyContent: 'spaceAround',
    alignItems: 'center',
    flexDirection: 'row',
  },
  menuTitle: {
    flex: 5,
    fontWeight: 'normal',
  },
  editTitle: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
  },
  menuItem: {
    flex: 1,
    marginLeft: '10px',
    marginRight: '10px',
    backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    fontSize: '200%',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  quizName: {
    flex: 3,
    fontWeight: 'normal',
    fontSize: '300%',
  }
}

export {
  Topbar
}
