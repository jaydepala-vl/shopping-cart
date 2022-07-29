import axios from 'axios';

// Types
import TYPES from '../reducers/types';

// Utils
import utils from './utils.service';

const DOMAIN = 'https://jsonplaceholder.typicode.com/';

export const GET_USER_INFO = () => async dispatch => {
    try {
        const res = await axios.get(DOMAIN + 'users/' + (utils.getRandomInt(1, 10)));
        dispatch({
            type: TYPES.USER.GET_USER,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: TYPES.USER.ERROR_USER,
            payload: console.log(e)
        })
    }
};

export const CHANGE_THEME = (theme) => async dispatch => {
    try {
        dispatch({
            type: TYPES.THEME.SET_THEME,
            payload: theme
        });
    } catch (e) {
        dispatch({
            type: TYPES.THEME.SET_THEME,
            payload: console.log(e)
        })
    }
};

export const UPDATE_COUNT = (num) => async dispatch => {
    try {
        dispatch({
            type: TYPES.COUNT.UPDATE_COUNT,
            payload: num
        });
    } catch (e) {
        dispatch({
            type: TYPES.COUNT.ERROR_COUNT,
            payload: console.log(e)
        })
    }
};

export const GET_PRODUCTS = () => async dispatch => {
    try {
        // const res = await axios.get(DOMAIN + 'users/' + (utils.getRandomInt(1, 10)));
        const res = await axios.get('./data/products.json');
        dispatch({
            type: TYPES.PRODUCTS.GET_PRODUCTS,
            payload: res.data && res.data.list
        })
    } catch (e) {
        dispatch({
            type: TYPES.PRODUCTS.ERROR_PRODUCTS,
            payload: console.log(e)
        })
    }
};
