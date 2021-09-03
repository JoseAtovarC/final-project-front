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
      <Paper style={{ background: modo.background }}>
        <Header></Header>
        <section>
          <h2>{t("sectionInfo.ComoFunciona")}</h2>
          <p>{t("sectionInfo.resFunciona")}</p>
          <h2>{t("sectionInfo.Reserva")}</h2>
          <p>{t("sectionInfo.resReserv")}</p>
          <h2>{t("sectionInfo.porque")}</h2>
          <p>{t("sectionInfo.res1")}</p>
          <p>{t("sectionInfo.res2")}</p>
          <p>{t("sectionInfo.res3")}</p>
          <p>{t("sectionInfo.res4")}</p>
          <p>{t("sectionInfo.res5")}</p>
          <p>{t("sectionInfo.res6")}</p>
        </section>
     
        <section>
          <h2>{t("sectionServicios.servicios")}</h2>
          <h3>{t("sectionServicios.ayuda")}</h3>
          <p>{t("sectionServicios.resAyuda")}</p>
          <h3>{t("sectionServicios.servCompleto")}</h3>
          <p>{t("sectionServicios.res1")}</p>
          <p>{t("sectionServicios.res2")}</p>
          <h3>{t("sectionServicios.otraAyuda")}</h3>
          <p>{t("sectionServicios.res3")}</p>
          <p>{t("sectionServicios.res4")}</p>
        </section>
        <section>
          <h2>{t("sectionPreguntas.preguntasFreq")}</h2>
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
        </section>
        <Footer></Footer>
      </Paper>
    </Fragment>
  );
}

export default Home;