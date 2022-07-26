import React, { useState } from 'react';

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import { Typography } from "@material-ui/core";

// Icons
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ViewCarousel from '@material-ui/icons/ViewCarousel';

// Component
import RatingComponent from '../components/rating.component';
import ProductItemCounter from '../components/product-item-counter';

// API
import { useDispatch, useSelector } from 'react-redux';
import TYPES from '../reducers/types';
import utils from '../services/utils.service';

const useStyles = makeStyles((theme) => ({
    listContainer: {
        'position': 'relative'
    },
    listCollection: {
        border: theme.spacing(0.0125) + 'px solid ' + theme.palette.grey['300'],
        marginBottom: theme.spacing(0),
        marginLeft: '-1px',
        flexDirection: 'column',
        display: 'flex',
        padding: theme.spacing(2.5),
    },
    listImageContainer: {
        width: '200px',
        height: '200px',
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        transition: 'all .24s linear 0ms',
        '&::before': {
            position: 'absolute',
            display: 'block',
            left: theme.spacing(0),
            right: theme.spacing(0),
            bottom: theme.spacing(0),
            backgroundColor: theme.palette.background.paper,
            content: '""',
            width: '100%',
            height: theme.spacing(0),
            zIndex: '2',
            transition: 'all .4s ease',
        }
    },
    listImage: {
        paddingTop: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
        transform: 'scale(1)',
        transition: 'opacity .3s,transform 2s cubic-bezier(.25,.46,.45,.94),-webkit-transform 2s cubic-bezier(.25,.46,.45,.94)'
    },
    topLeftContainer: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        display: 'flex',
        position: 'absolute',
        top: theme.spacing(0.5),
        left: theme.spacing(0),
    },
    topLeftHotContainer: {
        display: 'flex',
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        height: theme.spacing(2.5),
        padding: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
        alignItems: 'center',
        position: 'relative',
        width: theme.spacing(6.25),
        textTransform: 'uppercase',
        borderRadius: theme.spacing(0.25),
        justifyContent: 'center',
    },
    topLeftSaleContainer: {},
    hoverContainer: {
        padding: theme.spacing(0),
        position: 'absolute',
        top: theme.spacing(0.25),
        right: theme.spacing(0.125),
        opacity: '0',
        zIndex: 3,
        visibility: 'hidden',
        WebkitTransition: 'opacity .5s ease,visibility .5s ease,-webkit-transform .5s ease',
        transition: 'opacity .5s ease,visibility .5s ease,transform .5s ease,-webkit-transform .5s ease',
    },
    hoverGroup: {
        color: theme.palette.text.primary,
        display: 'grid',
        justifyContent: 'center',
        width: '100%',
        zIndex: '9',
        opacity: '1',
        visibility: 'visible'
    },
    selectedFavourite: {
        color: theme.palette.error.dark
    },
    compareButton: {
        color: theme.palette.text.primary,
    },
    bottomTextContainer: {
        display: 'grid',
        textAlign: 'center'
    },
    productDetailsContainer: {
        display: 'block'
    },
    productTitle: {
        marginBottom: theme.spacing(2),
        minHeight: theme.spacing(5.625)
    },
    productPrice: {
    },
    addToCartContainer: {
        position: 'static',
        opacity: '1',
        display: 'inline-block',
    },
    addToCartButton: {
        fontWeight: theme.typography.fontWeightMedium,
        textTransform: 'uppercase',
        background: theme.palette.warning.dark,
        lineHeight: theme.spacing(5) + 'px',
        borderRadius: theme.spacing(0.25),
        width: '100%',
        color: theme.palette.common.black,
        textAlign: 'center',
        display: 'inline-block',
    }
}));

const ProductItem = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const wishList = useSelector(state => state.wishlist);
    const product = props.item;
    const [hoverButtons, setHoverButtons] = useState(false);

    const itemInCart = utils.itemExists(cart.list, props.item, 'id');
    const itemInWishlist = utils.itemExists(wishList.list, props.item, 'id');

    const addToWishlistItem = (item) => {
        dispatch({
            type: TYPES.WISH_LIST.ADD_WISH_LIST_ITEM,
            payload: item
        });
    }

    const removeFromWishlistItem = (item) => {
        dispatch({
            type: TYPES.WISH_LIST.REMOVE_WISH_LIST_ITEM,
            payload: item
        });
    }

    return (<div className={classes.listContainer}>
        <div className={classes.listCollection} onMouseOver={() => setHoverButtons(true)} onMouseOut={() => setHoverButtons(false)}>
            <Link className={classes.listImageContainer}>
                <div className={classes.listImage} fit="width" style={{backgroundImage: 'url('+ product.img +')'}}>
                </div>
            </Link>
            <div className={classes.topLeftContainer}>
                <Typography className={classes.topLeftSaleContainer}>
                </Typography>
                <Typography className={classes.topLeftSaleContainer}>
                </Typography>
            </div>
            <div className={classes.hoverContainer} style={{opacity: hoverButtons ? 1 : 0}}>
                <div className={classes.hoverGroup}>
                    <Link>
                        <IconButton  aria-label="Compare" >
                            <ViewCarousel className={classes.compareButton} />
                        </IconButton>
                    </Link>
                    <Link>
                        {
                            itemInWishlist < 0 && (
                                <IconButton  aria-label="Add to wishlist" onClick={() => addToWishlistItem(product)}>
                                    <FavoriteBorder className={classes.selectedFavourite} />
                                </IconButton>
                            )
                        }
                        {
                            itemInWishlist > -1 && (
                                <IconButton  aria-label="Remove from wishlist" onClick={() => removeFromWishlistItem(product)}>
                                    <Favorite className={classes.selectedFavourite} />
                                </IconButton>
                            )
                        }
                    </Link>
                </div>
            </div>
            <div className={classes.bottomTextContainer}>
                <Grid item xs={12} className={classes.productDetailsContainer}>
                    <Typography className={classes.productTitle} variant="body2">
                        { product.title }
                    </Typography>
                    <RatingComponent rating={product.rating} />
                    <Typography className={classes.productPrice} variant="subtitle2">
                        { product.price }
                    </Typography>
                </Grid>
                {
                    itemInCart < 0 && (
                        <Grid item xs={12} className={classes.addToCartContainer}>
                            <Button variant="contained" className={classes.addToCartButton} onClick={(eve) => props.onAddItem(props.item)}>
                                Add To Cart
                            </Button>
                        </Grid>
                    )
                }
                {
                    itemInCart > -1 && (
                        <ProductItemCounter item={cart.list[itemInCart]} onAddItem={props.onAddItem} onRemoveItem={props.onRemoveItem}  />
                    )
                }
            </div>
        </div>
    </div>);
};
export default ProductItem;
