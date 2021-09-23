import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useStyles } from '../../theme/theme';
import { Button,  Typography} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Fragment } from 'react';
import {
  Link,
  useLocation
} from "react-router-dom";
import logoblue from '../../assets/logored.png'
import { useFetch } from '../../hooks/hooks';
import { Divider } from '@material-ui/core';
import HelpersCards from '../../componente/helpersCards';
import Card from '@material-ui/core/Card';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Mapa from '../../componente/mapa';


function useQuery(){
  return new URLSearchParams(useLocation().search);
}


function SearchPage() {
  const classes = useStyles();
  let query = useQuery();
  const [t] = useTranslation("global");
  const { data, setData } = useFetch(`http://localhost:4000/data`)
  const [initialData, setInitialData] = useState(data);
  const [isFirstFilter, changeFirstFilter] = useState(true);
  const [initialValue, setValue] = useState("");
  const [chipData, setChipData] = useState([]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    setData(initialData)
  }

  const handleChange = (event) => {
    setValue(event.target.value);

    setInitialData(data)
    if (event.target.value === "menor") {

      const sortInfo = data.sort((a, b) => a.tarifa - b.tarifa)
      setData(sortInfo)
    } else {
      const sortInfo = data.sort((a, b) => b.tarifa - a.tarifa)
      setData(sortInfo)
    }
  }

  const filterByCity = (city) => {
    setChipData([{ key: 0, label: city }]);

    if (city !== "") {
      const info = data.filter((v) => {
        return v.ciudad.toLowerCase() === city
      })
      setData(info)
    }

    setInitialData(data)
  }
  
  if (isFirstFilter && query.get('name') !== null && data !== null) {

    filterByCity(query.get('name'));
    changeFirstFilter(false);
  }



  return (
    <Fragment >
      <Link to="/">
        <img className="logo" src={logoblue} alt="" />
      </Link>

      {data !== null ?
        <Grid container spacing={3}>
          <Grid style={{ marginLeft: "1rem" }} item xs={12} md={6}>


            {/*BUSCADOR*/}

            <form onSubmit={(e) => {
              e.preventDefault()
              filterByCity(e.target[0].value);
            }} >

              <Grid container item xs={12}>
                <Grid style={{ marginBottom: "0.6rem" }} items xs={6} md={6}>
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

                {chipData !== "" ? chipData.map((v) => {
                  return (
                    <li key={v.key}>
                      <Chip
                        label={v.label}
                        onDelete={handleDelete(v)}
                        className={classes.chip}
                      />
                    </li>
                  )
                }) : <p></p>}
              </Grid>
            </form>
            {/*tarifa*/}

            <Grid justifyContent="flex-start" container>
              <Grid item md={6} xs={6} style={{ marginTop: "0.4rem", marginRight: "0.4rem" }} >
                <Typography align="center" style={{ marginBottom: "0.6rem" }} variant="h5">{t("search.tarifa")}</Typography>
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
                    <Typography color="secondary" variant="h6">{t("search.menor")}</Typography>
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "white" }} value="mayor">
                    <Typography color="secondary" variant="h6">{t("search.mayor")}</Typography>
                  </MenuItem>
                </Select>
              </Grid>
            </Grid>


          </Grid>


          {/*infocontainer*/}

          <Grid  justifyContent="space-between" container>


            {/*CARDS*/}
            <Grid style={{height:"100vh",overflow:"auto"}}  item xs={4} md={4} >

              {data.map(v =>
                  <Link style={{ textDecoration: "none" }} to={`/helpers/${v._id}`}>
                    <HelpersCards
                      nombre={v.nombre}
                      ciudad={v.ciudad}
                      direccion={v.direccion}
                      codigo={v.codigo}
                      tarifa={v.tarifa}
                      img={`http://localhost:4000/${v.img}`} >
                    </HelpersCards>
                  </Link>)}
            </Grid>
            {/*MAPS*/}

            <Mapa></Mapa>

          </Grid>
        </Grid>

        : ""}

      <Divider></Divider>
    </Fragment>
  )
}

export default SearchPage;

