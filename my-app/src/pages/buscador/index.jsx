import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useStyles } from '../../theme/theme';
import { Button, Hidden, Popover, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Fragment } from 'react';
import {
  Link
} from "react-router-dom";
import logoblue from '../../assets/logored.png'
import { useFetch,useGeolocation } from '../../hooks/hooks';
import { Divider } from '@material-ui/core';
import HelpersCards from '../../componente/helpersCards';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Mapa from '../../componente/mapa';


function SearchPage() {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");
  const { data, setData } = useFetch(`http://localhost:4000/data`)
  const [filter, setFilter] = useState(sessionStorage.getItem("filter"))
  const {lat,lon}=useGeolocation()
  const [initialData, setInitialData] = useState(

  );
  const [initialValue, setValue] = useState("");
  const [chipData, setChipData] = useState([
    
  ]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
   setData(initialData)
   setFilter("")
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    
    setInitialData(data)
    if (event.target.value === "menor") {
                
      const sortInfo= data.sort((a, b) => a.tarifa - b.tarifa)
      setData(sortInfo)
     }  else {
      const sortInfo= data.sort((a, b) => b.tarifa - a.tarifa)
       setData(sortInfo) 
  }
}



  
 
  return (
    <Fragment >
      <Link to="/">
        <img className="logo" src={logoblue} alt="" />
      </Link>

      {data !== null && filter ===null? 
        <Grid  container spacing={3}>
          <Grid style={{ marginLeft: "1rem" }} item xs={12} md={6}>
            {/*BUSCADOR*/}

            <form onSubmit={(e) => {

              e.preventDefault()
              
              setChipData([
                { key: 0, label:e.target[0].value || filter },
              ])

              if (e.target[0].value !== "") {
              
                const info = data.filter((v) => {
                  return v.ciudad.toLowerCase() === e.target[0].value
                })
                setData(info)
              } 
              
              setInitialData(data)

            }} >

              <Grid container  item xs={12}>
                <Grid style={{marginBottom:"0.6rem"}}  items xs={6} md={6}>
                  <TextField
                    fullWidth
                    placeholder={t("search.placeHolder")}
                    name="name"
                    size="small"
                    type="text"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <SearchIcon position="start"></SearchIcon>
                      ),
                    }}

                  />
                </Grid>
                <Grid>
                  <Button color="secondary" variant="contained" type="submit"> {t("header.buscador")}</Button>
                </Grid>
                
                {chipData !==""?  chipData.map((v) => {
            return (
              <li key={v.key}>
            <Chip
              label={v.label}
              onDelete={ handleDelete(v)}
              className={classes.chip}
            />
          </li>
                 ) }):<p></p>}
              </Grid>
              </form>
              {/*tarifa*/}

              <Grid justifyContent="flex-start" container>
                <Grid item md={6} xs={6} style={{marginTop:"0.4rem", marginRight:"0.4rem"}} >
                  <Typography align="center" style={{marginBottom:"0.6rem"}} variant="h5">{t("search.tarifa")}</Typography>
                  <Select
                    value={initialValue}
                    onChange={handleChange}
                    fullWidth
                    inputProps={{
                      name: 'Tarifa',
                    }}
                  >
                     <MenuItem style={{ backgroundColor: "white" }} disabled value="">
                      <Typography color="secondary" variant="h6">{t("search.ordena")}</Typography>
                    </MenuItem>
                    <MenuItem style={{ backgroundColor: "white" }} value="menor">
                      <Typography  color="secondary" variant="h6">{t("search.menor")}</Typography>
                    </MenuItem>
                    <MenuItem style={{ backgroundColor: "white" }} value="mayor">
                      <Typography color="secondary" variant="h6">{t("search.mayor")}</Typography>
                    </MenuItem>
                  </Select>
                </Grid>
              </Grid>
            

          </Grid>


          {/*infocontainer*/}

          <Grid justifyContent="space-between" container>


            {/*CARDS*/}
            <Grid item xs={12} md={4} >

              {data.map(v =>
              <Link style={{textDecoration:"none",overflow:"scroll"}} to={`helpers/${v._id}`}>
                <HelpersCards
                  nombre={v.nombre}
                  ciudad={v.ciudad}
                  direccion={v.direccion}
                  codigo={v.codigo}
                  tarifa={v.tarifa} >
                </HelpersCards>
                </Link>)}
            </Grid>
            {/*MAPS*/}
            
            <Mapa></Mapa>
          
          </Grid>
        </Grid>

        : data !== null && filter !=="" ?
        
        
        ///////searchHome-----------------------
        
        
        
        
        
        <Grid container spacing={3}>
        <Grid style={{ marginLeft: "1rem" }} item xs={12} md={6}>
          {/*BUSCADOR*/}

          <form onSubmit={(e) => {

            e.preventDefault()
            
            setChipData([
              { key: 0, label:e.target[0].value || filter },
            ])

            if (e.target[0].value !== "") {
            
              const info = data.filter((v) => {
                return v.ciudad.toLowerCase() === e.target[0].value
              })
              setData(info)
            } 
            
            setInitialData(data)

          }} >

            <Grid container  item xs={12}>
              <Grid style={{marginBottom:"0.6rem"}}  items xs={6} md={6}>
                <TextField
                  fullWidth
                  placeholder={t("search.placeHolder")}
                  name="name"
                  size="small"
                  type="text"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <SearchIcon position="start"></SearchIcon>
                    ),
                  }}

                />
              </Grid>
              <Grid>
                <Button color="secondary" variant="contained" type="submit"> {t("header.buscador")}</Button>
              </Grid>
              
              {chipData !==""?  chipData.map((v) => {
          return (
            <li key={v.key}>
          <Chip
            label={v.label}
            onDelete={ handleDelete(v)}
            className={classes.chip}
          />
        </li>
               ) }):<p></p>}
            </Grid>
            </form>
            {/*tarifa*/}

            <Grid justifyContent="flex-start" container>
              <Grid item md={6} xs={6} style={{marginTop:"0.4rem", marginRight:"0.4rem"}} >
                <Typography align="center" style={{marginBottom:"0.6rem"}} variant="h5">{t("search.tarifa")}</Typography>
                <Select
                  value={initialValue}
                  onChange={handleChange}
                  fullWidth
                  inputProps={{
                    name: 'Tarifa',
                  }}
                >
                   <MenuItem style={{ backgroundColor: "white" }} disabled value="">
                    <Typography color="secondary" variant="h6">{t("search.ordena")}</Typography>
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "white" }} value="menor">
                    <Typography  color="secondary" variant="h6">{t("search.menor")}</Typography>
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "white" }} value="mayor">
                    <Typography color="secondary" variant="h6">{t("search.mayor")}</Typography>
                  </MenuItem>
                </Select>
              </Grid>
            </Grid>
          

        </Grid>


        {/*infocontainer*/}

        <Grid justifyContent="space-between" container>


          {/*CARDS*/}
          <Grid item xs={12} md={4} >
            <Typography variant="h4">hola</Typography>

            {
             data.map(v =>{

            return <Link style={{textDecoration:"none"}} to={`helpers/${v._id}`}>
              <HelpersCards
                nombre={v.nombre}
                ciudad={v.ciudad}
                direccion={v.direccion}
                codigo={v.codigo}
                tarifa={v.tarifa} >
              </HelpersCards>
              </Link>
            })}
          </Grid>
          {/*MAPS*/}
          <Hidden smDown>
          <Grid item xs={8}>
            <MapContainer style={{ height: "100vh", width: "auto" }} center={[lat, lon]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[lat, lon]}icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </Grid>
          </Hidden>
        </Grid>
      </Grid>

        :""}

      <Divider></Divider>
    </Fragment>
  )
}

export default SearchPage;

