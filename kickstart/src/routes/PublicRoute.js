import React, { Component } from 'react';
import { Route, Navigate } from 'react-router-dom';

import { isLogin } from '../utils/Utils'

const PublicRoute = ({ children }) => {
    return (

        isLogin() ?
            <Navigate to="/users" /> :
            children



    )
}
export default PublicRoute