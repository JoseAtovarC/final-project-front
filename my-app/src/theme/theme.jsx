import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import { createTheme } from '@material-ui/core/styles';


 
 export const useStyles = makeStyles((theme) => ({
  search: {
    backgroundColor:"white",
    maxHeight:"100vh",
    padding: '2rem',
    borderRadius: '4px',
    boxShadow:' 0px 2px 2px rgba(0, 0, 0, 0.5)',    
      },
   header:{
    display:'flex',
    justifyContent:'space-between',
   },

   drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  drawerPaper: {
    width:240,
    // backgroundColor:"black"
  },
   backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'black',
  },
  card: {
    maxWidth: 300,
    backgroundColor:"white",
    boxShadow:' 0px 2px 2px rgba(0, 0, 0, 1)',  
    marginBottom:'2rem'

  },
  contact: {
   height:'auto',
   marginTop:'2rem',
    marginBottom:'2rem',
    boxShadow:' 0px 2px 2px rgba(0, 0, 0, 1)',
    maxHeight:"100vh",
    padding: '2rem', 
    borderRadius: '4px',
  },
  chip: {
    margin: theme.spacing(0.5),
  },

  helpercard:{
    marginLeft:"1rem",
    marginBottom:"1rem",
    cursor:"pointer",
    padding:"1rem",
    
  },
  helperEdit:{
    backgroundColor:"white",
    maxHeight:"50rem",
    padding: '2rem',
    width:'50rem',
    borderRadius: '4px',
    boxShadow:' 0px 2px 2px rgba(0, 0, 0, 0.5)', 
  },
  helperDetails:{
    padding:"2rem",
    width:"auto",
   
  },
  message:{
    backgroundColor:"white",
    display:"flex",
    justifyContent:"center",
    maxHeight:"auto",
    padding: '2rem',
    width:'30rem',
    borderRadius: '4px',
    boxShadow:' 0px 2px 2px rgba(0, 0, 0, 0.5)', 
  },
 
  
}));

export const theme = createTheme({
  typography: {
    fontFamily:'roboto , sans-serif',
    letterSpacing: "5px",
    fontSize: "1.25rem",
    fontWeight:"500",
    
    h2: {
        fontSize: "2rem",
        fontWeight:"bold",
    },
    h3: {
      fontSize: "1.6rem",
      fontWeight:"bold",
  },
  h4: {
    fontSize: "2rem",
    fontWeight:"bold",
},
h5: {
  fontSize: "1.3rem",
  fontWeight:"bold",
  color:"#1C1C1E"
},
  h6: {
    fontSize: "1rem",
    fontWeight:"bold",
    color:"white"
},

button:{
  fontSize: "1rem",
    fontWeight:"bold",
    color:"#FA925B"
}
   
    },
  palette: {
    
  background:{
    paper:"#151948",
    
  },
  primary: { main: "#FA925B",
dark:"black" },
  secondary:{main:"#151948"},
  info:{main:"#1C1C1E"},
  
 
} });

export const darktheme = createTheme({
  typography: {
    fontFamily:'roboto , sans-serif',
    letterSpacing: "5px",
    fontSize: "1.25rem",
    fontWeight:"500",
    h2: {
        fontSize: "2rem",
        fontWeight:"bold",
    },
    h3: {
      fontSize: "1.6rem",
      fontWeight:"bold",
  },
  
  h4: {
    fontSize: "2rem",
    fontWeight:"bold",
},
h5: {
  fontSize: "1.6rem",
  fontWeight:"bold",
  color:"#1C1C1E"
},
  h6: {
    fontSize: "1rem",
    fontWeight:"bold",
    color:"white"
},
button:{
  fontSize: "1rem",
    fontWeight:"bold",
    color:"white"
    
}
   
},
  
  palette: {
 
  background:{
    paper:"#37343B"
  },
  primary: { main:"#1C1C1E"},
  secondary:{main:"#E95644" },
  info:{main:"#1C1C1E"}
} });

export const ThemeContexts = React.createContext([{},()=>{}]);