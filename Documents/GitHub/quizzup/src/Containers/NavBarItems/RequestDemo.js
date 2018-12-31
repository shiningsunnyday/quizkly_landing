import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const RequestDemo = (props) => {

  const validate = () => {
    if (["correct"].includes(props.value)) {
      return 'success';
    } else {
      return 'error';
    }
  }
  return (
    <div>
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={validate()}
        >
          <ControlLabel>Enter your key here for a free trial</ControlLabel>
          <FormControl
            type="text"
            value={(props.value.length === 0) ? "exampleKeyThatIsClearlyIncorrect" : props.value}
            placeholder="Enter key here"
            onChange={props.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>You will be validated and redirected to the app if the key matches one we provided.</HelpBlock>
        </FormGroup>
      </form>
    </div>
  );

}

export default RequestDemo;
