import React from 'react';

// <div class="form-group has-error" style={{flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'stretch', backgroundColor: 'white', margin: 0}}>
//     <input type="text" value={props.value} placeholder="Enter your mailing address to receive updates!" class="form-control" style={{flex: 1, margin: 'auto', textAlign: 'center'}}/>
// </div>
// <div style={{flex: 1, display: 'flex', textAlign: 'center', flexDirection: 'row', justifyContent: 'center'}}>
//   <button type="submit" onClick={() => console.log("HI")} className="btn btn-primary" style={{width: '10vw', display: 'inlineBlock', backgroundColor: 'green', borderRadius: '5px', fontSize: '2vw'}}>Submit</button>
// </div>
const Mailing = (props) => {

  return (
    <div style={{flex: 3, display: 'flex', flexDirection: 'column', justityContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <input type="text" value={props.value} placeholder="Enter your mailing address to receive updates!" class="form-control" style={{flex: 1, width: '95vw', margin: 'auto', textAlign: 'center'}}/>
      <button type="submit" onClick={props.handleSubmit} className="btn btn-primary" style={{width: '10vw', flex: 1, backgroundColor: 'green', borderRadius: '5px', fontSize: '2vw'}}>Submit</button>
    </div>
  );

}

export default Mailing;
