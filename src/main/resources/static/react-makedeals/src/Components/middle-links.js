    import React from 'react';
import {GridList, GridTile} from '@material-ui/core/GridList';
import IconButton from '@material-ui/core/IconButton';
import Subheader from 'react-materialize';
import StarBorder from '@material-ui/core/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',

    },
    gridList: {
        width: 1000,
        height: 250,

    },
};

const tilesData = [
    {
        img: 'https://pixabay.com/get/ea31b00d2cf3023ed1534705fb0938c9bd22ffd41cb317469df9c87ea7/online-3412473_1920.jpg',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img: '/static/images/vw-golf-2015-fis-572x318.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: 'images/grid-list/camera-813814_640.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: 'images/grid-list/hats-829509_640.jpg',
        title: 'Hats',
        author: 'Hans',
    },{
        img: 'images/grid-list/hats-829509_640.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'images/grid-list/hats-829509_640.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: 'images/grid-list/hats-829509_640.jpg',
        title: 'Hats',
        author: 'Hans',
    },

];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
    <div style={styles.root}>
        <GridList
            cellHeight={180}
            style={styles.gridList}
            cols={4.2}
        >
            <Subheader>December</Subheader>
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                    subtitle={<span>by <b>{tile.author}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                    <img src={tile.img} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default GridListExampleSimple;