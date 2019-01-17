import React from 'react';
import '../Components.css';

const Title = () => {

  return (
    <div style={{flex: 4, display: 'flex', flexDirection: 'row', alignItems: 'stretch', backgroundColor: 'yellow'}}>
      <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white'}}>
        <h5 style={{fontSize: '5vh'}}>Quizzes</h5>
      </div>
      <div className="titleStyle">
        <span style={{fontSize: '15vh'}}>Quizkly</span>
      </div>
      <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white'}}>
        <h5 style={{fontSize: '5vh'}}>...quickly!</h5>
      </div>
    </div>
  );

}

export default Title;
