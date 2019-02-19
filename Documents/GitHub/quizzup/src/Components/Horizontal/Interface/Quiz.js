import React, { Component } from 'react';
import Question from './Question.js';
import './Interface.css';


const Quiz = (props) => {
  return (
    <div className="quiz">
      <div style={styles.options}>
        <div onClick={props.toFlashcards} style={styles.toFlashcards}>Test myself with this</div>
        <div style={styles.toFlashcards}>Save after edit</div>
      </div>
      <div className="quiz-questions">
        {props.quiz.quiz.map((question, index) => {
          return <Question className="question" question={question.question}
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
