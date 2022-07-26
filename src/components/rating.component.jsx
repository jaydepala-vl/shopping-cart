import React from "react";

// React Material Libraries
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

// Icons
import Star from '@material-ui/icons/Star';
import StarHalf from '@material-ui/icons/StarHalf';
import StarOutline from '@material-ui/icons/StarOutline';

const useStyles = makeStyles((theme) => ({
    productReview: {
        marginBottom: theme.spacing(0.75)
    }
}));

const RatingComponent = (props) => {

    const classes = useStyles();
    const rating = props.rating;

    return (
        <Typography className={classes.productReview}>
        {
            Array.from({length:rating},(v,k)=>k+1).map(rating => (
                <Star key={rating} />
            ))
        }
        {
            rating % 1 !== 0 ? (<StarHalf />) : ''
        }
        {
            Array.from({length:5-rating},(v,k)=>k+1).map(rating => (
                <StarOutline key={rating} />
            ))
        }
        </Typography>
    );
};
export default RatingComponent;
