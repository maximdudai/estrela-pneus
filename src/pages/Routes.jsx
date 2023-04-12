import React from "react";
import { Route, BrowserRouter } from "react-router-dom";


import Home from '../App';
import Authentication from "./Authentication/Authentication";
import ErrorPage from './ErrorBoundry/ErrorBoundry';

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { Authentication }  path="./Authentication/Authentication.jsx" />
        </BrowserRouter>
    )
};
export default PageRoutes;