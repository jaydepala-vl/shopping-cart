import React from 'react';

// Link
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    center: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(4)
    },
    root: {
        marginLeft: theme.spacing(2)
    },
}));

const AboutUs = () => {
    const classes = useStyles();

    return (
        <Box className={classes.center}>
            <Typography className={classes.root}>
                Welcome To About Us
            </Typography>
        </Box>);
};
export default AboutUs;
