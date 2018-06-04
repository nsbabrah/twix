
import Slider  from "react-slick";
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.min.js';

import Cards from './cards-materliazecss'
import {Row,Col} from 'react-materialize'
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    card:{
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing.unit *2,
        },
        padding: theme.spacing.unit *2,
        width:156,
        display:'grid',

    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});
function PrevButton({ onClick }) {
    return <button onClick={onClick} className="slick-prev" style={{ left: 0 ,display: "block", background: "red"}}>Prev</button>;
}
function NextButton({ onClick }) {
    return <button onClick={onClick} className="slick-next" style={{ right: 0,display: "block", background: "red" }}>Next</button>;
}

var settings = {
    infinite: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    speed: 300,

    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,


};

class GuttersGrid extends React.Component {
    state = {
        spacing: '16',
    };




    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;

        return (




                            <Slider  {...settings}  >


                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>
                                <Col s={1} className='grid-example'><Cards/></Col>


                            </Slider>




        );
    }
}

GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);