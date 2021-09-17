import React, { useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';


function InfoMensajes(props) {
  const [token, setToken] = useState(sessionStorage.getItem("token"))


  const classes = useStyles(props);

  const aceptMessage = (e) => {
    
    const res={
      response:e.target.innerHTML,
      nombreClient:props.nombre
    }
    fetch('http://localhost:4000/booking/client', {
      method: 'PATCH',
       body: JSON.stringify(res),
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))

  };

  return (

    <Fragment>

      <Container className={classes.message} spacing={3}>

        <Grid item xs={12}>
          <Typography align="center" variant="h5">Mensaje</Typography>

          <Typography variant="h5">{props.nombre}</Typography>
          <Typography variant="h5">quiere reservar contigo:</Typography>
          <Divider></Divider>
          <Typography variant="h5"> Desde:  {props.start}</Typography>
          <Divider></Divider>
          <Typography variant="h5">Hasta:  {props.end}</Typography>
          <Button color="secondary" id="Accepted" onClick={aceptMessage} variant="contained">Aceptar
          </Button>
          <Button color="secondary" id="Canceled" onClick={aceptMessage} variant="contained">Cancelar
          </Button>
        </Grid>
      </Container>
      <Divider></Divider>

    </Fragment>

  )
}

export default InfoMensajes;