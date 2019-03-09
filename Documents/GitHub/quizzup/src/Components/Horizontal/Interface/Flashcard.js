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
    <div class="flashcard">
      <div class="my-progress">
        <progress class="my-progress-bar" min="0" max={`${props.total*10}`} value={`${props.cur*10}`} step="10" aria-labelledby="my-progress-completion"></progress>
        <p id="my-progress-completion" class="js-my-progress-completion sr-only" aria-live="polite">0% complete</p>
      </div>
      <Card style={styles.card} className="ui-card-shadow">
        <div style={styles.question}>{question}</div>
        <div style={styles.choices}>
          {choices.map((choice, index) => {
            if(index == props.clickedIndex) {
              let color = "red";
              if(index === props.question.correctIndex) {
                color = "green";
              }
              return (
                <Button index={index} onClick={props.answerClick} style={{flex: 1, color: 'black', fontSize: '2vh', backgroundColor: `${color}`,}}>{choice}</Button>
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
  question: {
    flex: 1,
    position: 'absolute',
    height: '20%',
    fontSize: '1.75vh',
    top: '5%',
    width: '90%',
    left: '0%',
    margin: '5%',
    textAlign: 'center'
  },
  choices: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 5,
    position: 'absolute',
    height: '70%',
    top: '25%',
    left: '5%',
    bottom: '5%',
    width: '90%'
  },
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 15,
    marginBottom: '5%',
  },
  choice: {
    flex: 1,
    color: 'black',
    backgroundColor: 'yellow',
    fontSize: '2vh',
  }
}

export default Flashcard;
