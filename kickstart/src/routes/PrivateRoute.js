import React, { Component } from 'react';
import { Route, Navigate } from 'react-router-dom';

import { isLogin } from '../utils/Utils'

const PrivateRoute = ({ children }) => {
    return (

        isLogin() ?
            children

            : <Navigate to="/" />

    )
}
export default PrivateRoute