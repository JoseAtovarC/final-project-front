import React, { useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';




function InfoMensajesClient(props) {
  const classes = useStyles();
  const [token, setToken] = useState(sessionStorage.getItem("token"))


  return (

    <Fragment>

      <Container className={classes.message} spacing={3}>
     
        <Grid item xs={12}>
          <Typography align="center" variant="h5">Mensaje</Typography>

          <Typography variant="h5">{props.nombre}</Typography>
          <Typography variant="h5">Ha aceptado tu reserva</Typography>
        
   
        </Grid>
      </Container>
      <Divider></Divider>

    </Fragment>

  )
}

export default InfoMensajesClient;