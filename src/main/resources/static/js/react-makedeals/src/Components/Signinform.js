
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import GridList from '@material-ui/core/GridList';
import { FormGroup,HelpBlock,ControlLabel } from 'react-bootstrap';
// import Button from 'react-bootstrap/lib/Button';
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit *2,

    },
    paper: {

        textAlign: 'center',
        padding: theme.spacing.unit *2 ,
        color: theme.palette.text.secondary,
        width: 300,
        height:60,

    },

    textField: {

        width: 250,
        padding: theme.spacing.unit *2,
    },
    gridList: {
        flexWrap: 'nowrap',

    },
    button: {

        backgroundColor:'green'
    },
    formControl: {

        minWidth: 120,
        maxWidth: 300,
        padding: theme.spacing.unit *2,
    },
});
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 40,
            width: 250,
        },
    },
};

class CenteredGrid extends React.Component {
     state = {
        name: [],
    };
    handleChange = event => {
        this.setState({ name: event.target.value });
    };
    render() {
        const { classes, theme } = this.props;


    return (


            <div className={classes.rootl} >



                    <Grid item  xs={12} sm={8} >
                        <TextField
                            id="name"
                            label="Name"
                            className={classes.textField}



                        />
                    </Grid>
                    <Grid item  xs={8} >
                        <Select
                            multiple
                            value={this.state.name}
                            onChange={this.handleChange}
                            input={<Input id="select-multiple" />}
                            className={classes.textField}



                        />
                    </Grid>
                    <Grid item sm={3}>
                       <Select
                            multiple
                            value={this.state.name}
                            onChange={this.handleChange}
                            input={<Input id="select-multiple" />}
                            className={classes.textField}
                        />
                    </Grid><Grid item xs={6} sm={3}>
                       <Button size="small" className={classes.button}>
                            Small

                        </Button>
                    </Grid>

            </div>


    );
}


};

export default withStyles(styles)(CenteredGrid);
