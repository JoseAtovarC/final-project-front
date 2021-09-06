import React from 'react';
import  { useContext }  from 'react'
import { ThemeContexts } from '../theme/theme';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';


function UserPage() {
    const  [modo]= useContext(ThemeContexts)
  
  return (
   
     <Paper style={{background:modo.background}}>
     <p>Hola usuario</p>
<Badge 
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          color="primary"
          badgeContent=" "
          variant="dot"
         >
            
     <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </Badge>
      </Paper>
   
  );
}

export default UserPage;