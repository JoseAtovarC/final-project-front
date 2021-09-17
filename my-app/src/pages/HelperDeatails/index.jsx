import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Fragment, React, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFetch } from '../../hooks/hooks';
import { useStyles } from '../../theme/theme';
import { useParams } from 'react-router-dom'
import Footer from '../../componente/footer/footer'
import { Link } from 'react-router-dom';
import { Divider, Typography } from '@material-ui/core';
import logoblue from '../../assets/logored.png'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';





function HelperDetails() {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");
  const [ startDate,setStardate] = useState("");
  const [ endDate,setEnddate] = useState("");
  const [token, setToken] = useState(sessionStorage.getItem("token"))
  const { id } = useParams()
  const { data } = useFetch(`http://localhost:4000/public/${id}`);


const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
]);
  

  return (

    <Fragment>
      <Link to="/">
        <img className="logo" src={logoblue} alt="" />
      </Link>
      <Divider></Divider>
      {data !== null ?
        <Fragment>
          <Container className={classes.helperDetails} maxWidth="xs">
            <Grid item xs={12} >
              <Typography variant="h4">{data.nombre}</Typography>
              <LocationOnIcon></LocationOnIcon>
              <Typography color="secondary">{data.codigo},{data.ciudad}</Typography>
            </Grid>

          </Container>
          <Divider></Divider>

          <Container className={classes.helperDetails} maxWidth="xs">
            <Grid item xs={12}>
              <Typography variant="h4">Sobre Mi</Typography>
              <Typography variant="h5">{data.informacion}</Typography>
              
            </Grid>
          </Container>
          <Divider></Divider>

          <Container className={classes.helperDetails} item xs={12} maxWidth="xs">
            
              <Typography variant="h4">Disponibilidad</Typography>
              <form onSubmit={(e)=>{
                e.preventDefault()
                
                const Booking = {
                  emailHelper: data.email,
                  startDate: state[0].startDate,
                  endDate:state[0].endDate
                }
             
                if (token !== undefined) {
                  fetch('http://localhost:4000/booking', {
                    method: 'POST',
                    body: JSON.stringify(Booking),
                    headers: {
                      "Authorization": `Bearer ${token}`,
                      'Content-Type': 'application/json',
                    }
                  })
                    .then(res => res.json())
                    .then(data =>data)}
              }}>
                <Grid item xs={6}>
                <DateRangePicker
  onChange={item => setState([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  ranges={state}
  direction="horizontal"
/>;
      </Grid>
      <Grid item xs={6}>
      <Button variant="contained" color="secondary" type="submit">Reservar</Button>
      
            </Grid>
            </form>
          </Container>
          <Divider></Divider>
          <Container className={classes.helperDetails} maxWidth="xs">
            <Grid item xs={12}>
              <Typography variant="h4">Valoraciones</Typography>
        
              
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