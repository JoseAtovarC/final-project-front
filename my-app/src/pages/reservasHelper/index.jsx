
import React, { useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';
import { useReservasFecth } from '../../hooks/hooks';
import InfoReservasHelper from '../../componente/infoReserHelper';
import { Link } from 'react-router-dom';
import logoblue from '../../assets/logored.png'
import PersonIcon from '@material-ui/icons/Person';
import InfoReservasDone from '../../componente/infoReservasDone';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
function ReservasHelper() {
 
  const [token, setToken] = useState(sessionStorage.getItem("token"))
  const [type, setType] = useState(sessionStorage.getItem("type"))
  const { data,dataDone } = useReservasFecth(`http://localhost:4000/booking/message`,
  { 
   headers: {
   "Authorization": `Bearer ${token}`
 }});
  const classes = useStyles();

  return (

      <Fragment>
        
        <Link to="/">
        <img className="logo" src={logoblue} alt="" />
      </Link>
      <Divider></Divider>
        
          <Grid  style={{padding:"2rem"}}  container justifyContent="space-around" item xs={12}>

          <Grid>
          <Grid item xs={4}>
<Link style={{textDecoration:"none"}} to="/Perfil">
  <PersonIcon style={{ fontSize: "4rem" }}></PersonIcon>
  <Button >
    <Typography variant="h5"> Perfil</Typography>
  </Button>
  </Link>
</Grid>
</Grid>
          <Grid item xs={4}>
            <Typography variant="h4">Reservas Pendientes
            <span> <AccessAlarmIcon></AccessAlarmIcon></span>
            </Typography>
           
     {data !==null?
      data.map(v =>{
       
        const startdate=new Date(v.startDate)
        const enddate=new Date(v.endDate)
     return <InfoReservasHelper
     nombre={v.nombreClient}
     start={new Intl.DateTimeFormat('en-US').format(startdate)}
     end={new Intl.DateTimeFormat('en-US').format(enddate)}
     ></InfoReservasHelper>
        }):""}
    
    </Grid>
    <Grid item xs={6}>
      <Typography variant="h4">Ayudas Completadas
      <span><CheckCircleOutlineIcon style={{color:"green"}}></CheckCircleOutlineIcon></span>
      </Typography>
      {dataDone !==null? dataDone.map(v =>{
       
       const enddate=new Date(v.endDate)
    return <InfoReservasDone

   
    end={new Intl.DateTimeFormat('en-US').format(enddate)}
    email={v.emailHelper}

    ></InfoReservasDone>}):""}
      </Grid>
    </Grid>
    
</Fragment>
  )
}

export default ReservasHelper;