import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme=>( {
    card: {
        maxWidth: 155,

    },
    media: {
        maxWidth: 155,
        padding: theme.spacing.unit * 2,
        height: 30,

        paddingTop: '56.25%', // 16:9
        paddingLeft:'0%',
        paddingRight:'0%'
    },
});

function SimpleMediaCard(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="/static/media/images/vw-golf-2015-fis-572x318.jpg"
                    title="Contemplative Reptile"

                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Lizard
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);