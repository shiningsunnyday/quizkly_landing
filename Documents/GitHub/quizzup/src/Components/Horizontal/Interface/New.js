import React, { Component } from 'react';
import Question from './Question.js';
import './Interface.css';
import CSRFToken from './CSRFToken.js';
import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';

const override = `css
    display: flex;
    justify-content: start;
    flex: 1;
    border-color: red;
    position: relative;
    width: 50%;
    height: 50%;
    left: 33%;
    top: 20%;
`;

const New = (props) => {
  console.log(props.loading)
  return (
    <div style={styles.new}>
      <form style={styles.form} onSubmit={props.corpusSubmit} method="post">
        <CSRFToken />
        <div style={styles.instructions}>Enter the name of your quiz here</div>
        <label style={styles.nameInput}>
          <input name="name" style={styles.textarea} value={props.newCorpusName} onChange={props.handleNewCorpusName} />
        </label>
        <div style={styles.instructions}>Enter the content of your corpus</div>
        <div style={styles.corpusAndLoader}>
          <PacmanLoader
            css={override}
            sizeUnit={'px'}
            size={100}
            color={'#123abc'}
            loading={props.loading}
          />
          {!props.loading && (
            <label style={styles.corpusInput}>
              <textarea name="corpus" style={styles.textarea} value={props.newCorpusValue} onChange={props.handleNewCorpus} />
            </label>
          )}
          {props.loading && (
            <div style={styles.message}>Feeding your corpus into our generator...</div>
          )}
        </div>
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
    margin: 0,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 0,
  },
  instructions: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameInput: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'black',
  },
  corpusAndLoader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flexStart',
    flex: 10,
    padding: 0,
  },
  corpusInput: {
    padding: 0,
    position: 'relative',
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: 'black',
  },
  message: {
    position: 'relative',
    height: '40%',
    fontSize: '5vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textarea: {
    position: 'relative',
    height: '100%',
    width: '100%',
    borderRadius: 0,
  },
  submitButton: {
    flex: 1,
    position: 'relative',
    height: '100%',
    width: '100%',
    margin: 0,
    borderTop: 0,
  }
}


export default New;
