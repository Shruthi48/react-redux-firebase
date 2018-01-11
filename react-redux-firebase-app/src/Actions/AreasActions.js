import { firestoreAreas } from '../firebase';
export const FETCH_AREAS = 'fetch_areas';

export function getAreas(stateSelected, citySelected) {
    let payload = [];
    return dispatch => {
        firestoreAreas.where('stateName' ,'==', stateSelected).where('cityName' ,'==', citySelected)
        .get().then( snapshot => {
            snapshot.forEach(doc => {
                payload.push(doc.data().areaName)
                dispatch({
                    type: FETCH_AREAS,
                    payload: payload
                })
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }
}
