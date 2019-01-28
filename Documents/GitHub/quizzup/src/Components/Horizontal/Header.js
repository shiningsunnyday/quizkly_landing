import React from 'react';
import '../../style.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div style={{display: 'flex', flex: 2, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'red'}}>
      <div class="navbar navbar--extended">
        <div style={{display: 'flex', flex: 2, flexDirection: 'row', justifyContent: 'center', boxShadow: "1px 1px 10px grey", backgroundColor: '#FFFFFF'}}>
          <h5 id="whoWeAre" style={{position: 'absolute', color: 'black', left: '5vw', fontFamily: 'Lato', fontSize: '2.5vh'}}>About</h5>
          <h5 style={{fontSize: '3vh', color: 'black', fontFamily: 'Lato'}}>Automatic Multiple Choice Quiz Generation with Machine Learning</h5>
          <h5 style={{position: 'absolute', right: '5vw', color: 'black', fontSize: '2.5vh', fontFamily: 'Lato'}}><Link to="/app">Login</Link></h5>
        </div>
      </div>
    </div>

  );
}

export default Header;

// <div style={{display: 'flex', flex: 2, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'red', borderStyle: 'ridge', borderWidth: '5px'}}>
//   <h5 style={{fontSize: '3vh'}}>Automatic Multiple Choice Quiz Generation with Machine Learning</h5>
// </div>
