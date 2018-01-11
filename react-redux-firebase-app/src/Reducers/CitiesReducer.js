import { FETCH_CITIES } from '../Actions/CitiesActions';

export default function( state = {}, action) {
    switch(action.type) {
        case FETCH_CITIES: {
            return action.payload
        }
        default: {
            return state;
        }
    }
}