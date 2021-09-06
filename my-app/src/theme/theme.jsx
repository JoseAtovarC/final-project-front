import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import { createTheme } from '@material-ui/core/styles';
 
 export const useStyles = makeStyles((theme) => ({
  search: {
    backgroundColor: 'white',
    width: 'auto',
    padding: '2rem',
    marginLeft:'2rem',
    borderRadius: '4px',
    boxShadow:' 0px 2px 2px rgba(0, 0, 0, 0.5)',
        
      },
   header:{
    display:'flex',
    justifyContent:'space-between',
    backgroundColor:"primary"
   },
   backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },   
}));

export const theme = createTheme({
  palette: {
    primary: {
      main:"rgb(253, 94, 66)"
  
    },
    secondary: {
      main:"rgb(15, 15, 136)"
    },
}});

export const darktheme = createTheme({
  palette: {
    primary: {
      main:"#7986cb"
  
    },
    secondary: {
      main:"rgb(15, 15, 136)"
    },
  
}});

const ThemeContexts = React.createContext(theme.palette.primary)

export{ThemeContexts}