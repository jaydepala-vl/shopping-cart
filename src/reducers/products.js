import TYPES from './types';

// ! Process to create reducer
const initialState = {
	list: [],
  error: null
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.PRODUCTS.GET_PRODUCTS:
      return { ...state, list: action.payload };
    case TYPES.PRODUCTS.ERROR_PRODUCTS:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};
export default productsReducer;
