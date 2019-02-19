import React from 'react';

const Mailing = (props) => {


  return (
    <div style={{flex: 2, display: 'flex', position: 'relative', flexDirection: 'column',justifyContent:'center', alignItems:'center', backgroundColor: 'transparent'}}>
      <div class="form-group has-error" style={{flex: 2, display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center', backgroundColor: 'transparent', margin: 0, width:"35%"}}>
        <input type="text" onChange={props.handleFormChange} placeholder="Enter your mailing address to receive updates!" class="form-control" style={{flex: 1, margin: 'auto', textAlign: 'center'}}/>
      </div>
      <div style={{flex: 1.5, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <button type="submit" onClick={props.handleSubmit} className="btn btn-primary" style={{width: '10vw', backgroundColor: 'green', margin: '1px', borderRadius: '5px', fontSize: '2vh'}}>Submit</button>
      </div>
    </div>
  );

}

export default Mailing;
