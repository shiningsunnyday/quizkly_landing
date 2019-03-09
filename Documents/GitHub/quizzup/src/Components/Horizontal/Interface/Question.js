import React from 'react';
import './Interface.css';
import ContentEditable from "react-contenteditable";

const Question = (props) => {
  console.log(props.index);
  return (
    <div style={styles.quizStyle}>
      <ContentEditable style={styles.questionStyle} html={props.question} disabled={false}
        onChange={(e) => props.questionEdit(e, props.index, props.edits)}/>
      <div style={styles.answersStyle}>
        { props.answers.map((answer, index) => {
          return <ContentEditable style={styles.answerChoiceStyle} html={answer} disabled={false}
            onChange={(e) => props.answerChoiceEdit(e, props.index, index, props.edits)}/>
        })}
      </div>
    </div>
  );
}

const styles = {
  quizStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '25vh',
  },
  questionStyle: {
    flex: 1,
    backgroundColor: 'lightGreen',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    fontSize: '2vh',
    fontFamily: 'Lato',
    paddingLeft: '1%',
    paddingRight: '1%'
  },
  answersStyle: {
    flex: 3,
    backgroundColor: 'white',
    overflowY: 'scroll',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'stretch',
  },
  answerChoiceStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    cursor: 'pointer',
    fontSize: '2vh',
    fontFamily: 'Lato',
    flex: 1,
    backgroundColor: 'yellow'
  }
}

export default Question;
