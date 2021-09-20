import React, { useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';



function InfoReservasHelper(props) {

 
  const classes = useStyles();
  

  return (

    <Fragment>
      

        <Grid >
          <Typography style={{color:"black",marginBottom:"1rem"}}>Reservado por :{props.nombre}</Typography>
          <Typography style={{color:"black"}}>desde el día:{props.start}</Typography>
          <Typography style={{color:"black"}}>hasta el día:{props.end}</Typography>
          
        </Grid>
      <Divider></Divider>

    </Fragment>

  )
}

export default InfoReservasHelper;