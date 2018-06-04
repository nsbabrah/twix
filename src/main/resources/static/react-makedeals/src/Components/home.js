// eslint-disable-next-line
import React,{ Component } from 'react';
import '../App.css';
import '../App'
import { Button, Card, Row, Col ,Icon,Navbar,NavItem} from 'react-materialize';

class home extends React.Component{

    render(){

        return(
            <Navbar brand='logo' right>
                <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
                <NavItem href='components.html'>Components</NavItem>
            </Navbar>
        );
    }
}
export default home;