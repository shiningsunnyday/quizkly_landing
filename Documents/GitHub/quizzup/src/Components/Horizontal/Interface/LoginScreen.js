import React from 'react';
//import './Interface.css';
import './LoginScreen.css';
import { Link } from 'react-router-dom';
import CSRFToken from './CSRFToken.js';

const LoginScreen = (props) => {
  console.log(props.status);
  if(props.status == 'Signup') {
    return (
      <div className="div-form"
         style={{display: 'flex', flexDirection: 'column',
                 position: 'absolute', width: '30%', height: '40%',
                 left: '35%', top: '15%'}}>
      <form className="login-form" onSubmit={props.signupSubmit} method="post">
        <CSRFToken />
        <input type="text" placeholder="username" onChange={props.handleChangeUserName}/>
        <input type="password" placeholder="password" onChange={props.handleChangePassword}/>
        <button>create</button>
      </form>
    </div>
    );
  }
  return (
    <div className="div-form"
         style={{display: 'flex', flexDirection: 'column',
                 position: 'absolute', width: '30%', height: '45%',
                 left: '35%', top: '15%'}}>
      <form className="login-form" onSubmit={props.loginSubmit} method="post">
        <CSRFToken />
        <input type="text" placeholder="username" onChange={props.handleChangeUserName}/>
        <input type="password" placeholder="password" onChange={props.handleChangePassword}/>
        <button>login</button>
      <p class="message">Not registered? <a href="#" onClick={props.toSignUp}>Create an account</a></p>
      </form>
    </div>
  );

}

export default LoginScreen;

