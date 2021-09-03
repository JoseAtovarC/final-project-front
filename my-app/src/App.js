import Home from './pages/home';
import Wrapper from './componentes/wrapper';
import UserPage from './pages/userPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from './pages/signup';
import Login from './pages/login'
import {I18nextProvider} from 'react-i18next';
import globalEs from './traslations/en/es/global.json'
import globalEn from './traslations/en/global.json'
import i18next from 'i18next';
i18next.init({
  interpolation:{escapeValue:false},
  lng:"es",
  resources:{
    es:{
      global:globalEs
    },
    en:{
      global:globalEn
    },
  }
})

function App() {
  return (
    <Wrapper>
      <I18nextProvider i18n={i18next} >
        <Router>
        <Switch>

          <Route exact path="/">
      <Home></Home>
      </Route>

      <Route exact path="/signup">
      <Signup></Signup>
      </Route>

      <Route exact path="/signup">
      <Signup></Signup>
      </Route>

      <Route exact path="/login">
      <Login></Login>
      </Route>
      
      <Route exact path="/user">
      <UserPage></UserPage>
      </Route>

      </Switch>
     </Router>
     </I18nextProvider>
     </Wrapper>
  );
}

export default App;
