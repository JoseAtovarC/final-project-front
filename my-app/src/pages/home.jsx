import React from 'react';
import  { useContext }  from 'react'
import { ThemeContexts } from '../theme/theme';
import Header from '../componentes/header';
import Paper from '@material-ui/core/Paper';
import { Fragment } from 'react';
import Footer from '../componentes/footer'
import '../pages/home.css';


function Home() {
    const  [modo]= useContext(ThemeContexts)
  return (
    <Fragment>
     <Paper style={{background:modo.background}}>
      <Header></Header>
      <Footer></Footer>
      </Paper>
    </Fragment>
  );
}

export default Home;