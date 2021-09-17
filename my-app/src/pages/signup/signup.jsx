import React, { useState } from 'react';
import './signup.css'
import logoblue from '../../assets/logored.png'
import { Fragment } from 'react';
import  SignupForm from '../../componente/signupform/signupform';
import {Link
} from "react-router-dom";


function Signup() {
   
  return (
    <Fragment>
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