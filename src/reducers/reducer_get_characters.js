import { GET_CHARACTERS } from '../actions/index';

export default function (state = [], action) {
	switch (action.type) {
		case GET_CHARACTERS:
			if (action.payload.data) {
				return [ action.payload.data ];
			}
			return state;

		default:
	}
	return state;
}