import { combineReducers } from 'redux';

// Reducers
import application from './application';
import userReducer from './userReducer';
import themeReducer from './theme';
import cartReducer from './cart';
import productsReducer from './products';

const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer,
    cart: cartReducer,
    products: productsReducer,
    application
});
export default rootReducer;
