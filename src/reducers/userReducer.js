import TYPES from "./types";

const initialState = {
	user: null,
	loading: true
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.USER.GET_USER:
			return { ...state, user: action.payload, loading: false };
		case TYPES.USER.ERROR_USER:
			return { ...state, user: action.payload, loading: false };
		default:
			return state;
	}
};
export default userReducer;
