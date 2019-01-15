import React from 'react';

const Mailing = (props) => {

  return (
    <div style={{flex: 2, display: 'flex', flexDirection: 'column', justityContent: 'center', alignItems: 'stretch', backgroundColor: 'white'}}>
      <div class="form-group has-error" style={{flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'stretch', backgroundColor: 'white', margin: 0}}>
          <input type="text" value={props.value} placeholder="Enter your mailing address to receive updates!" class="form-control" style={{flex: 1, margin: 'auto', textAlign: 'center'}}/>
      </div>
      <div style={{flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <button type="submit" className="btn btn-primary" style={{width: '10vw', backgroundColor: 'green', margin: '1px', borderRadius: '5px', fontSize: '2vh'}}>Submit</button>
      </div>
    </div>
  );

}

export default Mailing;
