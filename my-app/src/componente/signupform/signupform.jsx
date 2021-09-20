import React from 'react';
import { useState,useEffect } from 'react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Verificated from '../verificated/verificated';
import { useLocation } from "react-router-dom";
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SignupForm() {
  const [t, i18n] = useTranslation("global");
  const classes = useStyles();
  const [passwordAlert, setpasswordAlert] = useState("")
  const query = useQuery(); 
  const [isEmailValid, setEmailValidity] = useState(false); 
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    
    const token = query.get("token"); 
    console.log(token)
    if (token) {  
      fetch(`http://localhost:4000/signup/validate?token=${token}`) 
        .then((r) => {  
          setEmailValidity(true);

        })
    } else {
    console.log('no')
      setEmailValidity(false); 
    }
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
   {isEmailValid ?<Verificated></Verificated> :(
     
     <Container className={classes.search} maxWidth="xs">
        
        <Typography style={{marginBottom:"1rem"}}  variant="h4"> {t("form.registroTitle")}</Typography>
        
      <form onSubmit={(e) => {
    
        e.preventDefault()
        if (e.target[0].value !==""){
        if (e.target[2].value === e.target[4].value ) {
          if(e.target[2].value.length>5){
          const USER = {
            email: e.target[0].value,
            password: e.target[2].value,
            userType:e.target.usuario.value
          }
          console.log(e)
          
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
              setpasswordAlert('Revisa tu email para continuar')
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
              <Grid item xs={12}>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <h4>Cliente</h4>
                <TextField
                  fullWidth
                  value="cliente"
                  name="usuario"
                  type="radio"
                  style={{marginRight:"1rem"}}
                  
                />
                <h4>Ayudante</h4>
                 <TextField
                  fullWidth
                  value="ayudante"
                  name="usuario"
                  type="radio"
                />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" required={true}  color="primary" />}
              label={t("form.terminosCheckbox")}
              style={{ color: "#252E41" }}
            />
            <p style={{ color: "#252E41", fontSize: "1.5rem" }}>{passwordAlert}</p>
            <div className="btnLog-container">
              <Button color="secondary" fullWidth  onClick={handleToggle} type="submit" variant="contained">

                {t("form.registrobtn")}
              </Button>
              <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
            </div>
          </Grid>
        </Grid>
      </form>
    </Container>
   )
    }
    </Fragment>
  );
}

export default SignupForm;