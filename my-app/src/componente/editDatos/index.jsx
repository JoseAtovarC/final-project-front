import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import {Fragment, React,useEffect,useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {useFetch} from '../../hooks/hooks';
import { useStyles } from '../../theme/theme';



function EditPerfil(){
    const classes = useStyles();
    const [t] = useTranslation("global");
    const [token] = useState(sessionStorage.getItem("token"))
  const [type] = useState(sessionStorage.getItem("type"))
  const { data } = useFetch(`http://localhost:4000/user/${type}`,
   { 
    headers: {
    "Authorization": `Bearer ${token}`
  }});
    return(

        <Grid className={classes.helperEdit} color="white" maxWidth="xs">
            {data !==null?
        <form onSubmit={(e)=>{
          e.preventDefault()
          console.log(e)
          const User={
         nombre: e.target[0].value,
         apellidos: e.target[2].value,
         email: e.target[4].value,
         telefono: e.target[6].value,
         provincia: e.target[8].value,
          ciudad:e.target[10].value,
          direccion:e.target[12].value,
         codigo: e.target[14].value,
          servicio:e.target[16].value,
          tarifa:e.target[17].value,
          informacion:e.target[19].value}
          console.log(User)
          fetch('http://localhost:4000/user/ayudante', {
            method: 'PATCH',
            body: JSON.stringify(User),
            headers: {
              'Content-Type': 'application/json',
              "Authorization": `Bearer ${token}`
            },
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
               
            })
        }} >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={data.nombre}
                    name="nombre"
                    size="small"
                    variant="outlined"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                  
                    defaultValue={data.apellidos}
                    name="apellidos"
                    size="small"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                  
                    defaultValue={data.email}
                    name="apellidos"
                    size="small"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={data.telefono}
                    name="telefono"
                    size="small"
                    variant="outlined"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={data.provincia}
                    name="Provincia"
                    size="small"
                    variant="outlined"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={data.ciudad}
                    name="ciudad"
                    size="small"
                    variant="outlined"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={data.direccion}
                    name="direccion"
                    size="small"
                    variant="outlined"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={data.codigo}
                    name="codigo-postal"
                    size="small"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                <Select
            
            fullWidth
            label
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
                    defaultValue={data.tarifa}
                    name="tarifa"
                    size="small"
                    type="number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={data.informacion}
                    name="informacion"
                    size="small"
                    multiline
                    rows={4}
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
        </form>:<p></p>}
      </Grid>

    )
}

export default EditPerfil