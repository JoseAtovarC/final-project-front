
import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logoblue from '../../assets/logored.png'
import { useStyles } from '../../theme/theme';
import './index.css'

import Footer from '../../componente/footer/footer';

function Nosotros() {
  const [t, i18n] = useTranslation("global");
  
  
  return (

    <Fragment>
        <Link to="/">
            <img className="logo" src={logoblue} alt="" />
          </Link>
         
          <Grid className="about-container"  maxWidth="xs">

              <div  className="img-container">
           
            </div>

              <Grid container  style={{padding:"2rem"}} maxWidth="xs" >

                <Grid >
                <Typography style={{marginTop:"1rem"}} align="center" variant="h4"> {t("sectionInfo.quienes")}</Typography>
            <Typography style={{marginTop:"2rem"}} align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti neque ex reprehenderit maiores obcaecati illum minus perferendis omnis, voluptates consequuntur, consectetur 
            saepe error voluptatum suscipit quibusdam assumenda cupiditate magnam.</Typography>
            </Grid>
            <Grid style={{marginTop:"2rem"}} >
            <Typography align="center" variant="h4">{t("sectionInfo.porqueGo")}</Typography>
            <Typography style={{marginTop:"2rem"}} align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorem deleniti neque ex reprehenderit maiores obcaecati illum
              minus perferendis omnis, voluptates consequuntur, consectetur 
            saepe error voluptatum suscipit quibusdam assumenda cupiditate magnam.</Typography>
            </Grid>
            <Typography align="center" >Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorem deleniti neque ex reprehenderit maiores obcaecati illum
              minus perferendis omnis, voluptates consequuntur, consectetur 
            saepe error voluptatum suscipit quibusdam assumenda cupiditate magnam.</Typography>
   
            <Typography align="center" >Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorem deleniti neque ex reprehenderit maiores obcaecati illum
              minus perferendis omnis</Typography>
              </Grid>
              </Grid>
           
     
    
       <Footer></Footer> 
    </Fragment>
    

  );
}

export default Nosotros;