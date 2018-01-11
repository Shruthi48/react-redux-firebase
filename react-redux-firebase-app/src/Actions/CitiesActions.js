import { firestoreCities } from '../firebase';
export const FETCH_CITIES = 'fetch_cities';

export function getCities(stateSelected) {
    let payload = [];
    return dispatch => {
        firestoreCities.where('stateName' ,'==', stateSelected).get().then( snapshot => {
            snapshot.forEach(doc => {
                payload.push(doc.data().cityName)
                dispatch({
                    type: FETCH_CITIES,
                    payload: payload
                })
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }
}
