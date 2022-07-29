import React from "react";

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    errorContainer: {
        background: theme.palette.background.default,
        display: "block",
        width: "100%",
        overflow: "hidden",
        height: "calc(100vh - 104px)"
    },
    gridContainer: {
        textAlign: "center",
    },
    mainMessage: {
        margin: theme.spacing(4),
        color: theme.palette.text.primary
    }
}));

const ErrorPage = (props) => {
    const classes = useStyles();
    const message = props.message;
    const children = props.children;

    return (
        <div className={classes.errorContainer}>
            <Grid item xs={12} className={classes.gridContainer}>
                <Typography variant="h3" className={classes.mainMessage}>
                    { message }
                </Typography>
            </Grid>
            {
                (children)
            }
        </div>
    );
};
export default ErrorPage;
