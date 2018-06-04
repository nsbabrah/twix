import React, { Component } from 'react';
import {Button, Icon,NavItem,Navbar} from 'react-materialize'

export default () => (
    <Navbar style={{backgroundcolor:'blue'}} brand='logo' right>
        <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
        <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
    </Navbar>
)