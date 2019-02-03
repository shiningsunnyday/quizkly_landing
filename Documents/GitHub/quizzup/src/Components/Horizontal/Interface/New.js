import React, { Component } from 'react';
import Question from './Question.js';
import './Interface.css';
import CSRFToken from './CSRFToken.js';

const New = (props) => {

  return (
    <div style={styles.new}>
      <div style={styles.instructions}>Enter your corpus here!</div>
      <form style={styles.form} onSubmit={props.corpusSubmit} method="post">
        <CSRFToken />
        <label style={styles.label}>
          <textarea name="corpus" style={styles.textarea} value={props.newCorpusValue} onChange={props.handleNewCorpus} />
        </label>
        <button style={styles.submitButton} type="submit">Submit</button>
      </form>
    </div>
  )

}

const styles = {
  new: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  form: {
    flex: 15,
    display: 'flex',
    position: 'relative',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  instructions: {
    flex: 1,
  },
  label: {
    height: '80%',
    width: '100%',
    backgroundColor: 'blue',
    position: 'relative',
  },
  textarea: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  submitButton: {
    flex: 1,
  }
}


export default New;
