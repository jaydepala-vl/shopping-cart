import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// Component
import CartTable from '../components/cart-table';
import CartTotal from '../components/cart-total';
import ErroPage from '../components/error-page';

// API
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    cartContainer: {
        background: theme.palette.background.default,
        minHeight: "calc(100vh - 104px)",
        display: "flex"
    },
    buttonContainer: {
        margin: "auto",
        width: "50%",
        padding: theme.spacing(1.25),
    },
    continueShoppingButton: {
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

const Cart = () => {
    const classes = useStyles();
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/', { replace: true });
    };

    useEffect(() => {
    }, []);

    return (<Grid item xs={12} className={classes.cartContainer}>
        {
            (!cart.list || cart.list.length === 0) ? (
                <ErroPage message="Your Cart Is Empty.">
                    <Grid item xs={12}>
                        <Grid item xs={4} className={classes.buttonContainer}>
                            <Button variant="contained" className={classes.continueShoppingButton} onClick={(eve) => goHome()}>
                                Continue Shopping
                            </Button>
                        </Grid>
                    </Grid>
                </ErroPage>
            ) : ''
        }
        {
            cart.list && cart.list.length > 0 && (
                <>
                    <Grid item xs={9}>
                        <CartTable list={cart.list} />
                    </Grid>
                    <Grid item xs={3}>
                        <CartTotal />
                    </Grid>
                </>
            )
        }
    </Grid>);
};
export default Cart;
