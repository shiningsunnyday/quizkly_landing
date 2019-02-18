import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

const Mailing = (props) => {

  var content = <div style={{color: 'black'}}>Submit</div>
  var color = 'yellow'
  console.log(props.showSuccess)
  console.log(props.checked)
  if(props.showSuccess == 1) {
    content = <div style={{color: 'black'}}>Got it!</div>
    color = 'lightgreen'
  } else if(props.showSuccess == -1) {
    content = <div style={{color: 'black'}}>Uh oh</div>
    color = 'red'
  }
  return (
    <div style={{flex: 2, display: 'flex', position: 'relative', flexDirection: 'column', justityContent: 'center', alignItems: 'stretch', backgroundColor: 'transparent'}}>
      <div class="form-group has-error" style={styles.formGroup}>
        <input type="text" value={props.value} onChange={props.handleFormChange} placeholder="Enter your mailing address to receive updates!" class="form-control" style={styles.email}/>
        <div style={{backgroundColor: 'transparent'}}>
          <input type="checkbox" id="checkbox" onChange={props.checkedChange} checked={props.checked}/>
          <label for="checkbox">Check if you are at all interested in being contacted to join the Beta testing group.</label>
        </div>
      </div>
      <div style={{flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <button type="submit" onClick={props.handleSubmit} className="btn btn-primary" style={{width: '10vw', backgroundColor: color, margin: '1px', borderRadius: '5px', fontSize: '2vh'}}>
          {content}
        </button>
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
  formGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    margin: 0
  }
}

export default Mailing;
