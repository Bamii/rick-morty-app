import { GET_LOCATIONS } from '../actions/index';

export default function (state = [], action) {
	switch (action.type) {
		case GET_LOCATIONS:
			if (action.payload.data) {
				return [action.payload.data];
			}
			return state;
		default:
	}
	return state;
}