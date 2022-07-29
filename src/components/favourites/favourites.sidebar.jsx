import React, { useState } from "react";
import clsx from 'clsx';

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// Components
import FavouriteProductItem from './favourite.product.item';

// Icons
import ArrowForward from '@material-ui/icons/ArrowForward';

// API
import { useDispatch } from 'react-redux';
import TYPES from '../../reducers/types';
import { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    wishListContainer: {
        textAlign: "center",
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(3),
        display: "flex",
        padding: theme.spacing(1.5)
    },
    wishListText: {
        top: theme.spacing(1.25),
        position: "relative"
    }
}));

const FavouritesSidebar = (props) => {
    const classes = useStyles();
    const anchor = 'right';
    const [openFavouriteSideBar, setOpenFavouriteSideBar] = useState(props.openFavouritesSideBar);
    const list = props.list;

    const toggleDrawer = (open) => (event) => {
        const targetClasses = event.target && event.target.classList && event.target.classList;
        const isBackDrop = targetClasses && targetClasses[0] && targetClasses[0].indexOf("MuiBackdrop-root") > -1;
        if (isBackDrop || (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))) {
            if (isBackDrop) {
                setOpenFavouriteSideBar( false );
            }
            return;
        }

        setOpenFavouriteSideBar( open );
    };

    useEffect(() => {
        setOpenFavouriteSideBar(props.openFavouritesSideBar)
    }, [props.openFavouritesSideBar]);

    return (<React.Fragment>
        <Button onClick={toggleDrawer(true)} color="primary" outlined>Wishlist</Button>
        <Drawer anchor={anchor} open={openFavouriteSideBar} onClose={toggleDrawer(anchor, false)}>
            <Grid item xs={12} className={classes.wishListContainer}>
                <Grid item xs={2}>
                    <IconButton aria-label="Close Favourites" onClick={toggleDrawer(false)}>
                        <ArrowForward />
                    </IconButton>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h5" className={classes.wishListText}>
                        Wishlist
                    </Typography>
                </Grid>
            </Grid>
            {
                list.map(item => (
                    <FavouriteProductItem key={item.id} item={item} />
                ))
            }
        </Drawer>
    </React.Fragment>);
};
export default FavouritesSidebar;