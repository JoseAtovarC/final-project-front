import React, { useEffect } from 'react';
import { Button, Container } from '@material-ui/core';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../theme/theme';
import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';



function InfoReservasClient(props) {
  const [token, setToken] = useState(sessionStorage.getItem("token"))
  const [review, setReview] = useState(false)
  const history = useHistory();
  const [value, setValue] = React.useState(2);
  const [open, setOpen] = React.useState(false);


  const classes = useStyles();

  const aceptMessage = (e) => {

    const res = {
      response: e.target.innerHTML,
      nombreHelper: props.nombre,
     
    }
    fetch('https://gomovingback.herokuapp.com/booking/client', {
      method: 'PATCH',
      body: JSON.stringify(res),
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
    })
      .then(res => {
        console.log('hola')
        setReview(true)
      })

  };

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (

    <Fragment>

      <Grid className={classes.helpercard} >
        {review === false ?
          <Fragment>
            <Typography style={{color:"black",marginBottom:"1rem"}}>Reserva hecha a: {props.nombre}</Typography>
            <Typography style={{color:"black"}}>desde el día:{props.start}</Typography>
            <Typography style={{color:"black",marginBottom:"1rem"}}>hasta el día:{props.end}</Typography>
            <Button fullWidth onClick={aceptMessage}>Terminar</Button>
          </Fragment> :
          <Grid>
            <Typography variant="h5">Deja tu review</Typography>

            <form onSubmit={(e) => {
              e.preventDefault()
             
              const reviews = {
                review: e.target[0].value,
                nameHelper: props.nombre,
                emailHelper: props.email,
                rating:e.target.rating.value,
                endDate:props.end
              }

              fetch('https://gomovingback.herokuapp.com/reviews', {
                method: 'POST',
                body: JSON.stringify(reviews),
                headers: {
                  'Content-Type': 'application/json',
                  "Authorization": `Bearer ${token}`
                },
              })
                .then(res => {
                  if (res.ok) history.push("/perfil");
                })

            }}>
              <TextField
                id="outlined-multiline-static"
                label="review"
                multiline
                rows={4}

              ></TextField>

              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                
                <Rating
                  name="rating"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                
              </Box>

              <Button style={{marginTop:"1rem"}} onClick={handleToggle} color="secondary" variant="contained" type="submit">Subir</Button>
              <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
            </form>
          </Grid>
        }

      </Grid>
      <Divider></Divider>

    </Fragment>

  )
}

export default InfoReservasClient;