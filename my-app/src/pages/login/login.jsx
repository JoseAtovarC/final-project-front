import React from 'react';
import './login.css'
import { Fragment } from 'react';
import  LoginForm from '../../componente/loginform/loginform';
import {Link
} from "react-router-dom";
import logoblue from '../../assets/logored.png'
import { Helmet } from 'react-helmet-async';



function Login() {
    
  return (
    <Fragment>
      <Helmet>
       <title>Login</title>
    <meta
      name="description"
      content="app web para mudanzas"/>
       <meta name="title" content="Gomoving"/>
<meta name="description" content="app web para mudanzas"/>
{/* 
<!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://gomoving.herokuapp.com/"/>
<meta property="og:title" content="Gomoving"/>
<meta property="og:description" content="app web para mudanzas"/>


    </Helmet>
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