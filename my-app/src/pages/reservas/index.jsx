
import React, { useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';
import { useReservasFecth } from '../../hooks/hooks';
import InfoReservasClient from '../../componente/infoReservas';

function Reservas() {
 
  const [token, setToken] = useState(sessionStorage.getItem("token"))
  const [type, setType] = useState(sessionStorage.getItem("type"))
  const { data } = useReservasFecth(`http://localhost:4000/booking/message`,
   { 
    headers: {
    "Authorization": `Bearer ${token}`
  }});
  const classes = useStyles();

  return (

      <Fragment>
        
          <Grid justifyContent="space-around" item xs={12}>
          <Grid item xs={6}>
            <Typography variant="h4">Reservas Pendientes</Typography>
     {data !==null?
     
       data.map(v =>{
       
     return <InfoReservasClient 
     nombre={v.nombreHelper}
     start={v.startDate}
     end={v.endDate}
     ></InfoReservasClient>
        }):""}
    
    </Grid>
    <Grid item xs={6}>
      <Typography variant="h4">Ayudas Completadas</Typography>
      </Grid>
    </Grid>
    
</Fragment>
  )
}

export default Reservas;