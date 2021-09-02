import React from 'react';
import  { useContext }  from 'react'
import { ThemeContexts } from '../theme/theme';
import Paper from '@material-ui/core/Paper';
import { Fragment } from 'react';
import '../pages/home.css';
import  LoginForm from '../componentes/loginform';
import {Link
} from "react-router-dom";

function Login() {
    const  [modo]= useContext(ThemeContexts)
  return (
    <Fragment>
     <Paper style={{background:modo.background}}>
     <Link to="/">
               <p>💩</p>
               </Link>
      < LoginForm></ LoginForm>
      </Paper>
    </Fragment>
  );
}

export default Login;