import './header.css';
import {Fragment, React,useEffect,useState} from 'react';
import logoblue from '../../assets/logo.svg'
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useStyles } from '../../theme/theme';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import {useAuth,useFetch} from '../../hooks/hooks';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {
  Link
} from "react-router-dom";
import { Typography } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import ResponsiveNav from '../nav-responsive/index'
import CloseIcon from '@material-ui/icons/Close';

function Header() {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");
  const check=useAuth()
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(sessionStorage.getItem("token"))
  const [type, setType] = useState(sessionStorage.getItem("type"))
  const { data, error } = useFetch(`http://localhost:4000/user/${type}`,
   { 
    headers: {
    "Authorization": `Bearer ${token}`
  }});

  const handleDrawerOpen = () => {
    setOpen(true);
   
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className="header-container">

      <AppBar   position="static">

        <Toolbar className="bar-container" >
          <Link to="/">
            <img style={{fill:"red"}} src={logoblue} alt="" className="logo" />
          </Link>

              <div className="btn-nav">
              <IconButton 
               color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}>
               <MenuIcon
               style={{fontSize:"2.5rem"}} />
            </IconButton>
            </div>
            <Drawer
            
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <IconButton onClick={handleDrawerClose}>
            <CloseIcon  style={{fontSize:"3rem"}} color="primary"></CloseIcon >
          </IconButton>
        <ResponsiveNav></ResponsiveNav>
         </Drawer>

          <div className="nav-container">
          
            <div className="search-icon">  <SearchIcon></SearchIcon></div>          
            <Link style={{ marginRight: "1rem",textDecoration:"none"}}
             to="/search">
               <Typography variant="h6" style={{marginTop:"1rem"}}>  {t("header.buscador")} </Typography>
             
            </Link>
            <div className="barra-nav"></div>

      

            <Link style={{ marginRight: "1rem",textDecoration:"none"  }} to="/ayuda">
              <Typography variant="h6" style={{marginTop:"1rem"}}>   {t("header.ayuda")}</Typography>
           
            </Link>
            <div className="barra-nav"></div>

           {data === null ?
           <Fragment>
           <Link style={{ marginRight: "1rem",textDecoration:"none"  }} to="/signup">
              <Typography variant="h6" style={{marginTop:"1rem"}}> {t("header.registrarme")}</Typography>
               
            </Link>
            <div className="barra-nav"></div>
            <Link style={{ marginRight: "1rem",textDecoration:"none"  }} to="/login">
              
              <Typography variant="h6" style={{marginTop:"1rem"}} > {t("header.sesion")}</Typography>
             
            </Link></Fragment>:<p></p>}

            { data !==null?
            <Link style={{textDecoration:"none"  }} to="/Perfil">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Typography>{data.nombre}</Typography>
              <AccountCircle style={{fontSize:"2.5rem"}} /> 
            </IconButton>
            </Link>
            :<span></span>}
          </div>
        </Toolbar>
      </AppBar>

      <div className="second-header-container" >
        <Container style={{ marginLeft:'2rem',}} className={classes.search} maxWidth="xs">
          <Typography variant="h4">
           {t("search.searchTitle1")} <br />  {t("search.searchTitle2")}</Typography>
          <Typography style={{marginTop:"1rem"}} variant="h5" >
          {t("search.searchTitle3")}
          </Typography>
      
          <form >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography style={{marginTop:"1rem"}} variant="h5"> {t("search.buscando")}</Typography>
                
                <TextField
                  fullWidth
                  select
                  variant="outlined"
                  label={t("header.ubicacion")}

                />
              </Grid>
              <Grid item xs={12}>
                <Typography style={{marginTop:"0.5rem"}}variant="h5"> {t("search.fecha")}</Typography>
                
                <TextField
                  fullWidth
                  type="date"
                  variant="outlined"
                />

              </Grid>
              <Grid item xs={12}>
                <Button color="secondary" fullWidth type="submit" variant="contained">
                 <Typography variant="button"> {t("header.buscador")}</Typography>
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </div>
  );

}

export default Header;