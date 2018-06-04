import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-dom";


import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Appbar from './Components/appbar'

// import RaisedButtonExampleComplex from './Components/middle-links'
import SimpleSliderg from './Components/careousel-mainpage'
import Divider from '@material-ui/core/Divider';
// import Slider  from "react-slick";
import FormExample from'./Components/react-bootstarp/main-form'
import Example from './Components/react-bootstarp/navbar-link'
import TabsExampleSimple from './Components/main-tabs'
import CC from './Components/appd'
import Footer from './Components/Footer'
const App = () => (

    <MuiThemeProvider>
        <CC/>


</MuiThemeProvider>
);

export default App;
