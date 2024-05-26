import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isLoggedIn = true; // Your authentication logic here

  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
