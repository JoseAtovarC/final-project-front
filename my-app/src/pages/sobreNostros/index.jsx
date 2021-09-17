
import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next';
import { Button, Grid, Typography,Container, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logoblue from '../../assets/logored.png'
import { useStyles } from '../../theme/theme';
import './index.css'

import Footer from '../../componente/footer/footer';

function Nosotros() {
  const [t, i18n] = useTranslation("global");
  const classes = useStyles();
  
  return (

    <Fragment>
        <Link to="/">
            <img className="logo" src={logoblue} alt="" />
          </Link>
          <Divider></Divider>
          <Grid className="about-container" spacing={3} maxWidth="xs">
            <Typography align="center" variant="h4">Sobre xxxxx</Typography>
            <Typography variant="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti neque ex reprehenderit maiores obcaecati illum minus perferendis omnis, voluptates consequuntur, consectetur 
            saepe error voluptatum suscipit quibusdam assumenda cupiditate magnam.</Typography>
            <Typography variant="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorem deleniti neque ex reprehenderit maiores obcaecati illum
              minus perferendis omnis, voluptates consequuntur, consectetur 
            saepe error voluptatum suscipit quibusdam assumenda cupiditate magnam.</Typography>
            <Typography variant="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorem deleniti neque ex reprehenderit maiores obcaecati illum
              minus perferendis omnis, voluptates consequuntur, consectetur 
            saepe error voluptatum suscipit quibusdam assumenda cupiditate magnam.</Typography>
   
            <Typography variant="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorem deleniti neque ex reprehenderit maiores obcaecati illum
              minus perferendis omnis</Typography>
              </Grid>
           
     
    
       <Footer></Footer> 
    </Fragment>
    

  );
}

export default Nosotros;