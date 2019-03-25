import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

const Mailing = (props) => {

  var color = 'yellow'
  var content = "Submit"
  console.log(props.showSuccess)
  console.log(props.checked)
  if(props.showSuccess == 1) {
    color = 'lightgreen'
    content = "Got it!"
  } else if(props.showSuccess == -1) {
    color = 'red'
    content = "Uh oh"
  }
  var content =
  <div style={styles.content}>
    <button type="submit" onClick={props.handleSubmit} style={{display: 'flex', flex: 1, width: '10vw', backgroundColor: color, margin: '1px', justifyContent: 'center', alignItems: 'center', textAlign: 'center', borderRadius: '5px', color: 'black'}}>
      <div style={{position: 'absolute', fontSize: '1.5vw', width: '10vw', backgroundColor: 'transparent'}}>{content}</div>
    </button>
  </div>

  return (
    <div style={{flex: 2, display: 'flex', position: 'relative', flexDirection: 'column', justityContent: 'center', alignItems: 'stretch', backgroundColor: 'transparent'}}>
      <div class="form-group has-error" style={styles.formGroup}>
        <input type="text" style={{flex: 1}} value={props.value} onChange={props.handleFormChange} placeholder="Enter your mailing address to receive updates!" class="form-control" style={styles.email}/>
        <div style={{flex: 1, backgroundColor: 'transparent'}}>
          <input type="checkbox" id="checkbox" onChange={props.checkedChange} checked={props.checked}/>
          <label for="checkbox">Check if you are at all interested in being contacted to join the Beta testing group.</label>
        </div>
      </div>
      <div style={{flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        {content}
      </div>
    </div>
  );

}

const styles = {
  email: {
    flex: 1,
    margin: 'auto',
    textAlign: 'center'
  },
  content: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  formGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    margin: 0,
    marginBottom: '5vh',
  }
}

export default Mailing;
