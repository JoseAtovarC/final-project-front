
import React, { Fragment } from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logoblue from '../../assets/logored.png'
import { Popover } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from '../../theme/theme';
import Footer from '../../componente/footer/footer';
import ayuda from  '../../assets/ayuda.png'
import ayuda3 from  '../../assets/ayuda3.png'
import '../ayuda/ayuda.css'


function Ayuda() {
  const [t] = useTranslation("global");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const classes = useStyles();
  

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (

    <Fragment>
        <Link to="/">
            <img className="logo" src={logoblue} alt="" />
          </Link>

            <div  className="img-containerHelp">
              <Typography variant="h2"> {t("Help.title")} <br/> {t("Help.title2")}
              </Typography>
            </div>
      
        <Grid container
        maxWidth="xs"
        alignItems="center" 
        justifyContent="space-evenly" 
     
        >
          
          <Card  className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={ayuda}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" >
          {t("Help.ayuda")}
          </Typography>
          <Typography color="secondary">
            Si eres uno de nuestros cliente haz click abajo para encontrar todo
             lo que necesitas saber 
            sobre como usar Gomoving
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small">
        {t("Help.leer")}
        </Button>
      </CardActions>
    </Card>
         
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={ayuda3}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" >
          {t("Help.ayudaH")}
          </Typography>
          <Typography color="secondary">
          Si eres uno de nuestros  helpers haz click abajo para encontrar todo lo que necesitas saber 
            sobre como usar Gomoving
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Button size="small">
        {t("Help.leer")}
        </Button>
      </CardActions>
    </Card>



          <Popover
id={id}
open={open}
anchorEl={anchorEl}
onClose={handleClose}
anchorReference="anchorPosition"
anchorPosition={{ top: 50,left:500 }}
anchorOrigin={{
vertical: 'bottom',
horizontal: 'left',
}}></Popover>
        </Grid>
       <Footer></Footer> 
    </Fragment>
    

  );
}

export default Ayuda;