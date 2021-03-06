
import React, { useEffect } from 'react';

import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';

import {  useFetch } from '../../hooks/hooks';
import ReviewsInfo from '../reviewsInfo/index';


function Reviews(props) {
 
  const [token, setToken] = useState(sessionStorage.getItem("token"))
 
  const {data } = useFetch(`https://gomovingback.herokuapp.com/reviews/${props.email}`,
   { 
    headers: {
    "Authorization": `Bearer ${token}`
  }});
  const classes = useStyles();
  useEffect(()=>{
     
      console.log(data)
      
  })

  return (

      <Fragment>
        {data !==null?
     
        
          <Grid >
          <Typography style={{marginBottom:"1rem"}} align="center" variant="h4">
            <span>{data.length}</span> Valoraciones</Typography>
      
     {data.map(v =>{
      const enddate=new Date(v.endDate)
   return <ReviewsInfo
     nombre={v.nameClient}
     review={v.review}
     rating={v.rating}
     end={new Intl.DateTimeFormat('en-US').format(enddate)}
            >
     </ReviewsInfo>
     
        })}
        </Grid>:""}
    
    
 
  
    
</Fragment>
  )
}

export default Reviews;