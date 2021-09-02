import React from 'react';
import  { useContext }  from 'react'
import { ThemeContexts } from '../theme/theme';
import Paper from '@material-ui/core/Paper';
import { Fragment } from 'react';
import '../pages/home.css';
import  SignupForm from '../componentes/signupform';
import {Link
} from "react-router-dom";

function Signup() {
    const  [modo]= useContext(ThemeContexts)
  return (
    <Fragment>
     <Paper style={{background:modo.background}}>
     <Link to="/">
               <p>💩</p>
               </Link>
      < SignupForm></ SignupForm>
      </Paper>
    </Fragment>
  );
}

export default Signup;