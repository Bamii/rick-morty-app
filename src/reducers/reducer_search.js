import { SEARCH } from "../actions";

export default function (state = [], action) {
    switch(action.type) {
        case SEARCH:
            console.log(action.payload.data);
            return [ action.payload.data ];
    }
    return state;
}