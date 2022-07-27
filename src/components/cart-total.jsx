import React, { useEffect, useState } from "react";

// React Material Libraries
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

// API
import { useSelector } from 'react-redux';

const CssTextField = withStyles((theme) => ({
    root: {
        '& label': {
            color: theme.palette.text.primary,
            borderColor: theme.palette.text.primary
        },
        '& input': {
            color: theme.palette.text.primary
        },
        '& label.Mui-focused': {
            color: theme.palette.text.primary,
            borderColor: theme.palette.text.primary
        },
        '& .MuiInput-underline:after': {
            color: theme.palette.text.primary,
            borderColor: theme.palette.text.primary
        },
        '& .MuiOutlinedInput-root': {
          '& label': {
            color: theme.palette.text.primary,
            borderColor: theme.palette.text.primary
          },
          '& fieldset': {
            color: theme.palette.text.primary,
            borderColor: theme.palette.text.primary
          },
          '&:hover fieldset': {
            color: theme.palette.text.primary,
            borderColor: theme.palette.text.primary
          },
          '&.Mui-focused fieldset': {
            color: theme.palette.text.primary,
            borderColor: theme.palette.text.primary
          },
        }
    }
}))(TextField);

const useStyles = makeStyles((theme) => ({
    cartTotalContainer: {
        border: theme.spacing(0.25) + 'px solid ' + theme.palette.grey['300'],
        padding: theme.spacing(3.8),
        backgroundColor: theme.palette.background.paper,
        position: "relative",
    },
    cartHeader: {
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.text.primary,
        margin: "0 0 " + theme.spacing(3.75) + "px",
        display: "flex",
        justifyContent: "space-between",
    },
    cartTextContainer: {
        fontSize: theme.htmlFontSize,
        marginBottom: theme.spacing(2),
        borderBottom: theme.spacing(0.25) + 'px solid ' + theme.palette.grey['300'],
        paddingBottom: theme.spacing(2),
        display: "flex"
    },
    cartTypo: {
        color: theme.palette.text.primary,
    },
    cartAmount: {
        color: theme.palette.text.primary,
        textAlign: "right"
    },
    couponCode: {
        borderColor: theme.palette.text.primary,
        color: theme.palette.text.primary
    },
    proceedToCheckout: {
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
    cartPopOverTypo: {
      padding: theme.spacing(2),
    },
}));

const CartTotal = (props) => {
    const classes = useStyles();
    const cart = useSelector(state => state.cart);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const openPopover = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'cart-popover' : undefined;
    const [total, setTotal] = useState(0);

    const getTotal = (list) => {
        let total = 0;
        list.map(item => {
            if (!item.count || item.count === undefined) {
                item.count = 1;
            }
            total += item.count * item.priceValue;
            return item;
        })
        return total;
    };
    const updateTotal = (list) => {
        setTotal(getTotal(list));
    }
    const proceedToCheckout = (eve) => {
        openPopover(eve);
    }
    useEffect(( ) => {
        updateTotal(cart.list);
    }, [cart])

    return (<Grid item xs={12} className={classes.cartTotalContainer}>
        <Typography variant="h4" className={classes.cartHeader}>
            Cart
        </Typography>
        <br />
        <Grid item xs={12} className={classes.cartTextContainer}>
            <Grid item xs={6}>
                <Typography variant="subtitle2" className={classes.cartTypo}>
                    Subtotal
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle2" className={classes.cartAmount}>
                    { total }
                </Typography>
            </Grid>
        </Grid>
        <Grid item xs={12} className={classes.cartTextContainer}>
            <Grid item xs={6}>
                <Typography variant="subtitle2" className={classes.cartTypo}>
                    Shipping
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle2" className={classes.cartAmount}>
                    Free
                </Typography>
            </Grid>
        </Grid>
        <Grid item xs={12} className={classes.cartTextContainer}>
            <Grid item xs={6}>
                <Typography variant="subtitle2" className={classes.cartTypo}>
                    Total
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle2" className={classes.cartAmount}>
                    { total }
                </Typography>
            </Grid>
        </Grid>
        <Grid item xs={12} className={classes.cartTextContainer}>
            <Grid item xs={6}>
                <Typography variant="subtitle2" className={classes.cartTypo}>
                    Coupon Code
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <form className={classes.root} noValidate autoComplete="off">
                    <CssTextField className={classes.couponCode} label="Coupon Code" variant="outlined" size="small" />
                </form>
            </Grid>
        </Grid>
        <Grid item xs={12} className={classes.cartTextContainer}>
            <Button variant="contained" className={classes.proceedToCheckout} onClick={(eve) => proceedToCheckout(eve)}>
                Proceed To Checkout
            </Button>
        </Grid>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
            }}
        >
            <Typography className={classes.cartPopOverTypo}>
                Order has been placed.
            </Typography>
        </Popover>
    </Grid>);
};
export default CartTotal;
