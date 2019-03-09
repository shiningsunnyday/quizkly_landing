import React from 'react';
import '../../style.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

  return (
    <div style={{display: 'flex', flex: 2, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'transparent'}}>
      <div className="navbar navbar--extended" style={{height: props.height}}>
        <div style={{position: 'relative', display: 'flex', width: '100%', height: '100%', flex: 2, flexDirection: 'row', justifyContent: 'center', boxShadow: "1px 1px 10px grey", backgroundColor: 'white'}}>
          <h5 id="whoWeAre" style={{position: 'absolute', color: 'black', left: '5vw', bottom: '1vh', fontFamily: 'Lato', fontSize: '2vw'}}>About</h5>
          <h5 style={{position: 'absolute', fontSize: '2vw', color: 'black', bottom: '0.5vh', fontFamily: 'Lato'}}>Automatic Multiple Choice Quiz Generation with Machine Learning</h5>
          <h5 style={{position: 'absolute', right: '5vw', bottom: '1vh', color: 'black', fontSize: '2vw', fontFamily: 'Lato'}}><Link style={{color: 'black'}} to="/login">Login</Link></h5>
        </div>
      </div>
    </div>

  );
}

export default Header;

// <div style={{display: 'flex', flex: 2, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'red', borderStyle: 'ridge', borderWidth: '5px'}}>
//   <h5 style={{fontSize: '3vh'}}>Automatic Multiple Choice Quiz Generation with Machine Learning</h5>
// </div>
