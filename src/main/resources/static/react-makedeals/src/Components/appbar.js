import React, {Component}from 'react';
import { BrowserRouter as Router, Route, Link } from "react-dom";


import Cards from './main-tabs'

export default class gg extends React.Component{


    constructor(props) {
        super(props);

        this.state = {
            activetab: props.activetab
        };
    }
    onMouseOut =()=>{
        this.setState({hover: ""});
    }

    render(){
        return (
<div>
            <div >

<Cards onMouseOut={this.onMouseOut} setState={{hover: ""}}/>
            </div>
        </div>

    )
}
}