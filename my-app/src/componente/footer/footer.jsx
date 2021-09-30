
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './footer.css'

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { useContext } from 'react'
import { ThemeContexts } from '../../theme/theme';
import logored from '../../assets/logored.png'
import { Typography } from '@material-ui/core';
import {
  Link
} from "react-router-dom";

function Footer() {
  const [auth, setAuth] = useState(true);
  const [modo, setTheme] = useContext(ThemeContexts);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const [t, i18n] = useTranslation("global");

  return (

    <div className="footer-container footer-container-res">
      <img className="logo" src={logored} alt="" />

      <ul className="nav-footer">
        <li className="li-footer">
          <Link style={{textDecoration:"none"}} to="nosotros">
          <Typography variant="h6"> {t("footer.sobrenosotros")}</Typography>
          </Link>
          </li>
        <div className="barra-footer"></div>
        <li className="li-footer"> 
        
        <Link style={{textDecoration:"none"}} to="contacto"> 
        <Typography variant="h6">{t("footer.contacto")}</Typography></Link></li>
        <div className="barra-footer"></div>

        <li className="li-footer">           <Link  style={{textDecoration:"none"}} to="ayuda">
          <Typography variant="h6">          {t("footer.ayuda")}</Typography>
 </Link ></li>
        <div className="barra-footer"></div>
        
        <li className="li-footer">  
        
                 <Link  style={{textDecoration:"none"}} to="cookies">
          <Typography variant="h6">cookies</Typography>
          
 </Link >
 <Link  style={{textDecoration:"none"}} to="gdpr">
          <Typography variant="h6">GDPR</Typography>
          </Link >
          
 </li>
        <div className="barra-footer"></div>
        <li className="li-footer">  
        <Link  style={{textDecoration:"none"}} to="terminos">
          <Typography variant="h6"> {t("footer.terminos")}</Typography>
          </Link >
          </li>
          <div className="barra-footer"></div>
        

        

        <li onClick={() => i18n.changeLanguage("es")} className="li-footer">  <nav>
          <Typography variant="h6">        {t("footer.España")}</Typography>
   </nav></li>
        <div className="barra-footer"></div>
        <li  onClick={() => i18n.changeLanguage("en")} className="li-footer">  <nav>
          <Typography variant="h6">{t("footer.Usa")} </Typography>
          </nav></li>

      </ul>
      <FormGroup>
          <FormControlLabel
            control={<Switch onClick={(e) =>setTheme()} checked={auth} onChange={handleChange} 
              aria-label="login switch" />}
            label={auth ?<WbSunnyIcon style={{color:"yellow"}}></WbSunnyIcon> :<Brightness3Icon></Brightness3Icon>  }
          />
        </FormGroup>
    </div>
  )
}

export default Footer