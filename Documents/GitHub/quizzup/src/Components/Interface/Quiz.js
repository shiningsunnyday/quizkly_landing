import React, { Component } from 'react';
import Question from './Question.js';
import CSRFToken from './CSRFToken.js';
import './Interface.css';

const questionEdit = (e, index, edits) => {
  edits.push([index, -1, e.target.value]);
}

const answerChoiceEdit = (e, quesIndex, answerIndex, edits) => {
  edits.push([quesIndex, answerIndex, e.target.value]);
}

const Quiz = (props) => {
  let edits = [];
  return (
    <div className="quiz">
      <div style={styles.options}>
        <div onClick={props.toFlashcards} style={styles.toFlashcards}>Test myself with this</div>
        <div onClick={(e) => props.saveAfterEdit(e, edits, props.index)} style={styles.toFlashcards}>Save after edit</div>
      </div>
      <CSRFToken />
      <div className="quiz-questions">
        {props.quiz.quiz.map((question, index) => {
          return <Question className="question" question={question.question}
                    index={index}
                    questionEdit={questionEdit}
                    answerChoiceEdit={answerChoiceEdit}
                    edits={edits}
                    answers={question.answers}
                    correctIndex={question.correctIndex}
                    click={props.click} />
        })}
      </div>
    </div>
  )

}

const styles = {
  options: {
    position: 'relative',
    height: '7.5vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  toFlashcards: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    fontFamily: 'Lato',
    fontSize: '2.5vh',
    cursor: 'pointer',
    height: '10%',
    width: '100%',
    top: '0',
  }
}


export default Quiz;
