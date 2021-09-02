import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import '../pages/home.css';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function SignupForm() {
  const [t, i18n] = useTranslation("global");
  const [passwordAlert, setpasswordAlert] = useState("")

  return (
    <Fragment>
      <Container maxWidth="xs">
        <div >
          <p >{t("logins.registro")}</p>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault()
          if (e.target[2].value === e.target[4].value) {
            const USER = {
              email: e.target[0].value,
              password: e.target[2].value,
            }
            console.log(USER)

            fetch('http://localhost:4000/signup', {
              method: 'POST',
              body: JSON.stringify(USER),
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then(function (response) {
                if (!response.ok) {
                  throw Error(response.status);
                }
                return response;
              }).then(function (response) {
                console.log("ok");
              }).catch(function (error) {
                setpasswordAlert('Upps User is already registreded!!')
              })
          } else {
            setpasswordAlert("las contraseñas deben coincidir")
          }
        }}>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t("logins.Correo")}
                    onChange={() => setpasswordAlert("")}
                    name="Correo"
                    size="small"
                    variant="outlined"
                    type="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t("logins.Contraseña")}
                    name="password"
                    size="small"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t("logins.Recordar")}
                    name="remember"
                    size="small"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={t("logins.politica")}
                style={{ color: "#252E41" }}
              />
              <p style={{ color: "#252E41", fontSize: "1.5rem" }}>{passwordAlert}</p>
              <div className="btnLog-container">
                <Button className="btn-sesion" type="submit" variant="contained">
                  {t("logins.registrarse")}
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Fragment>
  );
}

export default SignupForm;