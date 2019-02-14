import React, {Component} from 'react';
import './Interface.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Flashcard = (props) => {
  console.log("FLASHCARD PROPS ", props)
  let question = props.question.question;
  let choices = props.question.answers;
  console.log(question, "question choices", choices);
  return (
    <div style={styles.flashcard}>
      <Card style={styles.card} className="ui-card-shadow">
        <div>{question}</div>
        <div style={styles.choices}>
          {choices.map((choice, index) => {
            if(index == props.clickedIndex) {
              let color = "red";
              if(index === props.question.correctIndex) {
                color = "green";
              }
              return (
                <Button index={index} onClick={props.answerClick} style={{flex: 1, color: 'black', backgroundColor: `${color}`,}}>{choice}</Button>
              )
            }
            return (
              <Button index={index} onClick={props.answerClick} style={styles.choice}>{choice}</Button>
            )
          })}
        </div>
      </Card>
    </div>
  );
}

const styles = {
  flashcard: {
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  question: {
    flex: 1,
  },
  choices: {
    display: 'flex',
    flexDirection: 'column'
  },
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    top: '10%',
    left: '25%',
    width: '50%'
  },
  choice: {
    flex: 1,
    color: 'black',
    backgroundColor: 'yellow',
  }
}

export default Flashcard;
