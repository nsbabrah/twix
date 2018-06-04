import React  from 'react';
import Slider  from "react-slick";
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.min.js';
export default class LeftNavButton extends React.Component {
    render() {
        return <button {...this.props}>Next</button>
    }
}