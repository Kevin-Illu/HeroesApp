import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AutContext } from '../auth/autContext'

export const PublicRoute = ({ children }) => {

    const { user } = useContext(AutContext);

    return !user.logged
    ? children
    : <Navigate to="/" />
}
