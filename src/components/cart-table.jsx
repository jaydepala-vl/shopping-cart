import React from "react";

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

// Icons
import Clear from '@material-ui/icons/Clear';
import { Typography } from "@material-ui/core";

// Components
import ProductItemCounter from './product-item-counter';

import { useDispatch } from 'react-redux';
import TYPES from '../reducers/types';

// API
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    cartTable: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        minWidth: 650
    },
    tableHeader: {
        color: theme.palette.text.primary,
        textTransform: 'capitalize'
    },
    tableTr: {
        position: "relative",
        border: theme.spacing(0.25) + 'px solid ' + theme.palette.grey['300'],
    },
    tableBody: {
        '~ td': {
            color: theme.palette.text.primary,
            padding: theme.spacing(2),
            textAlign: "center"
        }
    },
    removeTd: {
    },
    productTd: {
        color: theme.palette.text.primary,
        maxWidth: theme.spacing(31)
    },
    productTdContainer: {
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center"
    },
    productImageContainer: {
        color: theme.palette.text.primary,
        backgroundSize: "cover",
        marginRight: theme.spacing(2)
    },
    productImage: {
        color: theme.palette.text.primary,
        maxWidth: theme.spacing(9)
    }
}));

const CartTable = (props) => {
    const classes = useStyles();
    const cart = useSelector(state => state.cart);
    const list = props.list;
    const dispatch = useDispatch();

    const increaseCount = (item) => {
        dispatch({
            type: TYPES.CART.ADD_ITEM,
            payload: item
        });
    }

    const removeItem = (item) => {
        item.count = 0;
        decreaseCount(item);
    }

    const decreaseCount = (item) => {
        dispatch({
            type: TYPES.CART.REMOVE_ITEM,
            payload: item
        });
    }

    return (
        <TableContainer >
            <Table className={classes.cartTable} aria-label="simple table">
                <TableHead className={classes.tableTr}>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>
                            <Typography variant="h5" className={classes.tableHeader}>
                                Product
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="h5" className={classes.tableHeader}>
                                Price
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="h5" className={classes.tableHeader}>
                                Quantity
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="h5" className={classes.tableHeader}>
                                Total
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                    {list.map((row) => (
                        <TableRow key={row.title} className={classes.tableTr}>
                            <TableCell className={classes.removeTd} scope="row">
                                <IconButton aria-label="Remove from cart" onClick={() => removeItem(row)}>
                                    <Clear />
                                </IconButton>
                            </TableCell>
                            <TableCell className={classes.productTd} align="right">
                                <Grid item xs={12} className={classes.productTdContainer}>
                                    <Grid item xs={3}>
                                        <Link className={classes.productImageContainer}>
                                            <img className={classes.productImage} src={row.img} alt={row.title} />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2">
                                                { row.title }
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                Color: RED
                                            </Typography>
                                            <Typography variant="body2">
                                                Size: M
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TableCell className={classes.productTd} align="right">{row.price}</TableCell>
                            <TableCell align="right">
                                <ProductItemCounter
                                    iconButtonSize="small"                                
                                    item={row}
                                    onAddItem={increaseCount}
                                    onRemoveItem={decreaseCount}
                                />
                            </TableCell>
                            <TableCell className={classes.productTd} align="right">
                                {(row.count * row.priceValue)} 
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>)
};
export default CartTable;