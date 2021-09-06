
import React from 'react'
import check from '../assets/check.png'
import './verificated.css';
import { useTranslation } from 'react-i18next';



    function Verificated(props){
      const [t, i18n] = useTranslation("global");

  return (

      
      <div className="check-card">
        <img className="check-image" src={check} alt=""></img>
        <p className="p-check">{t("header.verificado")}</p>
        <p>revisa tu correo para continuar con el registro</p>
      </div>
   
    );
}

export default Verificated;