import Home from './pages/home/home';
import Wrapper from './wrapper/themeWrapper';
import ClientPage from './pages/clientPage/userPage';
import HelperPage from './pages/helperPage/index';
import { PrivateRoute, PrivateRouteHelper, PrivateRoutePerfil } from './pages/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from './pages/signup/signup';
import Login from './pages/login/login'
import { I18nextProvider } from 'react-i18next';
import globalEs from './traslations/en/es/global.json'
import globalEn from './traslations/en/global.json'
import i18next from 'i18next';
import PerfilPage from './pages/perfilPage/perfilPage';
import SearchPage from './pages/buscador'
import Ayuda from './pages/ayuda/ayuda'
import Contacto from './pages/contacto/index'
import Nosotros from './pages/sobreNostros/index'
import HelperDetails from './pages/HelperDeatails/index'
import Mensajes from './pages/mensajes/mensajes'
import MensajesClient from './pages/mensajesClient/index'
import Reservas from './pages/reservas/index'
import ReservasHelper from './pages/reservasHelper/index'
import Cookies from './pages/cookies/index'
import Gdpr from './pages/terminos/index'
import Terminos from './pages/gdpr/index'
import { HelmetProvider } from "react-helmet-async";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    },
  }
})

function App() {


  return (
    <Wrapper>
         <HelmetProvider>

      <I18nextProvider i18n={i18next} >
        <Router>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/signup">
              <Signup></Signup>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/search">
              <SearchPage></SearchPage>
            </Route>
            <Route exact path="/ayuda">
              <Ayuda></Ayuda>
            </Route>
            <Route exact path="/cookies">
              <Cookies></Cookies>
            </Route>
            <Route exact path="/gdpr">
              <Gdpr></Gdpr>
            </Route>
            <Route exact path="/helpers/:id">
              <HelperDetails></HelperDetails>
            </Route>
            <Route exact path="/mensajesClient">
              <MensajesClient></MensajesClient>
            </Route>
            <Route exact path="/mensajesHelper">
              <Mensajes></Mensajes>
            </Route>
            <Route exact path="/reservas">
              <Reservas></Reservas>
            </Route>
            <Route exact path="/reservasHelper">
              <ReservasHelper></ReservasHelper>
            </Route>
            <Route exact path="/nosotros">
              <Nosotros></Nosotros>
            </Route>
            <Route exact path="/contacto">
              <Contacto></Contacto>
            </Route>
            <Route exact path="/terminos">
              <Terminos></Terminos>
            </Route>

            <PrivateRoute exact path="/user">
              <ClientPage></ClientPage>
            </PrivateRoute>

            <PrivateRouteHelper exact path="/helperPage">
              <HelperPage></HelperPage>
            </PrivateRouteHelper>

            <PrivateRoutePerfil exact path="/Perfil">
              <PerfilPage></PerfilPage>
            </PrivateRoutePerfil>

          </Switch>
        </Router>
      </I18nextProvider>
      </HelmetProvider>

    </Wrapper>
  );
}

export default App;
