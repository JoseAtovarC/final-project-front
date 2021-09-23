import React from 'react';

import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';



function InfoReservasDone(props) {

 
  const classes = useStyles();
  

  return (

    <Fragment>
      

        <Grid className={classes.helpercard}>
          <Typography style={{color:"black"}}>Reserva completada:{props.end}</Typography>
         
          
        </Grid>
      <Divider></Divider>

    </Fragment>

  )
}

export default InfoReservasDone;