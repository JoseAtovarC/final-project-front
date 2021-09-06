import React from 'react';
import { useState,useEffect } from 'react';
import { Fragment } from 'react';
import '../pages/home.css';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Verificated from './verificated';


function SignupForm() {
  const [t, i18n] = useTranslation("global");
  const [passwordAlert, setpasswordAlert] = useState("")
  const [check, setCheck] = useState("")

  return (
    <Fragment>
   {check === ''?   <Container maxWidth="xs">
        
          <h2 >{t("form.registroTitle")}</h2>
        
        <form onSubmit={(e) => {
          e.preventDefault()
          if (e.target[0].value !==""){
          if (e.target[2].value === e.target[4].value ) {
            if(e.target[2].value.length>5){
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
              }).then(data=>{  
           setCheck("check")
             } ).catch(function (error) {
                setpasswordAlert('Upps User is already registreded!!')
              })
          }else{
              setpasswordAlert("la contraseña debe contener mas de 5 caracteres")
          } }else {
            setpasswordAlert("las contraseñas deben coincidir")
          }
        }else{
          setpasswordAlert("Debes rellenar todos los campos")
        }}}>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t("form.correo")}
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
                    label={t("form.Contraseña")}
                    name="password"
                    size="small"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={t("form.confirmaContraseña")}
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
                label={t("form.terminosCheckbox")}
                style={{ color: "#252E41" }}
              />
              <p style={{ color: "#252E41", fontSize: "1.5rem" }}>{passwordAlert}</p>
              <div className="btnLog-container">
                <Button className="btn-sesion"  type="submit" variant="contained">

                  {t("form.registrobtn")}
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Container>:<Verificated></Verificated>}
    </Fragment>
  );
}

export default SignupForm;