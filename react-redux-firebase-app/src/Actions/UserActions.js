import { auth, googleProvider, facebookProvider } from '../firebase';
export const FETCH_USER = 'fetch_user';

export function getUser() {
    return dispatch => {
        auth.onAuthStateChanged(user => {
            dispatch({
                type: FETCH_USER,
                payload: user

            })
        })
    };
}

export function login(email, password) {
    return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
    return dispatch => auth.signOut();
}

export function createAccount(email, password) {
    return dispatch => auth.createUserWithEmailAndPassword(email, password);
}

export function googleLogin() {
  return dispatch => auth.signInWithPopup(googleProvider)
}

export function facebookLogin() {
    return dispatch => auth.signInWithPopup(facebookProvider)
  }