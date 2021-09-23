import React from 'react';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom';
import logoblue from '../../assets/logored.png'

function ClientPage() {
  const [t] = useTranslation("global");
  const [token] = useState(sessionStorage.getItem("token"))
  const history = useHistory();

  return (
   <Fragment>
     <Link to="/">
              <img className="logo" src={logoblue} alt="" /> 
               </Link>
     <Grid  alignItems="center" justifyContent="center">
       <Typography align="center" variant="h4">Completa tu Perfil</Typography>
      <Container  maxWidth="xs">
      <form onSubmit={(e)=>{
        e.preventDefault()
        const User={
       nombre: e.target[0].value,
       apellidos: e.target[2].value,
       telefono: e.target[4].value,
       provincia: e.target[6].value,
        ciudad:e.target[8].value,
        direccion:e.target[10].value,}
        
        fetch('http://localhost:4000/user/cliente', {
          method: 'PATCH',
          body: JSON.stringify(User),
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
          },
        })
          .then(res =>{ 
            if(res.ok) history.push("/");
          })
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("form.nombre")}
                  name="nombre"
                  size="small"
                  variant="outlined"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("form.apellidos")}
                  name="apellidos"
                  size="small"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("form.telefono")}
                  name="telefono"
                  size="small"
                  variant="outlined"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("form.provincia")}
                  name="Provincia"
                  size="small"
                  variant="outlined"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("form.ciudad")}
                  name="ciudad"
                  size="small"
                  variant="outlined"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("form.direccion")}
                  name="direccion"
                  size="small"
                  variant="outlined"
                  type="text"
                />
              </Grid> 
          </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button    fullWidth color="secondary"   type="submit" variant="contained">
            {t("form.guardarBtn")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>

    </Grid>
    </Fragment>
   
  );
}

export default ClientPage;