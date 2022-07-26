import TYPES from './types';

// ! Process to create reducer
const initialState = {
	theme: 'light' // light | dark
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.THEME.SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return { ...state };
  }
};
export default themeReducer;
