import '../componentes/header.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useStyles } from '../theme/theme';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useContext } from 'react'
import { ThemeContexts } from '../theme/theme';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";

function Header() {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");
  const [modo] = useContext(ThemeContexts)

  return (
    <div className="header-container">

      <AppBar  className={classes.header} position="static">

        <Toolbar className="bar-container" >
          <Link to="/">
            <p>💩</p>
          </Link>

              <div className="btn-nav">
              <IconButton 
               color="inherit"
            aria-label="open drawer"
            edge="end">
               <MenuIcon
                />
            </IconButton>
            </div>

          <div className="nav-container">
         
            <Link style={{ marginRight: "1rem" }} to="/ayuda">
              <p>{t("header.buscador")}</p>
            </Link>
            <div className="barra-nav"></div>


            <Link style={{ marginRight: "1rem" }} to="/ayuda">
              <p>{t("header.buscador")}</p>
            </Link>
            <div className="barra-nav"></div>

            <Link style={{ marginRight: "1rem" }} to="/ayuda">
              <p>{t("header.ayuda")}</p>
            </Link>
            <div className="barra-nav"></div>

            <Link style={{ marginRight: "1rem" }} to="/signup">
              <p>{t("header.registrarme")}</p>
            </Link>
            <div className="barra-nav"></div>
            <Link style={{ marginRight: "1rem" }} to="/login">
              <p>{t("header.sesion")}</p>
            </Link>

            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <div className="second-header-container" >
        <Container className={classes.search} maxWidth="xs">
          <h2>Encuentra al ayudante ideal <br />para tu mudanza</h2>
          <h5>tu alternativa a los servicios tradicionales</h5>
          <form >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h4>Estoy buscando</h4>
                <TextField
                  fullWidth
                  select
                  variant="outlined"
                  label={t("header.ubicacion")}

                />
              </Grid>
              <Grid item xs={12}>
                <h4>Fecha</h4>
                <TextField
                  fullWidth
                  type="date"
                  variant="outlined"
                />

              </Grid>
              <Grid item xs={12}>
                <Button color="secondary" fullWidth type="submit" variant="contained">
                  {t("header.buscador")}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </div>
  );

}

export default Header;