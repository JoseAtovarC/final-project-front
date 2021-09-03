import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import { createTheme } from '@material-ui/core/styles';
 
 export const useStyles = makeStyles((theme) => ({
    root: {
    },
   header:{
    display:'flex',
    justifyContent:'space-between',
   },
   backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },   
}));

export const theme = createTheme({
  root:{
    background: "#eeeeee",
  }
});

export const darktheme = createTheme({
  root:{
    background: "#222222"

    }
  
});

const ThemeContexts = React.createContext(theme.root)

export{ThemeContexts}