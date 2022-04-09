import React, { useState } from 'react';
import './signup.css'
import logoblue from '../../assets/logored.png'
import { Fragment } from 'react';
import  SignupForm from '../../componente/signupform/signupform';
import {Link
} from "react-router-dom";
import { Helmet } from 'react-helmet-async';



function Signup() {
   
  return (
    <Fragment>
      <Helmet>
       <title>Registro</title>
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
     <div className="signup-container">

     <Link to="/">
              <img className="logo" src={logoblue} alt="" /> 
               </Link>

     <div className="signup">

      < SignupForm></ SignupForm>:
  
              
      </div>   
      </div> 
    </Fragment>
  );
}

export default Signup;