
import React, { useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';
import { useFetch, useBadgeCounter } from '../../hooks/hooks';
import InfoMensajes from '../../componente/infoMensHelper';



function MensajesClient(props) {
 
  const [token, setToken] = useState(sessionStorage.getItem("token"))
 
  const { counter,dataMessage,nombre } = useBadgeCounter(`http://localhost:4000/booking/message`,
  { 
   headers: {
   "Authorization": `Bearer ${token}`
 }});
  const classes = useStyles(props);

  return (

      <Fragment>
      {dataMessage !==null?dataMessage.map(v =>{
                
                return <InfoMensajes 
                 nombre={v.nombreClient}
                 star={v.startDate}
                 end={v.endDate}>
               
                 </InfoMensajes> }):""}

                 </Fragment>
  )
}

export default MensajesClient;