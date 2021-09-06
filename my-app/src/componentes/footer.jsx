
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './footer.css'
import ig from '../assets/ig.png'
import fb from '../assets/fb.png'
import twi from '../assets/twi.png'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { useContext } from 'react'
import { ThemeContexts } from '../theme/theme';





function Footer() {
  const [auth, setAuth] = useState(true);
  const [modo, setTheme] = useContext(ThemeContexts);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const [t, i18n] = useTranslation("global");

  return (

    <div className="footer-container footer-container-res">


      <ul className="nav-footer">
        <li className="li-footer">  <nav>{t("footer.sobrenosotros")} </nav></li>
        <div className="barra-footer"></div>
        <li className="li-footer">  <nav>{t("footer.contacto")} </nav></li>
        <div className="barra-footer"></div>
        <li className="li-footer">  <nav>{t("footer.ayuda")} </nav></li>
        <div className="barra-footer"></div>
        

        <div className="socialIcon">
          <img className="footer-logo" src={fb} alt=""></img>
          <img className="footer-logo" src={ig} alt=""></img>
          <img className="footer-logo" src={twi} alt=""></img>
        </div>

        <li onClick={() => i18n.changeLanguage("es")} className="li-footer">  <nav>{t("footer.España")} </nav></li>
        <div className="barra-footer"></div>
        <li  onClick={() => i18n.changeLanguage("en")} className="li-footer">  <nav>{t("footer.Usa")} </nav></li>

      </ul>
      <FormGroup>
          <FormControlLabel
            control={<Switch checked={auth} onChange={handleChange} onClick={() => setTheme()}
              aria-label="login switch" />}
            label={auth ? <Brightness3Icon></Brightness3Icon> : <WbSunnyIcon></WbSunnyIcon>}
          />
        </FormGroup>
    </div>
  )
}

export default Footer