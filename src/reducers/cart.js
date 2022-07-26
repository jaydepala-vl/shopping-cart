import TYPES from "./types";

import utils from '../services/utils.service';

// ! Process to create reducer
const initialState = {
  list: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CART.ADD_ITEM:
      if (!action.payload.count || action.payload.count === undefined) {
        action.payload.count = 1;
      }
      if (utils.itemExists(state.list, action.payload, 'id') > -1) {
        return cartReducer(state, {
          ...action,
          type: TYPES.CART.ADD_ITEM_COUNT,
        });
      }
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    case TYPES.CART.REMOVE_ITEM:
		const findItem = utils.itemExists(state.list, action.payload, 'id');
		if (findItem > -1 && state.list[findItem]) {
			if (state.list[findItem] && state.list[findItem].count && state.list[findItem].count > 1) {
				return cartReducer(state, {
				  ...action,
				  type: TYPES.CART.REMOVE_ITEM_COUNT
				});
			}
		}
		state.list.splice(findItem, 1);
      	return { ...state };
	case TYPES.CART.ADD_ITEM_COUNT: 
		const addIndex = state.list.findIndex((item) => action.payload && action.payload.id && item.id === action.payload.id);
		if (state.list[addIndex] && addIndex > -1) {
			if (!state.list[addIndex].count || state.list[addIndex].count === undefined) {
			  state.list[addIndex].count = 1;
			}
			state.list[addIndex].count = state.list[addIndex].count + 1;
		}
		return { ...state };
	case TYPES.CART.REMOVE_ITEM_COUNT: 
		const removeIndex = state.list.findIndex((item) => action.payload && action.payload.id && item.id === action.payload.id);
		if (state.list[removeIndex] && removeIndex > -1) {
			if (!state.list[removeIndex].count || state.list[removeIndex].count === undefined) {
			  state.list[removeIndex].count = 1;
			}
			state.list[removeIndex].count = state.list[removeIndex].count - 1;
		}
		return { ...state };
    case TYPES.CART.UPDATE_ITEM:
		return { ...state, list: action.payload };
    case TYPES.CART.EMPTY_ITEM:
      	return { ...state, list: action.payload };
    default:
      	return { ...state };
  }
};
export default cartReducer;
