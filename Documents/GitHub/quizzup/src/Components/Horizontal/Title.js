import React from 'react';
import '../Components.css';

const Title = () => {

  return (
    <div style={{flex: 4, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'transparent'}}>
        <h5 style={{fontSize: '3vw', fontFamily: 'Lato'}}>Quizzes</h5>
      </div>
      <div className="titleStyle">
        <span className="SFfont" style={{fontSize: '6vw', fontFamily: 'Lato'}}>Quizkly</span>
      </div>
      <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'transparent'}}>
        <h5 style={{fontSize: '3vw', fontFamily: 'Lato'}}>...Quickly</h5>
      </div>
    </div>
  );

}

export default Title;
