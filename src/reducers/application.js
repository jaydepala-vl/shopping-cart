import TYPES from './types';

// ! Process to create reducer
const initialState = {
	count: 0
};

const application = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.COUNT.UPDATE_COUNT:
      return { ...state, count: action.payload };
    default:
      return { ...state };
  }
};
export default application;
