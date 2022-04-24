import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AutContext } from '../auth/autContext'

export const PrivateRoute = ({ children }) => {
    const { user } = useContext(AutContext);

    const {pathname, search} = useLocation();
    localStorage.setItem('lasPath', pathname + search);

    return user.logged
        ? children
        : <Navigate to="/login" />
}
