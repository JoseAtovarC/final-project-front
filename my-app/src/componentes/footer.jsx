
import React from 'react'
import { useTranslation } from 'react-i18next';
import './footer.css'
import ig from '../assets/ig.png'
import fb from '../assets/fb.png'
import twi from '../assets/twi.png'





function Footer() {

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
        <li className="li-footer">  <nav>{t("footer.seguro")} </nav></li>

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
    </div>
  )
}

export default Footer