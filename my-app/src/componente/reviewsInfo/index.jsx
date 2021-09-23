import React from 'react';
import { Button, Container } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

import { Fragment } from 'react';
import { Divider } from '@material-ui/core';




function ReviewsInfo(props) {



  return (

    <Fragment>

      <Container spacing={3}>
     
        <Grid item xs={12}>
          <Typography  variant="h5">{props.nombre}</Typography>
        
        <Typography style={{color:"black"}} >{props.end}</Typography>
        <Rating name="read-only" value={props.rating} readOnly />
         
          <Typography style={{color:"black"}}>{props.review}</Typography>
   
        </Grid>
      </Container>
      <Divider></Divider>

    </Fragment>

  )
}

export default ReviewsInfo;