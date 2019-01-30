import React from 'react';
import './Interface.css';
import Document from './Document.js';

const Main = (props) => {

  return (
    <div style={styles.scrollStyle}>
      { this.state.documents.map((document, index) => {
        return <Document index={index} text={document.text} quiz={document.quiz}
                textEdited={props.textEdited.bind(this)} />;
      }) }
      { this.state.documents.map((document, index) => {
        return <Document index={index} text={document.text} quiz={document.quiz}
                textEdited={props.textEdited.bind(this)} />;
      }) }
    </div>
  );

}

const styles = {
  scrollStyle: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    height: '100%',
    top: '0%',
    backgroundColor: 'yellow',
    overflowY: 'scroll',
  },
}

export default Main;
