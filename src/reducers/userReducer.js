import { FETCH_USER } from '../actions/types';

// Reducer that takes care of the authentication state
export default (state = { name: '' }, action) => {
	switch (action.type) {
		case FETCH_USER:
			return action.payload;

		default:
			return state;
	}
};
