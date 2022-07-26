import React from 'react';

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import { Typography } from "@material-ui/core";

// Icons
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

// Component
import RatingComponent from '../components/rating.component';
import ProductItemCounter from '../components/product-item-counter';

// API
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_INFO, CHANGE_THEME } from '../services/api.service';
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
    const cart = useSelector(state => state.cart);
    const product = props.item;

    const itemInCart = utils.itemExists(cart.list, props.item, 'id');

    return (<div className={classes.listContainer}>
        <div className={classes.listCollection}>
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
