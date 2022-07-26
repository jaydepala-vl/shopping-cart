import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Typography } from "@material-ui/core";

// Component
import CartTable from '../components/cart-table';

// API
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_INFO, CHANGE_THEME } from '../services/api.service';

const useStyles = makeStyles((theme) => ({
}));

const Cart = () => {
    const classes = useStyles();
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();

    useEffect(() => {
    }, []);

    return (<Grid item xs={12}>
        <Grid item xs={9}>
            <CartTable list={cart.list} />
        </Grid>
        <Grid item xs={3}></Grid>
    </Grid>);
};
export default Cart;
