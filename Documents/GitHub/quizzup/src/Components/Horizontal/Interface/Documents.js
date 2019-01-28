import React, { Component } from 'react';
import './Interface.css';
import Document from './Document.js';

class Documents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      documents: props.documents,
    }
  }

  textEdited = (e) => {
    let documents = this.state.documents;
    documents[e.target.getAttribute('index')].text = e.target.value;
    this.setState({documents: documents});
  }

  state = {
    documents: null,
  }

  render() {
    return (
    <div style={styles.scrollStyle}>
      { this.state.documents.map((document, index) => {
        return <Document index={index} text={document.text} quiz={document.quiz}
                textEdited={this.textEdited.bind(this)} />;
      }) }
    </div>
    )
  }
}



const styles = {
  scrollStyle: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    height: '100%',
    top: '0%',
    backgroundColor: 'red',
    overflowY: 'scroll',
  },

}

export default Documents;
