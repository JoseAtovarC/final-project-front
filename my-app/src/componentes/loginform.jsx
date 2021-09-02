import React from 'react';
import { useState } from 'react';
import '../pages/home.css';
import{useTranslation} from 'react-i18next';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function LoginForm() {
    const [t, i18n] = useTranslation("global");
    const [token, setToken ]=useState("")
    
 return(

<Container className="log" maxWidth="xs">
          <div className="logTitle-Container">
        <p className="log-title">{t("logins.sesion")}</p>
        </div>
        
      <form onSubmit={(e) => {
        e.preventDefault()
        const USER = {
          email: e.target[0].value,
          password: e.target[2].value,
        }
        console.log(USER)
        fetch('http://localhost:4000/auth', {
          method: 'POST',
          body:JSON.stringify(USER),
          headers: {
            'Content-Type': 'application/json', 
          },
        })
        .then(res => res.json())
        .then(data=>{ setToken(data.access_token)
        console.log(token)})
       
      }}> 

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  // label={t("logins.Correo")}
                  name="email"
                  size="small"
                  type="email"
                  variant="outlined"
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  // label={t("logins.Contraseña")}
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <p className="p-sigin">{t("logins.rememberCo")}</p>
            <p className="p-sigin">{t("logins.rememberCon")}</p>
            
              <div className="btnLog-container">
            <Button  className="btn-sesion"  type="submit" variant="contained">
            {t("logins.registrarse")}
            </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Container>

 )
}

export default LoginForm;