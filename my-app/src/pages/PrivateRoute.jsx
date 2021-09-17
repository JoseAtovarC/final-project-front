import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ClientPage from './clientPage/userPage';
import {useAuth} from '../hooks/hooks';
import HelperPage from './helperPage/index';

import PerfilPage from './perfilPage/perfilPage';

export const PrivateRoute = () => {
  let check=useAuth()
    return (
        <Route  render={() => (
           check ?
                <ClientPage/>
            : <Redirect  to="/signup"/>
        )} />
    );
};

export const PrivateRouteHelper = () => {
    let check=useAuth()
      return (
          <Route  render={() => (
             check ?
                  <HelperPage/>
              : <Redirect  to="/signup"/>
          )} />
      );
  };

  export const PrivateRoutePerfil = () => {
    let check=useAuth()
      return (
          <Route  render={() => (
             check ?
                  <PerfilPage/>
              : <Redirect  to="/signup"/>
          )} />
      );
  };
