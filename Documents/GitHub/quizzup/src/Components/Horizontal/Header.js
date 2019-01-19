import React from 'react';
import '../../style.css';

const Header = () => {

  return (
    <div style={{display: 'flex', flex: 2, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white'}}>
      <div class="navbar navbar--extended">
        <div style={{display: 'flex', flex: 2, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'yellow'}}>
          <h5 style={{position: 'absolute', left: '5vw', fontSize: '2.5vh'}}><a href="http://www.google.com">About</a></h5>
          <h5 style={{fontSize: '3vh' }}>Automatic Multiple Choice Quiz Generation with Machine Learning</h5>
          <h5 style={{position: 'absolute', right: '5vw', fontSize: '2.5vh'}}><a href="http://www.google.com">Contact</a></h5>
        </div>
      </div>
    </div>

  );

}

export default Header;

// <div style={{display: 'flex', flex: 2, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'red', borderStyle: 'ridge', borderWidth: '5px'}}>
//   <h5 style={{fontSize: '3vh'}}>Automatic Multiple Choice Quiz Generation with Machine Learning</h5>
// </div>
