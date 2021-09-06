import React from 'react';
import { useState, useEffect } from 'react';
import '../pages/home.css';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useStyles } from '../theme/theme';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory} from 'react-router-dom'

function LoginForm() {
  const [t, i18n] = useTranslation("global");
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [token, setToken] = useState("")
  const [name, setName] = useState("")
  const history = useHistory();

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
   
    if (token !== undefined) {
      fetch('http://localhost:4000/login', {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      })
        .then(res => res.json())
        .then(data =>{ console.log(data)
        history.push('/user');
        })
    }
  });

  return (

    <Container  maxWidth="xs">
     
        <h2 >{t("form.sesion")}</h2>


      <form onSubmit={(e) => {
        e.preventDefault()
        const USER = {
          email: e.target[0].value,
          password: e.target[2].value,
        }
        console.log(USER)
        fetch('http://localhost:4000/auth', {
          method: 'POST',
          body: JSON.stringify(USER),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(data => { console.log('hola')
            setToken(data.access_token)
            console.log(token)
            sessionStorage.setItem('token', token)
          })

      }}>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("form.correo")}
                  name="email"
                  size="small"
                  type="email"
                  variant="outlined"
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

            </Grid>
          </Grid>

          <Grid item xs={12}>
            <p className="p-sigin">{t("form.recordarContraseña")}</p>
            <p className="p-sigin">{t("form.recordarCorreo")}</p>

            <div className="btnLog-container">
              <Button className="btn-sesion" onClick={handleToggle} type="submit" variant="contained">
                {t("form.sesion")}
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>

  )
}

export default LoginForm;