import React, { useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';
import { useBadgeCounter } from '../../hooks/hooks';
import InfoMensajesClient from '../../componente/infoMensajesClient';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import logoblue from '../../assets/logored.png'



function MensajesClient(props) {
 
  const [token, setToken] = useState(sessionStorage.getItem("token"))
  const { counter,dataMessage,dataMessageClient } = useBadgeCounter(`https://gomovingback.herokuapp.com/booking/message`,
  { 
   headers: {
   "Authorization": `Bearer ${token}`
 }});
  const classes = useStyles(props);
  useEffect(()=>{
    console.log(dataMessageClient)
  })

  return (

      <Fragment>
         <Link to="/">
        <img className="logo" src={logoblue} alt="" />
      </Link>
      <Divider></Divider>
      <Grid container justifyContent="space-around">


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
        <Grid item xs={8}>
      {dataMessageClient  !==null ?dataMessageClient.map(v =>{
                
                return <InfoMensajesClient 
                 nombre={v.nombreHelper}> 
                 </InfoMensajesClient> }):""}
                 </Grid>
      </Grid>
    </Fragment>
  )
}

export default MensajesClient;