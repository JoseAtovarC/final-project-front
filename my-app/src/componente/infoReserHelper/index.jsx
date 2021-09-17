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
          <Typography variant="h5">Reservado por :{props.nombre}</Typography>
          <Typography variant="h5">desde el día:{props.start}</Typography>
          <Typography variant="h5">hasta el día:{props.end}</Typography>
          
        </Grid>
      <Divider></Divider>

    </Fragment>

  )
}

export default InfoReservasHelper;