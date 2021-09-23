import React from 'react';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';
import check from '../../assets/checkIcon.png'




function InfoMensajesClient(props) {
  const classes = useStyles();
  const [token, setToken] = useState(sessionStorage.getItem("token"))
  const [confirm, setConfirm] = useState("flex")

  const aceptMessage = (e) => {
    setConfirm("none")

    const res = {
      response: "confirm",
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

      <Grid justifyContent="space-evenly"  style={{display:confirm}} className={classes.message} container>
     
        <Grid item xs={4}>
        <Typography variant="h5">{props.nombre}</Typography>
          </Grid>
          <Grid item xs={4}>
         
          <Typography style={{color:"black"}}>Ha aceptado tu reserva</Typography>  
        </Grid>
        <Grid item xs={4}>
          <Button onClick={aceptMessage}>
          <img style={{width:"3rem"}} src={check} alt="" />
          </Button>
          </Grid>
      </Grid>
      <Divider></Divider>

    </Fragment>

  )
}

export default InfoMensajesClient;