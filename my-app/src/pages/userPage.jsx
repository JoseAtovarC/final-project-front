import React from 'react';
import  { useContext }  from 'react'
import { ThemeContexts } from '../theme/theme';
import Paper from '@material-ui/core/Paper';


function UserPage() {
    const  [modo]= useContext(ThemeContexts)
  
  return (
   
     <Paper style={{background:modo.background}}>
     <p>Hola usuario</p>
      </Paper>
   
  );
}

export default UserPage;