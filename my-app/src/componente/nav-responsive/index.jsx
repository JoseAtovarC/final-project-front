import React from 'react';

import { Link } from 'react-router-dom';
import '../header/header.css'
import { useTranslation } from 'react-i18next';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';





export default function ResponsiveNav() {
  const [t, i18n] = useTranslation("global");
 
  return (

        <div >
          
        
        <Divider />
       
        <Divider />
       

        <Link style={{ marginRight: "1rem",textDecoration:"none"}}
             to="/search">
               
               <Typography style={{marginLeft:"1rem"}} variant="h6" >  {t("header.buscador")}
              
                 </Typography>
              
              
            </Link>
                    
        <Divider />

           
              
            <Divider />

            <Link style={{ marginRight: "1rem",textDecoration:"none"  }} to="/ayuda">
              <Typography style={{marginLeft:"1rem"}} variant="h6">    {t("header.ayuda")}</Typography>
           
            </Link>
                  
        <Divider />

            <Link style={{ marginRight: "1rem",textDecoration:"none"  }} to="/signup">
              <Typography style={{marginLeft:"1rem"}} variant="h6" > {t("header.registrarme")}</Typography>
               
            </Link>
                  
        <Divider />
            <Link style={{ marginRight: "1rem",textDecoration:"none"  }} to="/login">
              
              <Typography style={{marginLeft:"1rem"}} variant="h6"  > {t("header.sesion")}</Typography>
             
            </Link>
        </div> 
   
  );
}