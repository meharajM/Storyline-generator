import React from 'react';
import CurrentUser from '../utils/current-user';
import Login from '../containers/Login';

export default function RequireAuthentication(WrappedComponent) {
  return function(props) {
    const user = CurrentUser.hasLoggedin();
    if (user) {
      return <WrappedComponent {...props} />;
    }

    return <Login />;
  };
}
