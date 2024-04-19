import { useState, FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import UserRoles from '../../types/UserRoles';

// Define the props type
interface PrivateRouteProps {
  Roles: UserRoles[];
}

const HasARolePrivateRoute: FC<PrivateRouteProps> = ({Roles }) => {

  const userRole = useAppSelector((state) => UserRoles[state.token.roles as keyof typeof UserRoles]);

  const isAuthenticated = useAppSelector((state) => state.token.email !== '' ? true : false);
  const containsRole = Roles.includes(userRole);

  return isAuthenticated && containsRole ? <Outlet /> : <Navigate to="/" />;
};

export default HasARolePrivateRoute;
