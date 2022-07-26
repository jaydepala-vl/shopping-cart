import React, { useState } from 'react';

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Typography } from "@material-ui/core";

// Component
import ProductItem from './product-item';

import { connect, useDispatch, useSelector } from 'react-redux';
import TYPES from '../reducers/types';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(0),
        paddingLeft: '1px',
        position: 'relative',
        '&::before': {
            display: 'table',
            content: '""'
        }
    },
    childContainer: {
        display: 'inline-block',
        padding: theme.spacing(0),
        position: 'relative'
    }
}));

const ProductContainer = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const items = props.list;

    const addItem = (item) => {
        dispatch({
            type: TYPES.CART.ADD_ITEM,
            payload: item
        });
    }

    const removeItem = (item) => {
        dispatch({
            type: TYPES.CART.REMOVE_ITEM,
            payload: item
        });
    }

    return (<Grid item xs={12} className={classes.container}>
        {
            items.map(item => (
                <Grid key={item.id} item xs={3} className={classes.childContainer}>
                    <ProductItem item={item} onAddItem={addItem} onRemoveItem={removeItem} />
                </Grid>
            ))
        }
    </Grid>);
};
export default ProductContainer;
