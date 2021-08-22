import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <div className="login_header">
        <h1>DenyDesigns</h1>
      </div>
      <div className="login_subHeader">
        <h2>WHOLESALE LOGIN</h2>
      </div>
      <div className="login_content">
        <div className="login_contentEmail">
          <h3>EMAIL</h3>
          <input type="email" className="input" placeholder="you@your-company.com" />
        </div>
        <div className="login_contentPassword">
          <h3>PASSWORD</h3>
          <input type="password" className="input" />
          <div className="login_contentForgetPassword">
            <h4>FORGOT PASSWORD?</h4>
          </div>
        </div>
        <div className="login_contentSubmit">
          <button className="button">LET'S GO</button>
        </div>
      </div>
      <div className="login_newUser">
        <h3>Not a Wholesale Partner?</h3>
        <div className="login_newUserSection">
          <Link to="/">
            <button className="button" id="button">KEEP BROWSING</button>
          </Link>
          <Link to="/register">
            <button className="button" id="button">APPLY HERE</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
