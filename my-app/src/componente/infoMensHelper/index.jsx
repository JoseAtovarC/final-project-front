import React from 'react';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';


function InfoMensajes(props) {
  const [token, setToken] = useState(sessionStorage.getItem("token"))
  const [confirm, setConfirm] = useState("flex")


  const classes = useStyles(props);

  const aceptMessage = (e) => {
    setConfirm("none")

    const res = {
      response: e.target.innerHTML,
      nombreClient: props.nombre,
      startDate:props.start,
      endDate:props.end
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

      <Grid justifyContent="space-around"
      style={{display:confirm}}  className={classes.message} container>

        <Grid item xs={4}>
          <Typography variant="h5">{props.nombre}</Typography>
          <Typography style={{color:"black"}}>Quiere reservar contigo:</Typography>
        </Grid>

        <Grid item xs={4}>
          

          <Typography style={{color:"black"}}> Desde:  {props.start}</Typography>

          <Typography style={{color:"black"}}>Hasta:  {props.end}</Typography>
        </Grid>

        <Grid container justifyContent="space-around" item xs={4}>

          <Grid>
            <Button color="secondary" id="Accepted" onClick={aceptMessage} variant="contained">Aceptar
            </Button>
          </Grid>

          <Grid>
            <Button id="Canceled" onClick={aceptMessage} variant="contained">Cancelar
            </Button>
          </Grid>

        </Grid>


      </Grid>

      <Divider></Divider>

    </Fragment >

  )
}

export default InfoMensajes;