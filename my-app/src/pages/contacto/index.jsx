
import React, { Fragment } from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid, Typography,Container, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logoblue from '../../assets/logored.png'
import { useStyles } from '../../theme/theme';
import ig from '../../assets/ig.png'
import fb from '../../assets/fb.png'
import twi from '../../assets/twi.png'

import Footer from '../../componente/footer/footer';

function Contacto() {
  const [t, i18n] = useTranslation("global");
  const classes = useStyles();
  
  return (

    <Fragment>
        <Link to="/">
            <img className="logo" src={logoblue} alt="" />
          </Link>
          <Divider></Divider>
          <Grid spacing={6}  maxWidth="xs">
            <Typography  variant="h4">Contacto</Typography>
            <Grid   maxWidth="xs">
            <Typography color="secondary"> Si necesitas encontrar un ayudante cerca o tienes problemas 
            con nuestra plataforma puedes contactarnos </Typography>
            </Grid>
            <Grid   maxWidth="xs">
            <Typography color="secondary">Horario de atencion: Monday to Thursdsay: 8 a.m.
             to 1 p.m. and 2 p.m. to 5 p.m. and on Fridays 8 a.m. to 1 p.m. .</Typography>
             </Grid>
             <Grid   maxWidth="xs">
            <Typography color="secondary">Email:xxxx@ .</Typography>
           
   
            </Grid>
              </Grid>
           
     
    
       
    </Fragment>
    

  );
}

export default Contacto;