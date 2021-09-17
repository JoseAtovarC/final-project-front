import React from 'react';
import './login.css'
import { Fragment } from 'react';
import  LoginForm from '../../componente/loginform/loginform';
import {Link
} from "react-router-dom";
import logoblue from '../../assets/logored.png'

function Login() {
    
  return (
    <Fragment>
     <div className="login-container">
     <Link to="/">
     <img className="logo" src={logoblue} alt="" /> 
               </Link>

       <div className="login">
    
      < LoginForm></ LoginForm>
      </div>
      </div>
    </Fragment>
  );
}

export default Login;