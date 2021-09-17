
import React from 'react'
import check from '../../assets/check.png'
import './verificated.css';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';



    function Verificated(props){
      const [t, i18n] = useTranslation("global");

  return (

      
      <div className="check-card">
        <img className="check-image" src={check} alt=""></img>
        <Typography variant="h5">Usuario verificado</Typography>
        <Typography variant="h5">Haz click abajo para continuar</Typography>
        <Link style={{textDecoration:"none"  }} to="/login">
              
              <Typography color="secondary" style={{marginTop:"6rem"}} variant="h5"> {t("header.sesion")}</Typography>
             
            </Link>
      </div>
   
    );
}

export default Verificated;