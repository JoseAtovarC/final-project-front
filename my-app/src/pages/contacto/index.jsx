
import React, { Fragment } from 'react'

import { useTranslation } from 'react-i18next';
import { Grid, Typography, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logoblue from '../../assets/logored.png'



function Contacto() {
  const [t,] = useTranslation("global");
 
  return (

    <Fragment>
        <Link to="/">
            <img className="logo" src={logoblue} alt="" />
          </Link>
          <Divider></Divider>

          <Grid style={{padding:"2rem"}} maxWidth="xs">
            <Typography  variant="h4">{t("Help.contacto")}</Typography>
            <Grid style={{marginTop:"1rem"}}    maxWidth="xs">
            <Typography color="secondary"> Si necesitas encontrar un ayudante cerca o tienes problemas 
            con nuestra plataforma puedes contactarnos </Typography>
            </Grid>
            <Grid style={{marginTop:"0.5rem"}}  maxWidth="xs">
            <Typography color="secondary">Horario de atencion: Monday to Thursdsay: 8 a.m.
             to 1 p.m. and 2 p.m. to 5 p.m. and on Fridays 8 a.m. to 1 p.m. .</Typography>
             </Grid>
             <Grid style={{marginTop:"0.5rem"}}  maxWidth="xs">
            <Typography color="secondary">Email:xxxx@ .</Typography>
           
   
            </Grid>
              </Grid>
           
     
    
       
    </Fragment>
    

  );
}

export default Contacto;