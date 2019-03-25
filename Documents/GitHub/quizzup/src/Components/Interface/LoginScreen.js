import React from 'react';
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
           left: '35%', top: '30%'}}>
       <form className="login-form" onSubmit={props.signupSubmit} method="post">
          <CSRFToken />
          <input type="text" placeholder="username" onChange={props.handleChangeUserName}/>
          <input type="password" placeholder="password" onChange={props.handleChangePassword}/>
          <input type="email" placeholder="email" onChange={props.handleChangeContact}/>
          <button>create</button>
        </form>
      </div>
    );
  }
  return (
    <div className="div-form"
         style={{display: 'flex', flexDirection: 'column',
                 position: 'absolute', width: '30%', height: '40%',
                 left: '35%', top: '30%'}}>
      <form className="login-form" onSubmit={props.loginSubmit} method="post">
        <CSRFToken />
        <input type="text" placeholder="username" onChange={props.handleChangeUserName}/>
        <input type="password" placeholder="password" onChange={props.handleChangePassword}/>
        <input type="email" placeholder="email" onChange={props.handleChangeContact}/>
        <button>login</button>
      <p class="message">Not registered? <a href="#" onClick={props.toSignUp}>Create an account</a></p>
      </form>
    </div>
  );

}

// method="post"
// <button type="submit" onSubmit={props.loginSubmit} id="loginButton" className="loginButton"><Link to="/app">Login</Link></button>

export default LoginScreen;


// <label className="loginLabel">
//   <h3>Username</h3>
//   <input name="username" style={{position: 'relative', height: '50%', top: '50%'}} type="text" value={props.value} onChange={props.handleChangeUserName} />
// </label>
// <label className="loginLabel">
//   <h3>Password</h3>
//   <input name="password" type="text" value={props.value} onChange={props.handleChangePassword} />
// </label>
// <button className="loginButton" onClick={props.loginSubmit}><Link id="loginButton" to="/app"></Link></button>
