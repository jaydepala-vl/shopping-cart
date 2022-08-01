import TYPES from "./types";

import utils from '../services/utils.service';

// ! Process to create reducer
const initialState = {
  list: []
};

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.WISH_LIST.ADD_WISH_LIST_ITEM:
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    case TYPES.WISH_LIST.REMOVE_WISH_LIST_ITEM:
		const findItem = utils.itemExists(state.list, action.payload, 'id');
		state.list.splice(findItem, 1);
      	return { ...state };
    default:
      	return { ...state };
  }
};
export default wishListReducer;
