import React from 'react';
import '../Components.css';

const Title = () => {

  return (
    <div style={{flex: 4, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'transparent'}}>
        <h5 style={{fontSize: '5vh'}}>Quizzes</h5>
      </div>
      <div className="titleStyle">
        <span style={{fontSize: '10vh'}}>Quizkly</span>
      </div>
      <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'transparent'}}>
        <h5 style={{fontSize: '5vh'}}>...Quickly</h5>
      </div>
    </div>
  );

}

export default Title;
