import React, { useState } from 'react';

// Link
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from '@material-ui/core';

import { connect, useDispatch, useSelector } from 'react-redux';
import TYPES from '../reducers/types';

// Component
import ProductCategory from '../components/product-category';
import ProductContainer from '../components/product-container';

const useStyles = makeStyles((theme) => ({
    center: {
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
    const state = useSelector(state => state.application);
    const currentTheme = useSelector(state => state.theme);
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
    const productList = [
        {
            id: 1,
            title: 'New iPad Air 128 GB Storage Black 2022',
            price: '₹15,000',
            priceValue: 15000,
            rating: 4.5,
            isHot: false,
            onSale: false,
            img: 'products/33_360x.png'
        },
        {
            id: 2,
            title: 'Smart Watch for iOS Phones Proof',
            price: '₹12,000',
            priceValue: 12000,
            rating: 3,
            isHot: false,
            onSale: false,
            img: 'products/8_f2f2e4bc-9fb7-4af4-81c8-3d8f61130ebb_360x.png'
        },
        {
            id: 3,
            title: 'Apobob Black Shark 3 Gaming Phone',
            price: '₹25,000',
            priceValue: 25000,
            rating: 2,
            isHot: true,
            onSale: false,
            img: 'products/13_66bcfd47-5d78-469f-882f-741fdd7af3e5_360x.png'
        },
        {
            id: 4,
            title: 'Samsung Galaxy International Vs',
            price: '₹9,800',
            priceValue: 9800,
            rating: 1.5,
            isHot: false,
            onSale: '-14%',
            img: 'products/27_360x.png'
        },
        {
            id: 5,
            title: 'Sony Series Stereo Headphones Black',
            price: '₹6,650',
            priceValue: 6650,
            rating: 4.5,
            isHot: false,
            onSale: false   ,
            img: 'products/10_15fab898-c950-4b3f-ae78-325e233e3126_360x.png'
        },
        {
            id: 6,
            title: 'Smart watch Space Aluminum',
            price: '₹11,500',
            priceValue: 11500,
            rating: 4,
            isHot: false,
            onSale: false   ,
            img: 'products/9_50029331-bee5-41eb-b099-a425401a99c6_360x.png'
        },
        {
            id: 7,
            title: 'Studio Mini Smartphone Unlocked',
            price: '₹27,350',
            priceValue: 27350,
            rating: 3,
            isHot: false,
            onSale: false   ,
            img: 'products/14_ca70a3c6-7a49-4ae5-84dd-18d383241644_360x.png'
        },
        {
            id: 8,
            title: 'OnePlus Nord N100 Midnight Frost',
            price: '₹1,350',
            priceValue: 1350,
            rating: 3,
            isHot: false,
            onSale: false   ,
            img: 'products/6-3_34074e3f-1d03-4f16-b4c3-4ca9c6775b8a_360x.png'
        },
    ];
    const [selectedProductCategory, setSelectedProductCategory] = useState(productCategoryList[0]);

    const handleCategoryClick = (eve) => {
        setSelectedProductCategory(eve);
    };

    return (
        <Box className={classes.center}>
            <Grid item xs={12} className={classes.parentGrid}>
                <Grid item xs={3}>
                    <ProductCategory list={productCategoryList} selected={selectedProductCategory} onClickHandle={handleCategoryClick} />
                </Grid>
                <Grid item xs={9}>
                    <ProductContainer list={productList} />
                </Grid>
            </Grid>
        </Box>);
};
export default Home;
