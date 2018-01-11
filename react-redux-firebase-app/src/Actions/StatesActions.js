import { firestoreStates } from '../firebase';
export const FETCH_STATES = 'fetch_states';

export function getStates() {
    let payload = [];
    return dispatch => {
        firestoreStates.get().then( snapshot => {
            snapshot.forEach(doc => {
                payload.push(doc.data().stateName)
                dispatch({
                    type: FETCH_STATES,
                    payload: payload
                })
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }
}
