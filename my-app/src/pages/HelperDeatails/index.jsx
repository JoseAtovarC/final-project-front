import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import { Fragment, React, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFetch,useAuth } from '../../hooks/hooks';
import { useStyles } from '../../theme/theme';
import { useParams } from 'react-router-dom'
import Footer from '../../componente/footer/footer'
import { Link } from 'react-router-dom';
import { Divider, Typography } from '@material-ui/core';
import logoblue from '../../assets/logored.png'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import Reviews from '../../componente/reviews';
import { useHistory } from 'react-router';

import Avatar from '@material-ui/core/Avatar';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';





function HelperDetails() {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");
  
  const [token, setToken] = useState(sessionStorage.getItem("token"))
  const [open, setOpen] = useState(false);
  const { id } = useParams()
  const history = useHistory();
  const check=useAuth()
  const { data } = useFetch(`https://gomovingback.herokuapp.com/public/${id}`);


  const [state, setState] = useState([

    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection'
    }
  ]);
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (

    <Fragment>
      <Link to="/">
        <img className="logo" src={logoblue} alt="" />
      </Link>
      <Divider></Divider>
      {data !== null ?
        <Fragment>


          <Container maxWidth="xs" className={classes.helperDetails} >
            <Grid  item xs={12}   >

            <Grid style={{marginRight:"1rem"}} item md={3} >
            <Avatar
        alt=""
        src={`https://gomovingback.herokuapp.com/${data[1].img}`}
        style={{ width: 200, height:200 }}
      />
          </Grid>

          <Grid  item xs={6} >
              <Typography variant="h4">{data[1].nombre}</Typography>
              <LocationOnIcon></LocationOnIcon>
              <Typography style={{color:"black"}}>{data[1].codigo},{data[1].ciudad}</Typography>
              
              <Typography style={{color:"black"}}>
              <AssignmentTurnedInIcon/> Ayudas completadas:
                {data[0]}</Typography>
            </Grid>

            </Grid>

          </Container>
          <Divider></Divider>

          <Container className={classes.helperDetails} maxWidth="md">
            <Grid item xs={12}>
              <Typography style={{marginBottom:"1rem"}} variant="h4">Sobre Mi</Typography>
              <Typography style={{color:"black"}}>{data[1].informacion}</Typography>

            </Grid>
          </Container>
          <Divider></Divider>

          <Container className={classes.helperDetails} item xs={12} maxWidth="md">

            <Typography variant="h4">Disponibilidad</Typography>

            <form onSubmit={(e) => {
              e.preventDefault()
              
              console.log(state[0].startDate)
              const Booking = {
                emailHelper: data[1].email,
                startDate: state[0].startDate,
                endDate: state[0].endDate
              }

              if (token !== undefined && token !==null) {
                fetch('https://gomovingback.herokuapp.com/booking', {
                  method: 'POST',
                  body: JSON.stringify(Booking),
                  headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json',
                  }
                })
                .then(res =>{ 
                  if(res.ok) history.push("/Perfil");
                })
            }else{
              history.push("/login")
            }
            
            }}>
              <Grid item xs={6}>
                <DateRangePicker
                  onChange={item => setState([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  direction="horizontal"
                />
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="secondary" onClick={handleToggle} type="submit">Reservar</Button>
                 <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
              </Grid>
            </form>
          </Container>
          <Divider></Divider>
          <Container className={classes.helperDetails} maxWidth="xs">
            <Grid item xs={12}>
             

              <Reviews email={data[1].email}></Reviews>
            </Grid>
          </Container>
          <Divider></Divider>
        </Fragment>
        : ""}
      <Footer></Footer>
    </Fragment>


  )
}

export default HelperDetails