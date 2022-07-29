import React from "react";

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';

// Icons
import Close from '@material-ui/icons/Close';

// Components

import { useDispatch } from 'react-redux';
import TYPES from '../../reducers/types';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    productListItem: {
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        width: '100%',
        display: 'inline-flex',
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        borderBottom: theme.spacing(0.0125) + 'px solid ' + theme.palette.grey['300'],
    },
    productImageContainer: {
        float: 'left',
        marginRight: theme.spacing(3),
        maxWidth: theme.spacing(10)
    },
    productImageLink: {
        display: 'block',
        overflow: 'hidden'
    },
    productImage: {
        padding: theme.spacing(0.75),
        maxWidth: '100%'
    },
    productDescriptionContainer: {},
    productCancelContainer: {
        height: '100%',
    },
    productCancelButton: {
        top: theme.spacing(3),
        verticalAlign: 'middle',
        textAlign: 'center'
    },
    productItemPrice: {
        fontSize: theme.typography.htmlFontSize,
        fontWeight: theme.typography.fontWeightBold
    }
}));

const FavouriteProductItem = (props) => {

    const classes = useStyles();
    const item = props.item;

    return (
        <Grid item xs={12} className={classes.productListItem}>
            <Grid item xs={4} className={classes.productImageContainer}>
                <Link className={classes.productImageLink}>
                    <img className={classes.productImage} src={item.img} alt={item.title} title={item.title} />
                </Link>
            </Grid>
            <Grid item xs={7} className={classes.productDescriptionContainer}>
                <div>
                    <Typography variant="subtitle2">
                        { item.title }
                    </Typography>
                    <Typography variant="subtitle1" className={classes.productItemPrice}>
                        { item.price }
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={1} className={classes.productCancelContainer}>
                <IconButton aria-label={"Remove " + item.title} className={classes.productCancelButton}>
                    <Close />
                </IconButton>
            </Grid>
        </Grid>
    );
};
export default FavouriteProductItem;

