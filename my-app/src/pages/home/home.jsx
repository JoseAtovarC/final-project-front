import React from 'react';
import Header from '../../componente/header/header';
import Paper from '@material-ui/core/Paper';
import { Fragment } from 'react';
import Footer from '../../componente/footer/footer'
import './home.css';
import { useTranslation } from 'react-i18next';
import icon1 from '../../assets/1.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Box from '@material-ui/core/Box';
import icon2 from '../../assets/2.png'
import icon3 from '../../assets/3.png'
import hands from '../../assets/hands.png'
import checkIcon from '../../assets/checkIcon.png'
import relax from '../../assets/relax.png'
import { Container, Divider, Grid, Typography } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel'
import Rating from '@material-ui/lab/Rating';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Helmet } from 'react-helmet-async';

function Home() {
  const [t] = useTranslation("global");


  return (
    <Fragment>
       <Helmet>
    <title>Gomoving</title>
    <meta
      name="description"
      content="app web para mudanzas"/>
       <meta name="title" content="Gomoving"/>
<meta name="description" content="app web para mudanzas"/>
{/* 
<!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://gomoving.herokuapp.com/"/>
<meta property="og:title" content="Gomoving"/>
<meta property="og:description" content="app web para mudanzas"/>


    </Helmet>

      <Header></Header>

      <Paper >
        <section className="section-container">
          <Typography variant="h2">{t("sectionInfo.ComoFunciona")}</Typography>


          <div className="info-container">
            <img className="icons" src={icon1} alt="" />
            <div>
              <Typography variant="h3">{t("sectionInfo.busca")}</Typography>

              <Typography variant="h6" >{t("sectionInfo.resFunciona")}<br></br>{t("sectionInfo.resFunciona2")}</Typography>

            </div>

            <img className="icons" src={icon2} alt="" />

            <div className="info">

              <Typography variant="h3">{t("sectionInfo.Reserva")}</Typography>

              <Typography variant="h6">{t("sectionInfo.resReserv")}<br></br>{t("sectionInfo.resReserv2")}</Typography>

            </div>

            <img className="icons" src={icon3} alt="" />

            <div className="info">
              <Typography variant="h3">{t("sectionInfo.porque")}</Typography>

              <Typography variant="h6">{t("sectionInfo.res1")}<br></br>{t("sectionInfo.res2")}

                <br></br>{t("sectionInfo.res3")}
                <br></br>{t("sectionInfo.res4")}
                <br></br>{t("sectionInfo.res5")}
                <br></br>{t("sectionInfo.res6")}
              </Typography>
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

              <Typography variant="h6">{t("sectionServicios.resAyuda")}</Typography>

            </div>
            <img className="icons" src={checkIcon} alt="" />
            <div className="info">
              <Typography variant="h3">{t("sectionServicios.servCompleto")}</Typography>
              <Typography variant="h6">{t("sectionServicios.res1")} <br></br> {t("sectionServicios.res2")}</Typography>

            </div>

            <img className="icons" src={relax} alt="" />
            <div className="info">
              <Typography variant="h3">{t("sectionServicios.otraAyuda")}</Typography>
              <Typography variant="h6">{t("sectionServicios.res3")} <br></br>{t("sectionServicios.res4")}</Typography>

            </div>
          </div>
        </section>

        <Carousel showArrows={false} showStatus={false}
          showThumbs={false} >
          <div className="carousel1" >
            <Container Container maxWidth="xs">
              <Grid style={{ paddingTop: "10rem" }}>
                <Typography variant="h2">Jean sobre Jose</Typography>
                <Rating style={{ marginTop: "0.5rem" }} name="read-only" value={5} readOnly />
                <Typography style={{ marginTop: "2rem" }} variant="h6">"Muy majote un amor  lo volveria a contratar
                  siempre"</Typography>
              </Grid>
            </Container>
          </div>
          <div className="carousel2" >
            <Container Container maxWidth="xs">
              <Grid style={{ paddingTop: "10rem" }}>
                <Typography variant="h2">Paloma sobre Jose</Typography>
                <Rating style={{ marginTop: "0.5rem" }} name="read-only" value={5} readOnly />
                <Typography style={{ marginTop: "2rem" }} variant="h6">"Muy majo me ayudo un monton
                  en secreto"</Typography>
              </Grid>
            </Container>

          </div>

        </Carousel>


        <section className="section-faq">

          <Typography variant="h2">{t("sectionPreguntas.preguntasFreq")}</Typography>

          <ul className="section-faq">
            <Typography variant="h3">{t("sectionPreguntas.esSeguro")}</Typography>

            <Typography variant="h6" style={{ marginBottom: "1rem" }}>{t("sectionPreguntas.res1")} <br></br>
              {t("sectionPreguntas.res2")} <br></br>
              {t("sectionPreguntas.res3")} <br></br>
            </Typography>

            <Typography variant="h3">{t("sectionPreguntas.pago")}</Typography>

            <Typography variant="h6" style={{ marginBottom: "1rem" }}>{t("sectionPreguntas.res4")}<br></br>
              {t("sectionPreguntas.res5")}
            </Typography>
            <Typography variant="h3">{t("sectionPreguntas.cancelar")}</Typography>

            <Typography variant="h6" style={{ marginBottom: "1rem" }}>{t("sectionPreguntas.res6")}<br></br>
              {t("sectionPreguntas.res7")}<br></br>
              {t("sectionPreguntas.res8")}
            </Typography>


          </ul>
        </section>


      </Paper>
      <section style={{padding:"3rem"}}>

        <Typography align="center" color="secondary">REDES SOCIALES</Typography>
        <Divider></Divider>

        <Box mt={4} display="flex"   justifyContent="center">
          
          <Box p={1} >
              <FacebookIcon   style={{fontSize:"3rem",
              marginBottom:"0.5rem"
              }}></FacebookIcon>
            </Box>

            <Box p={1} >
              <TwitterIcon style={{fontSize:"3rem",     marginBottom:"0.5rem"}}></TwitterIcon>
            </Box>
            
            <Box p={1} >
              <InstagramIcon style={{fontSize:"3rem"}}></InstagramIcon>
            </Box>
        
        </Box>
      </section>
      <Footer></Footer>

    </Fragment>
  );
}

export default Home;