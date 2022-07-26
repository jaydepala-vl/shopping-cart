import React from 'react';

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import { Typography } from "@material-ui/core";

// Icons
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    editCartContainer: {
        width: "100%",
        textAlign: "center",
        position: 'static',
        opacity: '1',
        display: 'inline-block',
    },
    cartButtonGrid: {
        display: 'inline-block',
        width: '100%'
    },
    cartEditButton: {
        fontWeight: theme.typography.fontWeightMedium,
        background: theme.palette.warning.dark,
        lineHeight: theme.spacing(5) + 'px',
        borderRadius: theme.spacing(0.25),
        color: theme.palette.common.black,
        textAlign: 'center',
        display: 'inline-block'
    }
}));

const ProductItemCounter = (props) => {

    const classes = useStyles();
    const product = props.item;
    const iconButtonSize = props.iconButtonSize || 'medium';

    return (
        <Grid item xs={12} className={classes.editCartContainer}>
            <Grid item xs={4} className={classes.cartButtonGrid}>
                <IconButton size={iconButtonSize} className={classes.cartEditButton} aria-label="Remove from cart" onClick={(eve) => props.onRemoveItem(props.item)}>
                    <Remove />
                </IconButton>
            </Grid>
            <Grid item xs={4} className={classes.cartButtonGrid}>
                <Typography>
                    { product.count }
                </Typography>
            </Grid>
            <Grid item xs={4} className={classes.cartButtonGrid}>
                <IconButton size={iconButtonSize} className={classes.cartEditButton} aria-label="Add to cart" onClick={(eve) => props.onAddItem(props.item)}>
                    <Add />
                </IconButton>
            </Grid>
        </Grid>);
};
export default ProductItemCounter;