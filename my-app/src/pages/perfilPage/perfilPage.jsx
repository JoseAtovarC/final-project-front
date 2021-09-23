
import React, { Fragment } from 'react'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid, Typography } from '@material-ui/core';
import { useFetch, useBadgeCounter } from '../../hooks/hooks';
import { Link } from 'react-router-dom';
import logoblue from '../../assets/logored.png'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EventIcon from '@material-ui/icons/Event';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Popover } from '@material-ui/core';
import EditDatos from '../../componente/editDatos';
import EditClientPerfil from '../../componente/editClientPerfil'
import { useHistory } from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import { useStyles } from '../../theme/theme';



function PerfilPage() {
  const [t, i18n] = useTranslation("global");
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElLogout, setAnchorElLogout] = useState(null)
  const [anchorElMensaje, setAnchorElMensaje] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const open2 = Boolean(anchorElLogout);
  const id2 = open2 ? 'simple-popover' : undefined;
  const open3 = Boolean(anchorElMensaje);
  const id3 = open3 ? 'simple-popover' : undefined;
  
  const [token, setToken] = useState(sessionStorage.getItem("token"))
  const [type, setType] = useState(sessionStorage.getItem("type"))
  const history = useHistory();
  const { data } = useFetch(`http://localhost:4000/user/${type}`,
    {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const { counter,dataMessage,counterClient } = useBadgeCounter(`http://localhost:4000/booking/message`,
     { 
      headers: {
      "Authorization": `Bearer ${token}`
    }});
    
   
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const handleClickLogout = (event) => {
    setAnchorElLogout(event.currentTarget);
  };
  const handleClickMensaje = (event) => {
    setAnchorElMensaje(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElLogout(null);
    setAnchorElMensaje(null)
  };

 
  return (

    <Fragment>
      {data !== null ?
        <Grid  >
          <Link to="/">
            <img className="logo" src={logoblue} alt="" />
            
          </Link>

          <Typography color="secondary" align="center">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClickLogout}
            >
              <AccountCircle style={{ fontSize: "2.5rem" }} />
            </IconButton>
            <Typography variant="h5"> {data.nombre} </Typography>
          </Typography>
          
          <Popover
            id={id2}
            open={open2}
            anchorEl={anchorElLogout}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Button onClick={() => {
              sessionStorage.removeItem("token")
              history.push("/")
            }} > <Typography variant ="h6">Cerrar Sesión</Typography></Button>
          </Popover>

          <Grid container spacing={3} item xs={12} >

            <Grid item xs={12}>

              <PersonIcon style={{ fontSize: "4rem" }}></PersonIcon>
              <img  src={`http://localhost:4000${data.img}`} alt=""/>
              <Button onClick={handleClick}>
                <Typography variant="h5"> Informacion de la cuenta</Typography>
              </Button>
            </Grid>

            <Grid item xs={12}>
            {data.userType==="ayudante"?<Link style={{textDecoration:"none"}} to="mensajesHelper">:
           <Badge badgeContent={counter}  color="primary">
             <MailOutlineIcon style={{ fontSize: "4rem" }}></MailOutlineIcon>
             </Badge>
             <Button onClick={handleClickMensaje}>  
                <Typography variant="h5"> Mensajes</Typography>
                </Button>
             </Link>:
             
             <Link style={{textDecoration:"none"}} to="mensajesClient">
             <Badge badgeContent={counterClient}  color="primary">
             <MailOutlineIcon style={{ fontSize: "4rem" }}></MailOutlineIcon>
             </Badge>
             <Button onClick={handleClickMensaje}>  
                <Typography variant="h5"> Mensajes</Typography>
                </Button>
                </Link>}
            </Grid>
              

            <Grid item xs={12}>
              {data.userType==="cliente"?<Link style={{textDecoration:"none"}} to="reservas">
              <NotificationsIcon style={{ fontSize: "4rem" }}></NotificationsIcon>
              <Button> 
                <Typography variant="h5"> Reservas </Typography>
              </Button>
              </Link>:<Link style={{textDecoration:"none"}} to="reservasHelper">
              <NotificationsIcon style={{ fontSize: "4rem" }}></NotificationsIcon>
              <Button> 
                <Typography variant="h5"> Reservas </Typography>
              </Button>
              </Link>}
            </Grid>

            <Grid item xs={12}>
              <Button>
                <EventIcon style={{ fontSize: "4rem" }}></EventIcon>
                <Typography variant="h5"> Disponibilidad </Typography>
              </Button>
            </Grid>

            

          </Grid>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 50, left: 500 }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}>{type === "ayudante" ? <EditDatos></EditDatos> :
              <EditClientPerfil></EditClientPerfil>
            }</Popover>

        </Grid>
        :
        <p>
        </p>
      }
     
      
      
    </Fragment>

  );
}

export default PerfilPage;