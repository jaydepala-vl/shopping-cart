import React, { useState } from "react";
import clsx from 'clsx';

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

// Components
import FavouriteProductItem from './favourite.product.item';

// Icons
import ArrowForward from '@material-ui/icons/ArrowForward';

// API
import { useSelector } from 'react-redux';
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
    wishListContainer: {
        textAlign: "center",
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(3),
        display: "flex",
        padding: theme.spacing(1.5),
        width: theme.spacing(50),
        height: theme.spacing(8)
    },
    wishListItems: {
        textAlign: "center",
        width: theme.spacing(50),
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
    },
    wishListButtonContainer: {
        position: 'static',
        opacity: '1',
        padding: theme.spacing(2),
        display: 'inline-block',
    },
    wishListButton: {
        fontWeight: theme.typography.fontWeightMedium,
        textTransform: 'uppercase',
        background: theme.palette.warning.dark,
        lineHeight: theme.spacing(5) + 'px',
        borderRadius: theme.spacing(0.25),
        width: '100%',
        color: theme.palette.common.black,
        textAlign: 'center',
        display: 'inline-block',
    },
    wishListText: {
        top: theme.spacing(1.25),
        position: "relative"
    }
}));

const FavouritesSidebar = (props) => {
    const classes = useStyles();
    const anchor = 'right';
    const wishList = useSelector(state => state.wishlist);
    const [openFavouriteSideBar, setOpenFavouriteSideBar] = useState(props.openFavouritesSideBar);
    const list = wishList.list;

    useEffect(() => {
        setOpenFavouriteSideBar(props.openFavouritesSideBar)
    }, [props.openFavouritesSideBar]);

    return (<React.Fragment>
        <Button onClick={props.toggleFavouritesSideBar(true)} color="primary" outlined>Wishlist</Button>
        <Drawer anchor={anchor} open={openFavouriteSideBar} onClose={props.toggleFavouritesSideBar(false)}>
            <Grid item xs={12} className={classes.wishListContainer}>
                <Grid item xs={2}>
                    <IconButton aria-label="Close Favourites" onClick={props.toggleFavouritesSideBar(false)}>
                        <ArrowForward />
                    </IconButton>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h5" className={classes.wishListText}>
                        Wishlist
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.wishListItems}>
                <Box>
                    {
                        list.map(item => (<FavouriteProductItem key={item.id} item={item} />))
                    }
                </Box>
            </Grid>
            <Grid item xs={12} className={classes.wishListButtonContainer}>
                <Button variant="contained" className={classes.wishListButton} onClick={props.toggleFavouritesSideBar(false)}>
                    Add More Items
                </Button>
            </Grid>
        </Drawer>
    </React.Fragment>);
};
export default FavouritesSidebar;