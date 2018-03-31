import { GET_EPISODES } from '../actions/index';

export default function (state = [], action) {
	switch (action.type) {
		case GET_EPISODES:
			if (action.payload.data) {
				return state.concat(action.payload.data.results);
			}
			return state;
		default:
	}
	return state;
}