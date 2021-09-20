import React from 'react';
import { Container } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './index.css'
import EuroIcon from '@material-ui/icons/Euro';
import Avatar from '@material-ui/core/Avatar';
import perfil from '../../assets/pruebaPerfil.jpg'



function HelpersCards(props) {
  
  const classes = useStyles();
  
  
  return (

    <Fragment>
         
        <Container className={classes.helpercard}  spacing={3}>
           
        

          <Grid justifyContent="space-around"  item xs={12}>

          <Grid    item xs={6}>
          <Avatar alt="" src={perfil} />
          </Grid> 

          <Grid    item xs={12}>
           <Typography variant="h5">{props.nombre}</Typography> 
          </Grid>   

          <Grid   item xs={12}>
           <LocationOnIcon></LocationOnIcon>
           <Typography color="secondary">{props.codigo},{props.ciudad}
           <span  > 
           <Typography align="center" variant="h5">
             {props.tarifa} <EuroIcon></EuroIcon> hr.</Typography>
           </span>
           </Typography>
           </Grid> 

           
           
          </Grid>   
        </Container>
        <Divider></Divider> 
        
    </Fragment>

  )
}

export default HelpersCards;