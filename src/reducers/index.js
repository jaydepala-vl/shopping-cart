import { combineReducers } from 'redux';

// Reducers
import application from './application';
import userReducer from './userReducer';
import themeReducer from './theme';
import cartReducer from './cart';
import productsReducer from './products';
import wishListReducer from './wishlist';

const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer,
    cart: cartReducer,
    products: productsReducer,
    wishlist: wishListReducer,
    application
});
export default rootReducer;
