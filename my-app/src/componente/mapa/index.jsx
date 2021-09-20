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


function Mapa() {
    const {lat,lon}=useGeolocation()
    return(

        <Hidden smDown>
        {lat !==undefined?<Grid item xs={8}>
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
        </Grid>:""}
        </Hidden>
     
    )
}

export default Mapa