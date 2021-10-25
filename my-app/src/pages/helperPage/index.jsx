import React from 'react';
import { useState,useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory} from 'react-router-dom'
import { Fragment } from 'react';
import logoblue from '../../assets/logored.png'
import { Link } from 'react-router-dom';
import {useAuth,useFetch} from '../../hooks/hooks';
import { Input } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel'





function HelperPage() {
  const [t] = useTranslation("global");
  const [token, setToken] = useState(sessionStorage.getItem("token"))
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
       console.log(e.target.image.value)
       const Img= new FormData(e.target)
       console.log(Img)
         fetch('https://gomovingback.herokuapp.com/upload', {
        method: 'PATCH',
        body: Img,
        headers: {
         
          "Authorization": `Bearer ${token}`
        },
      })
        
        .then(res =>res)

        const User={
       nombre: e.target.nombre.value,
       apellidos: e.target.apellidos.value,
       telefono: e.target.telefono.value,
       provincia: e.target.Provincia.value,
        ciudad:e.target.ciudad.value,
        direccion:e.target.direccion.value,
       codigo: e.target.codigo.value,
        servicio:e.target.tarifa.value,
        tarifa:e.target.servicio.value,
        informacion:e.target.informacion.value}
        console.log(User)
        fetch('https://gomovingback.herokuapp.com/user/ayudante', {
          method: 'PATCH',
          body: JSON.stringify(User),
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
          },
        })
          
          .then(res =>{ 
            if(res.ok) history.push("/perfil");
          })
             }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
            <Grid justifyContent="center" style={{marginTop:"1rem"}} item xs={12}>
            <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      style={{ display: "none" }}
                      name="image"
                     
                    />
                    <InputLabel
                      htmlFor="contained-button-file"
                    
                    >
                      <Button
                       
                        variant="contained"
                        component="span"
                        color="primary"
                      >Sube una Foto</Button>
                        
                    </InputLabel>
              </Grid>


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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("form.codigo-postal")}
                  name="codigo"
                  size="small"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
              <Select
          
          fullWidth
          label={t("form.servicio")}
          inputProps={{
            name: 'servicio',
          }}
        >
          <MenuItem style={{backgroundColor:"white"}} value="">
            
          </MenuItem>
          <MenuItem style={{backgroundColor:"white"}}  value="ayuda">
            <Typography color="secondary"  variant="h6">Ayuda</Typography>
          </MenuItem>
          <MenuItem style={{backgroundColor:"white"}} value="Ayuda con Coche">
          <Typography color="secondary" variant="h6">Ayuda con Coche</Typography>
          </MenuItem>
          <MenuItem style={{backgroundColor:"white"}}value="Servicio completo">
          <Typography color="secondary" variant="h6">Servicio Completo</Typography>
            </MenuItem>
        </Select>

              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("form.tarifa")}
                  name="tarifa"
                  size="small"
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
          label="Escribe sobre Ti"
          multiline
          rows={4}
          name="informacion"
          variant="outlined"
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

export default HelperPage;