import React, { Component } from 'react';
import Question from './Question.js';
import './Interface.css';

const Quiz = (props) => {

  return (
    <div className="quiz">
      {props.quiz.quiz.map((question, index) => {
        return <Question className="question" question={question.question}
                  answers={question.answers}
                  correctIndex={question.correctIndex}
                  click={props.click} />
      })}
    </div>
  )

}


export default Quiz;
