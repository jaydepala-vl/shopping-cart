import React from 'react';

// Link
import { makeStyles } from "@material-ui/core/styles";

// Material Components
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import ListDivider from "@material-ui/core/List";
import CardActions from "@material-ui/core/CardActions";
import CardActionButton from "@material-ui/core/CardActions";
import CardPrimaryAction from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

// Material Icons
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";

// API
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_COUNT } from "../services/api.service";

const useStyles = makeStyles((theme) => ({
  center: {
    margin: theme.spacing(1) + "px auto",
    textAlign: "center",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
  },
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  }
}));

const CounterComponent = () => {
    const state = useSelector((state) => state.application);
    const classes = useStyles();
    const dispatch = useDispatch();
    const changeCount = (num) => {
      dispatch(UPDATE_COUNT(num));
    };

    return (
        <Card
            outlined="true"
            className={classes.root}
            style={{ width: "21rem", textAlign: "center", padding: "20px" }}
        >
            <Typography
                use="subtitle1"
                tag="div"
                style={{ padding: "0.5rem 1rem" }}
                theme="textSecondaryOnBackground"
            >
                Current Count: {state.count}.
            </Typography>

            <ListDivider />

            <CardPrimaryAction>
                <div style={{ padding: "1rem" }}>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => changeCount(state.count + 1)}
                        style={{ margin: "0.5rem 1rem" }}
                    >
                        Plus
                        <Add />
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => changeCount(state.count - 1)}
                        style={{ margin: "0.5rem 1rem" }}
                    >
                        Minus
                        <Remove />
                    </Button>
                </div>
            </CardPrimaryAction>

            <ListDivider />

            <CardActions fullbleed="true">
                <CardActionButton
                    label="All Business Headlines"
                    trailingicon="arrow_forward"
                />
            </CardActions>
        </Card>);
};
const mapStateToProps = (state) => ({ count: state.count });
export default connect(mapStateToProps, { UPDATE_COUNT })(CounterComponent);