import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// root reducer
import rootReducer from '../reducers/index';

const initalState = {}

const middleware = [thunk];

export const store = createStore(rootReducer, initalState, applyMiddleware(...middleware));
// export const store = createeStore();


