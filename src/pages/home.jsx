import React, { useState } from 'react';

// Link
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from '@material-ui/core';

// API
import { GET_PRODUCTS } from '../services/api.service';
import { connect, useDispatch, useSelector } from 'react-redux';
import TYPES from '../reducers/types';

// Component
import ProductCategory from '../components/product-category';
import ProductContainer from '../components/product-container';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    center: {
        minHeight: "calc(100vh - 104px)",
        marginLeft: 'auto',
        marginRight: 'auto',
        color: theme.palette.text.primary,
        background: theme.palette.background.paper,
        padding: theme.spacing(4)
    },
    root: {
        marginLeft: theme.spacing(2)
    },
    parentGrid: {
        display: 'flex'
    }
}));

const Home = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector(state => state.theme);
    const products = useSelector(state => state.products);
    const [productList, setProductList] = useState([]);
    const classes = useStyles(currentTheme);
    const productCategoryList = [
        {
            id: 1,
            type: 'all',
            selected: true,
            displayName: 'All Categories'
        },
        {
            id: 2,
            type: 'laptop',
            selected: false,
            displayName: 'Laptop & Computers'
        },
        {
            id: 3,
            type: 'speaker',
            selected: false,
            displayName: 'Speaker & Audio'
        },
        {
            id: 4,
            type: 'cellphone',
            selected: false,
            displayName: 'Cellphone'
        },
        {
            id: 5,
            type: 'speaker',
            selected: false,
            displayName: 'Video Game'
        },
    ];
    const [selectedProductCategory, setSelectedProductCategory] = useState(productCategoryList[0]);

    const handleCategoryClick = (eve) => {
        setSelectedProductCategory(eve);
    };

    const getProducts = () => {
        dispatch(GET_PRODUCTS());
    };

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        setProductList(products.list);
    }, [products])

    return (
        <Box className={classes.center}>
            <Grid item xs={12} className={classes.parentGrid}>
                <Grid item xs={3}>
                    <ProductCategory list={productCategoryList} selected={selectedProductCategory} onClickHandle={handleCategoryClick} />
                </Grid>
                <Grid item xs={9}>
                    {
                        productList.length > 0 && (
                            <ProductContainer list={productList} />
                        )
                    }
                </Grid>
            </Grid>
        </Box>);
};
export default Home;
