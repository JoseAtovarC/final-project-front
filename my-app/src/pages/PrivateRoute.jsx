import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import User from '../page/user'
import useAuth from '../page/hooks'

const PrivateRoute = () => {
  let check=useAuth()
    return (
        <Route  render={() => (
           check ?
                <User/>
            : <Redirect  to="/"/>
        )} />
    );
};

export default PrivateRoute;