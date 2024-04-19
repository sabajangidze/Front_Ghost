import { useState, FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';

// Define the props type
interface PrivateRouteProps {
  Component: React.ReactElement;
}

const IsAuthenticatedPrivateRoute: FC<PrivateRouteProps> = ({ Component }) => {

  const isAuthenticated = useAppSelector((state) => state.token.email !== '' ? true : false);

  return isAuthenticated ? Component : <Navigate to="/" />;
};

export default IsAuthenticatedPrivateRoute;
