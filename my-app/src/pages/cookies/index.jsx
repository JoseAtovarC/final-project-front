
import React, { Fragment } from 'react'

import { useTranslation } from 'react-i18next';
import { Grid, Typography, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logoblue from '../../assets/logored.png'



function Cookies() {
  const [t,] = useTranslation("global");
 
  return (

    <Fragment>
        <Link to="/">
            <img className="logo" src={logoblue} alt="" />
          </Link>
          <Divider></Divider>

          <Grid style={{padding:"2rem"}} maxWidth="xs">
            <Typography style={{marginBottom:"3rem"}} align="center"  variant="h4">Cookies</Typography>

            <Typography variant="h5" align="center">
      Únicame utilizamos cookies estrictamente necesarias
      </Typography>
      <Typography variant="h5" align="center"> para el funcionamiento
      de esta web y la identificación de sus usuarios.
    </Typography>
           
   
            </Grid>
       
    </Fragment>
    

  );
}

export default Cookies;