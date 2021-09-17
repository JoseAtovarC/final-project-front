import React from 'react';
import Header from '../../componente/header/header';
import Paper from '@material-ui/core/Paper';
import { Fragment } from 'react';
import Footer from '../../componente/footer/footer'
import './home.css';
import { useTranslation } from 'react-i18next';
import icon1 from '../../assets/1.png'
import icon2 from '../../assets/2.png'
import icon3 from '../../assets/3.png'
import hands from '../../assets/hands.png'
import checkIcon from '../../assets/checkIcon.png'
import relax from '../../assets/relax.png'
import { Typography } from '@material-ui/core';
import { Carousel} from 'react-responsive-carousel'
import reviews1 from '../../assets/reviews1.png'
import reviews2 from '../../assets/reviews2.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const [t, i18n] = useTranslation("global");
  

  return (
    <Fragment>

      <Header></Header>

      <Paper >
        <section className="section-container">
        <Typography variant="h2">{t("sectionInfo.ComoFunciona")}</Typography>
        

          <div className="info-container">
            <img className="icons" src={icon1} alt="" />
            <div>
              <Typography variant="h3">{t("sectionInfo.busca")}</Typography>
             
             <Typography >{t("sectionInfo.resFunciona")}<br></br>{t("sectionInfo.resFunciona2")}</Typography>
              
            </div>

            <img className="icons" src={icon2} alt="" />

            <div className="info">

                <Typography variant="h3">{t("sectionInfo.Reserva")}</Typography>
              
                  <Typography>{t("sectionInfo.resReserv")}<br></br>{t("sectionInfo.resReserv2")}</Typography>
              
            </div>

            <img className="icons" src={icon3} alt="" />

            <div className="info">
                <Typography variant="h3">{t("sectionInfo.porque")}</Typography>

                  <Typography>{t("sectionInfo.res1")}<br></br>{t("sectionInfo.res2")}

<br></br>{t("sectionInfo.res3")}
<br></br>{t("sectionInfo.res4")}
<br></br>{t("sectionInfo.res5")}
<br></br>{t("sectionInfo.res6")}</Typography>
            </div>
          </div>
        </section>



        <hr className="barra-section" />

        <section className="section-container">
          <Typography variant="h2">{t("sectionServicios.servicios")}</Typography>
         
          <div className="info-container">
          <img className="icons" src={hands} alt="" />
            <div className="info">
              <Typography variant="h3">{t("sectionServicios.ayuda")}</Typography>
              
              <Typography>{t("sectionServicios.resAyuda")}</Typography>
              
            </div>
            <img className="icons" src={checkIcon} alt="" />
            <div className="info">
              <Typography variant="h3">{t("sectionServicios.servCompleto")}</Typography>
            <Typography>{t("sectionServicios.res1")} <br></br> {t("sectionServicios.res2")}</Typography>
              
            </div>

            <img className="icons" src={relax} alt="" />
            <div className="info">
              <Typography variant="h3">{t("sectionServicios.otraAyuda")}</Typography>
           <Typography>{t("sectionServicios.res3")} <br></br>{t("sectionServicios.res4")}</Typography>
              
            </div>
          </div>
        </section>

        <Carousel ariaLabel="hola" showArrows={false} showStatus={false}
        showThumbs={false} >
          <img className="carousel" src={reviews1} alt=""></img>
          <img className="carousel" src={reviews2} alt=""></img>

        </Carousel>

        <section className="section-faq">

        <Typography variant="h2">{t("sectionPreguntas.preguntasFreq")}</Typography>
         
          <ul className="section-faq">
            <Typography variant="h3">{t("sectionPreguntas.esSeguro")}</Typography>
           
           <Typography style={{marginBottom:"1rem"}}>{t("sectionPreguntas.res1")} <br></br>
           {t("sectionPreguntas.res2")} <br></br>
           {t("sectionPreguntas.res3")} <br></br>
           </Typography>
            
            <Typography variant="h3">{t("sectionPreguntas.pago")}</Typography>
 
              <Typography style={{marginBottom:"1rem"}}>{t("sectionPreguntas.res4")}<br></br>
              {t("sectionPreguntas.res5")}
              </Typography>
           <Typography variant="h3">{t("sectionPreguntas.cancelar")}</Typography>
           
           <Typography style={{marginBottom:"1rem"}}>{t("sectionPreguntas.res6")}<br></br>
           {t("sectionPreguntas.res7")}<br></br>
           {t("sectionPreguntas.res8")}
           </Typography>
           
           
          </ul>
        </section>
      </Paper>
      <Footer></Footer>

    </Fragment>
  );
}

export default Home;