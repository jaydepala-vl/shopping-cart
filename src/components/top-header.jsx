import React from "react";

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Menu from "@material-ui/core/Menu";
import ListItem from "@material-ui/core/ListItem";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// Icons
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        flexGrow: 1,
        'padding': theme.spacing(0.5),
        'max-height': theme.spacing(5),
        color: theme.palette.text.primary,
        background: theme.palette.background.paper,
    },
    leftContainer: {
        'max-height': theme.spacing(5),
        'align-items': 'center',
        'width': 'fit-content',
        'position': 'relative'
    },
    rightContainer: {
        'max-height': theme.spacing(5),
    },
    listContainer: {
        'max-height': theme.spacing(5),
        'bottom': theme.spacing(0.5),
        'position': 'relative',
        'padding': '0px!important',
        'display': 'flex',
        'column-gap': theme.spacing(0),
        'justify-content': 'center',
        'text-align': '-webkit-center'
    },
    list: {
        color: theme.palette.text.primary,
        padding: theme.spacing(1),
        cursor: 'pointer'
    },
    listChild: {
        'width': '100%',
    },
    covidFont: {
        'color': theme.palette.warning.dark,
        'font-weight': 500
    },
    headerButton: {
        'width': '100%',
        'bottom': theme.spacing(0.75),
        'position': 'relative',
    },
}));

const TopHeader = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState({
        currency_dropdown: null,
        language_dropdown: null
    });
    const [currency, setCurrency] = React.useState('USD');
    const [language, setLanguage] = React.useState('EN');
    const menuItems = [
        {
            id: 4,
            displayName: 'Home',
            link: '/'
        },
        {
            id: 1,
            displayName: 'My Account',
            link: '/my-account'
        },
        {
            id: 2,
            displayName: 'About Us',
            link: '/about-us'
        },
        {
            id: 3,
            displayName: 'Contact Us',
            link: '/contact-us'
        },
        {
            id: 5,
            displayName: currency,
            name: 'currency_dropdown',
            type: 'dropdown',
            values: [
                { id: '5_1', displayName: 'GBP' },
                { id: '5_2', displayName: 'USD' },
                { id: '5_3', displayName: 'EUR' },
                { id: '5_4', displayName: 'INR' },
                { id: '5_5', displayName: 'CNY' }
            ]
        },
        {
            id: 6,
            displayName: language,
            name: 'language_dropdown',
            type: 'dropdown',
            values: [
                { id: '6_1', displayName: 'EN' },
                { id: '6_2', displayName: 'AR' },
                { id: '6_3', displayName: 'DE' },
                { id: '6_4', displayName: 'HN' }
            ]
        }
    ];

    const headerLinkRedirect = (link) => {
        navigate(link, { replace: true });
    };

    const handleClick = (name, event) => {
        setAnchorEl({
            ...anchorEl,
            [name]: event.currentTarget
        });
    };

    const changeValue = (name, value) => {
        if (name === 'currency_dropdown') {
            setCurrency(value);
        } else if (name === 'language_dropdown') {
            setLanguage(value);
        }
    }

    const handleClose = (name, value) => {
        setAnchorEl({
            ...anchorEl,
            [name]: null
        });
        if (value) {
            changeValue(name, value);
        }
    };

    return (
        <Grid container className={classes.gridContainer}>
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <Grid item xs={6}>
                        <div className={classes.leftContainer}>
                            Due to the <span className={classes.covidFont}>COVID-19</span> epidemic, orders may be processed with a slight delay.
                        </div>
                    </Grid>
                    <Grid item xs={6} className={classes.rightContainer}>
                        <Grid className={classes.listContainer}>
                            {
                                menuItems.map(item => {
                                    if (item.type === 'dropdown') {
                                        return (
                                            <Grid item xs={12} key={item.id}>
                                                <ListItem component='div' className={classes.list}>
                                                    <Button className={classes.headerButton} onClick={($event) => handleClick(item.name, $event)} endIcon={<KeyboardArrowDown />}>
                                                        {item.displayName}
                                                    </Button>
                                                    <Menu
                                                        id={item.name}
                                                        anchorEl={anchorEl[item.name]}
                                                        keepMounted
                                                        open={Boolean(anchorEl[item.name])}
                                                        onClose={() => handleClose(item.name)}>
                                                        {
                                                            item.values.map(dropDownItem => (
                                                                <MenuItem key={dropDownItem.id} onClick={() => handleClose(item.name, dropDownItem.displayName)}>
                                                                    {dropDownItem.displayName}
                                                                </MenuItem>
                                                            ))
                                                        }
                                                    </Menu>
                                                </ListItem>
                                            </Grid>
                                        )
                                    } else {
                                        return (
                                            <Grid item xs={12} key={item.id}>
                                                <ListItem component='div' className={classes.list}>
                                                    <Link underline={window.location.pathname === item.link ? 'always' : 'none'} onClick={() => headerLinkRedirect(item.link)}>
                                                        <Typography variant='subtitle2' align='center' className={classes.listChild}>
                                                            {item.displayName}
                                                        </Typography>
                                                    </Link>
                                                </ListItem>
                                            </Grid>
                                        )
                                    }
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>);
};
export default TopHeader;