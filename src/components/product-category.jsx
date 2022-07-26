import React from "react";

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Typography } from "@material-ui/core";

// Icons
import CheckCircle from '@material-ui/icons/CheckCircle';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';

const useStyles = makeStyles((theme) => ({
    productContainer: {
        marginBottom: theme.spacing(2.75),
        padding: theme.spacing(3),
        border: theme.spacing(0.25) + 'px solid ' + theme.palette.grey['300'],
        borderRadius: theme.spacing(0.5),
    },
    productCategoryHeader: {
        color: theme.palette.text.primary,
        fontSize: theme.spacing(2.25),
        position: 'relative',
        margin: theme.spacing(0),
        fontWeight: theme.typography.fontWeightMedium,
        textTransform: 'capitalize',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&::before': {
            content: '""',
            position: 'absolute',
            left: theme.spacing(0),
            right: theme.spacing(0),
            bottom: '-' + theme.spacing(1.75) + 'px',
            width: theme.spacing(7.5),
            borderBottom: theme.spacing(0.25) + 'px solid ' + theme.palette.warning.main
        }
    },
    productCategoryHeaderContainer: {
        marginBottom: theme.spacing(3.5),
        display: 'block',
        paddingBottom: theme.spacing(1.5)
    },
    productCategoryAccordionContainer: {
        maxHeight: theme.spacing(31.25) + 'px',
        overflow: 'hidden',
    },
    productCategoryAccordionUl: {
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        listStyle: 'none',
    },
    productCategoryAccordionList: {
        position: 'relative'
    },
    productCategoryAccordionAnchorActive: {
        color: theme.palette.warning.main,
    },
    productCategoryAccordionAnchor: {
        color: theme.palette.text.primary,
        fontSize: theme.typography.fontSize,
        fontWeight: theme.typography.fontWeightRegular,
        position: 'relative',
        lineHeight: theme.spacing(4.35) + 'px',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            color: theme.palette.warning.main,
        }
    },
    productCategoryIcon: {
        'color': theme.palette.warning.main
    }
}));

const ProductCategory = (props) => {
    const list = props.list;
    const selected = props.selected;
    const onClickHandle = props.onClickHandle;
    const classes = useStyles();

    return (<div className={classes.productContainer}>
        <div className={classes.productCategoryHeaderContainer}>
            <Typography variant="h5" className={classes.productCategoryHeader}>
                Product Categories
            </Typography>
        </div>
        <div className={classes.productCategoryAccordionContainer}>
            <ul className={classes.productCategoryAccordionUl}>
                {
                    list.map((product) => (<li key={product.id} className={classes.productCategoryAccordionList} onClick={() => onClickHandle(product)}>
                        <Link underline="none" className={classes.productCategoryAccordionAnchor}>
                            {
                                product.id === selected.id ? (<CheckCircle className={classes.productCategoryIcon} />) : (<RadioButtonUnchecked className={classes.productCategoryIcon} />)
                            }
                            { product.displayName }
                        </Link>
                    </li>))
                }
            </ul>
        </div>
    </div>);
};
export default ProductCategory;
