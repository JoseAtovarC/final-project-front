import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { React,useEffect,useState} from 'react';
import { useTranslation } from 'react-i18next';
import {useFetch} from '../../hooks/hooks';
import { useStyles } from '../../theme/theme';



function EditClientPerfil(){
    const classes = useStyles();
    const [t] = useTranslation("global");
    const [token] = useState(sessionStorage.getItem("token"))
  const [type] = useState(sessionStorage.getItem("type"))
  const { data } = useFetch(`https://gomovingback.herokuapp.com/user/${type}`,
   { 
    headers: {
    "Authorization": `Bearer ${token}`
  }});
    return(

        <Container className={classes.search} color="white" maxWidth="xs">
            {data !==null?
        <form
        onSubmit={(e)=>{
          e.preventDefault()
          const User={
         nombre: e.target[0].value,
         apellidos: e.target[2].value,
         email:e.target[4].value,
         telefono: e.target[6].value,
         provincia: e.target[8].value,
          ciudad:e.target[10].value,
          direccion:e.target[12].value,}
          
          fetch('https://gomovingback.herokuapp.com/user/cliente', {
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
        }}
        
        
        
        >
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
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button    fullWidth color="secondary"   type="submit" variant="contained">
              {t("form.guardarBtn")}
              </Button>
            </Grid>
          </Grid>
        </form>:<p></p>}
      </Container>

    )
}

export default EditClientPerfil