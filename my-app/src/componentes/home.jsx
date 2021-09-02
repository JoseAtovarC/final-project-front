
import imagen from '../../assets/Logo.png'
import React, { useEffect } from 'react'
import x from '../../assets/x.png'
import '../menu-bar/style.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Popover from '@material-ui/core/Popover';
import{useTranslation} from 'react-i18next';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Footer from './footer';
import Secondheader from './secondHeader';
import UserPage from './userPage';
import Sectioncards from './section';


    function Home(){
      const [name, setname] = React.useState(""); 
      const [btn, setbtn] = React.useState(true);  
      const [islog, setlog] = React.useState(''); 
      const [isreg, setreg] = React.useState(); 
      const [pReg, setpReg] = React.useState(); 
      const [isValid, setisValid] = React.useState(); 
      const [pValid, setpisValid] = React.useState(); 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [t, i18n] = useTranslation("global");
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const open2 = Boolean(anchorEl2);
  const id2 = open ? 'simple-popover' : undefined;
  const open4 = Boolean(anchorEl4);
  const id4 = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);

    setAnchorEl4(null);
  };
  

  useEffect(() => {
    if(islog !== undefined){
   fetch('http://localhost:3001/showInfo',{
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${islog.access_token}`, 
    }})
   .then(res => res.json())
   .then(data => setname(data.nombre))
  }
  });

  return (
      
    <div>
      {islog === ''?   <header className="bar-menu">
      <img className="logo" src={imagen} alt=""></img>  <div className="div-responsive">
         <Toolbar>
              <IconButton onClick={handleClick4}
              className="btn-nav-responsive"
               color="inherit"
            aria-label="open drawer"
            edge="end">
               <MenuIcon />
            </IconButton>
            </Toolbar>
           </div>

           <Popover id={id4}
open={open4}
anchorEl={anchorEl4}
onClose={handleClose}
anchorReference="anchorPosition"
anchorPosition={{ top: 122,left:1000 }}
anchorOrigin={{
vertical: 'bottom',
horizontal: 'center'}}>
         <div className=" btn-container-responsive">
    <button onClick={handleClick} className="btn-responsive">{t("header.Iniciar-Sesión")}</button>
    <button onClick={handleClick2} className="btn-responsive">{t("header.registro")}</button>
    <button className="btn-responsive">{t("header.embarcación")}</button>
    </div>
    </Popover>

    <div className="btn-container">
    <button onClick={handleClick} className="btn-sesion">{t("header.Iniciar-Sesión")}</button>
    <button onClick={handleClick2} className="btn-sesion">{t("header.registro")}</button>
    <button className="btn-ins">{t("header.embarcación")}</button>
    </div> </header> : <UserPage nombre={name}></UserPage> }
    
      

    
<Popover id={id2}
open={open2}
anchorEl={anchorEl2}
onClose={handleClose}
anchorReference="anchorPosition"
anchorPosition={{ top: 122,left:1000 }}
anchorOrigin={{
vertical: 'bottom',
horizontal: 'center',
}}>
  
      <Container className="log" maxWidth="xs">
          <div className="logTitle-Container">
        <p className="log-title">{t("logins.registro")}</p>
        <button onClose={handleClose} className="btn-x"> <img src={x} alt=""></img></button>
        </div>

      <form onSubmit={(e) => {
        setbtn(true)
        e.preventDefault()
        if( e.target[8].value===e.target[10].value){
        const USER = {
          nombre: e.target[0].value,
          apellido: e.target[2].value,
          telefono: e.target[6].value,
          email: e.target[4].value,
          password: e.target[8].value,
        } 
        console.log(USER)
      
        fetch('http://localhost:3001/log', {
          method: 'POST',
          body:JSON.stringify(USER),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(function(response) {
          if (!response.ok) {
              throw Error(response.status);
          }
          return response;
      }).then(function(response) {
          console.log("ok");
      }).catch(function(error) {
          setpReg('Upps User is already registreded!!')
      });;
      }}}>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  onChange={()=>setbtn(false)}
                  label={t("logins.Nombre")}
                  name="Nombre"
                  size="small"
                  variant="outlined"
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  onChange={()=>setbtn(false)}
                  label={t("logins.Apellidos")}
                  name="Apellidos"
                  size="small"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("logins.Correo")}
                  onChange={()=>setbtn(false)}
                  name="Correo"
                  size="small"
                  variant="outlined"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  onChange={()=>setbtn(false)}
                  label={t("logins.Telefono")}
                  name="Telefono"
                  size="small"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  onChange={()=>setbtn(false)}
                  label={t("logins.Contraseña")}
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  onChange={()=>setbtn(false)}
                  label={t("logins.Recordar")}
                  name="remember"
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
          <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label ={t("logins.politica") }
                style={{color:"#252E41"}}
              />
              <p  style={{color:"#252E41",fontSize:"1.5rem"}}>{pReg}</p>
              <div className="btnLog-container">
            <Button disabled={btn} className="btn-sesion"  type="submit" variant="contained">
            {t("logins.registrarse")}
            </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Container>
    </Popover>



<Popover
id={id}
open={open}
anchorEl={anchorEl}
onClose={handleClose}
anchorReference="anchorPosition"
anchorPosition={{ top: 122,left:860 }}
anchorOrigin={{
vertical: 'bottom',
horizontal: 'left',
}}>
    <Container className="log" maxWidth="xs">
          <div className="logTitle-Container">
        <p className="log-title">{t("logins.sesion")}</p>
        <button className="btn-x"> <img src={x} alt=""></img></button>
        </div>
      <form onSubmit={(e) => {
        e.preventDefault()
        const USER = {
          email: e.target[0].value,
          password: e.target[2].value,
        }
        console.log(USER)
        fetch('http://localhost:3001/login', {
          method: 'POST',
          body:JSON.stringify(USER),
          headers: {
            'Content-Type': 'application/json', 
          },
        })
        .then(res => res.json())
        .then(data =>{ setlog(data)});
      }}> 

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("logins.Correo")}
                  name="email"
                  size="small"
                  type="email"
                  variant="outlined"
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("logins.Contraseña")}
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <p className="p-sigin">{t("logins.rememberCo")}</p>
            <p className="p-sigin">{t("logins.rememberCon")}</p>
            
              <div className="btnLog-container">
            <Button  className="btn-sesion"  type="submit" variant="contained">
            {t("logins.registrarse")}
            </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Container>
    </Popover>
<Secondheader></Secondheader>
   
     <Sectioncards></Sectioncards>
    
        <Footer></Footer>
        
    </div>
    );
}

export default Home;