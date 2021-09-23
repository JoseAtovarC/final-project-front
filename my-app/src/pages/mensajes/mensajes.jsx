
import React from 'react';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';
import {  useBadgeCounter } from '../../hooks/hooks';
import InfoMensajes from '../../componente/infoMensHelper';
import { Link } from 'react-router-dom';
import logoblue from '../../assets/logored.png'
import PersonIcon from '@material-ui/icons/Person';



function Mensajes(props) {

  const [token] = useState(sessionStorage.getItem("token"))

  const {  dataMessage,  } = useBadgeCounter(`http://localhost:4000/booking/message`,
    {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  const classes = useStyles(props);

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
          {dataMessage !== null ? dataMessage.map(v => {
              const startdate=new Date(v.startDate)
              const enddate=new Date(v.endDate)
            return <InfoMensajes
              nombre={v.nombreClient}
              start={new Intl.DateTimeFormat('en-US').format(startdate)}
              end={new Intl.DateTimeFormat('en-US').format(enddate)}

            ></InfoMensajes>
            }) : ""}
        </Grid>
        
      </Grid>
    </Fragment>
  )
}

export default Mensajes;