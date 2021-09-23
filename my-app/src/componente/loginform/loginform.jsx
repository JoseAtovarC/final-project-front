import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useStyles } from '../../theme/theme';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory} from 'react-router-dom'
import { Typography } from '@material-ui/core';
import { Popover } from '@material-ui/core';


function LoginForm() {
  const [t, i18n] = useTranslation("global");
  const [anchorEl, setAnchorEl] = useState(null);
  const open2 = Boolean(anchorEl);
  const id = open2 ? 'simple-popover' : undefined;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [token, setToken] = useState("")
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  
  };

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
   
    if (token !== undefined) {
      fetch('http://localhost:4000/user', {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      })
        .then(res => res.json())
        .then(data =>{ 
          sessionStorage.setItem('token', token)
          if(data.ciudad ===undefined){
          if(data.userType==="ayudante"){
            sessionStorage.setItem('type', "ayudante")
            history.push('/helperPage')
          } else{
            sessionStorage.setItem('type', "cliente")
            history.push('/user')
          }
        }
         else if(data.ciudad !==undefined && data.userType==="ayudante"){
          sessionStorage.setItem('type', "ayudante")
          history.push('/Perfil')
          } else {
            sessionStorage.setItem('type', "cliente")
            history.push('/')
            } 
        })
    }
  });

  return (

    <Container className={classes.search} maxWidth="xs">
     <Typography style={{marginBottom:"1rem"}} variant="h4">{t("form.sesion")}</Typography>
      
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
        .then(function (response) {
          if (!response.ok) {
            throw Error(response.status);
          }
          return response.json();;
        }).then(data=>{ 
           
          setToken(data.access_token)
       } ).catch(function (error) {
        history.push('/signup')
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

          <Grid item xs={12}  >
            <Typography  style={{marginBottom:"1rem"}} onClick={handleClick} color="secondary">{t("form.recordarContraseña")}</Typography>
            {/* <Typography color="secondary" >{t("form.recordarCorreo")}</Typography> */}
            <div className="btnLog-container">
              <Button color="secondary" onClick={handleToggle} type="submit" fullWidth variant="contained">
                {t("form.sesion")}
              </Button>
              <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
            </div>
          </Grid>
        </Grid>
      </form>
      <Popover
id={id}
open={open2}
anchorEl={anchorEl}
onClose={handleClose2}
anchorReference="anchorPosition"
anchorPosition={{ top: 200,left:500 }}
anchorOrigin={{
vertical: 'bottom',
horizontal: 'left',
}}>

<Container container maxWidth="xs" className={classes.search}>
<Grid  item xs={12}>
  <Typography align="center" variant="h5">Recuperar contraseña</Typography>
  <Typography style={{marginBottom:"1rem",cursor:"pointer"}} color="secondary">Introduce el email con el que te
     has registrado y te enviaremos un enlace para recuperar tu contraseña.</Typography>
                <form onSubmit={(e) => {
        e.preventDefault()
        const USER = {
          email: e.target[0].value,
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
          .then(data => { 
            setToken(data.access_token)
            console.log(token)
           
          })

      }}>
                <TextField
                  fullWidth
                  label={t("form.correo")}
                  name="email"
                  size="small"
                  type="email"
                  variant="outlined"
                  style={{marginBottom:"1rem"}}
                />
                </form>
                <Button color="primary"onClick={handleToggle} type="submit" fullWidth variant="contained">
               Enviar Enlace
              </Button>
              </Grid>
              </Container>
</Popover>
     
    </Container>

  )
}

export default LoginForm;