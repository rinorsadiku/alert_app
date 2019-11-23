import { FETCH_ALERTS } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_ALERTS:
			return action.payload;
		// case DELETE_SURVEY:
		// 	return state.filter(element => element._id !== action.payload);
		default:
			return state;
	}
};
