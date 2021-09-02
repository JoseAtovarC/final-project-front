import '../componentes/header.css';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { ThemeContexts } from '../theme/theme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { useStyles } from '../theme/theme';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";

function Header() {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");
  const [auth, setAuth] = useState(true);
  const [modo, setTheme] = useContext(ThemeContexts);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };


  return (
    <div className="header-container">

      <AppBar className={classes.header} position="static">
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={auth} onChange={handleChange} onClick={() => setTheme()}
              aria-label="login switch" />}
            label={auth ? <Brightness3Icon></Brightness3Icon> : <WbSunnyIcon></WbSunnyIcon>}
          />
        </FormGroup>
        <Toolbar className="bar-container" >
          <Link to="/">
            <p>💩</p>
          </Link>

          <div className="bar-container">
            <Link to="/ayuda">
              <p>{t("header.ayuda")}</p>
            </Link>
            <Link to="/ayuda">
              <p>{t("header.ayuda")}</p>
            </Link>
            <Link to="/ayuda">
              <p>{t("header.ayuda")}</p>
            </Link>
            <Link to="/signup">
              <p>{t("header.registrarme")}</p>
            </Link>
            <Link to="/login">
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


      <Container maxWidth="xs">
        <form >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label={t("header.ubicacion")}
              />
            </Grid>
            <Grid item xs={12}>
              <div className="inp-date-container">
                <TextField
                  fullWidth
                  variant="outlined"
                  type="date"
                  style={{ marginRight: "1.5rem" }}
                />
                <TextField
                  fullWidth
                  type="date"
                  variant="outlined"
                />
              </div>
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
  );

}

export default Header;