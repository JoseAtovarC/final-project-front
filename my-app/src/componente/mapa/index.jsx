import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

import {  Hidden } from '@material-ui/core';

import { useGeolocation } from '../../hooks/hooks';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";



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