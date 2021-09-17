import React, { useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';




function InfoReservasClient(props) {
  const [token, setToken] = useState(sessionStorage.getItem("token"))
 
  const classes = useStyles();
  
  const aceptMessage = (e) => {
    
    const res={
      response:e.target.innerHTML,
      nombreHelper:props.nombre
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
        <Grid >
         
          <Typography variant="h5">Reserva hecha a :{props.nombre}</Typography>
          <Typography variant="h5">desde el día:{props.start}</Typography>
          <Typography variant="h5">hasta el día:{props.end}</Typography>
          <Button onClick={aceptMessage}>Terminar</Button>
        </Grid>
      <Divider></Divider>

    </Fragment>

  )
}

export default InfoReservasClient;