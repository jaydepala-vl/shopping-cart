import { combineReducers } from 'redux';

// Reducers
import application from './application';
import userReducer from './userReducer';
import themeReducer from './theme';
import cartReducer from './cart';

const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer,
    cart: cartReducer,
    application
});
export default rootReducer;
