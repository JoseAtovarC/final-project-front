import React from 'react';
import { useContext } from 'react'
import { ThemeContexts } from '../theme/theme';
import Header from '../componentes/header';
import Paper from '@material-ui/core/Paper';
import { Fragment } from 'react';
import Footer from '../componentes/footer'
import '../pages/home.css';
import { useTranslation } from 'react-i18next';


function Home() {
  const [t, i18n] = useTranslation("global");
  const [modo] = useContext(ThemeContexts)
  return (
    <Fragment>
      <Paper style={{backgroundColor:modo.primary}}>
        <Header></Header>

        <section className="section-container">
          <h2>{t("sectionInfo.ComoFunciona")}</h2>
          <div className="info-container">
            <div>
            <h2>Busca</h2>
            <p>{t("sectionInfo.resFunciona")}<br></br>{t("sectionInfo.resFunciona2")}</p>
            </div>
            <div className="info">
            <h2>{t("sectionInfo.Reserva")}</h2>
            
            <p>{t("sectionInfo.resReserv")}<br></br>{t("sectionInfo.resReserv2")}</p>
            </div>
            <div className="info">
            <h2>{t("sectionInfo.porque")}</h2>
            <p>{t("sectionInfo.res1")}<br></br>{t("sectionInfo.res2")}
            <br></br>{t("sectionInfo.res3")}
            <br></br>{t("sectionInfo.res4")}
            <br></br>{t("sectionInfo.res5")}
            <br></br>{t("sectionInfo.res6")}
            </p>
     
            </div>
          </div>
        </section>

        <div className="barra-section" ></div>

        <section className="section-container">
          <h2>{t("sectionServicios.servicios")}</h2>
          <div className="info-container">
            <div className="info">
            <h3>{t("sectionServicios.ayuda")}</h3>
            <p>{t("sectionServicios.resAyuda")}</p>
            </div>
            <div className="info">
            <h3>{t("sectionServicios.servCompleto")}</h3>
            <p>{t("sectionServicios.res1")} <br></br> {t("sectionServicios.res2")}</p>     
            </div>
            <div className="info">
            <h3>{t("sectionServicios.otraAyuda")}</h3>
            <p>{t("sectionServicios.res3")} <br></br>{t("sectionServicios.res4")}</p>
            </div>
          </div>
        </section>

        <section className="section-faq">
         
          <h2>{t("sectionPreguntas.preguntasFreq")}</h2>
          <ul className="section-faq">
          <h3>{t("sectionPreguntas.esSeguro")}</h3>
          <p>{t("sectionPreguntas.res1")}</p>
          <p>{t("sectionPreguntas.res2")}</p>
          <p>{t("sectionPreguntas.res3")}</p>
          <h3>{t("sectionPreguntas.pago")}</h3>
          <p>{t("sectionPreguntas.res4")}</p>
          <p>{t("sectionPreguntas.res5")}</p>
          <h3>{t("sectionPreguntas.cancelar")}</h3>
          <p>{t("sectionPreguntas.res6")}</p>
          <p>{t("sectionPreguntas.res7")}</p>
          <p>{t("sectionPreguntas.res8")}</p>
          </ul>
        </section>
        <Footer></Footer>
      </Paper>
    </Fragment>
  );
}

export default Home;