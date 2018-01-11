import { database } from '../firebase';
export const FETCH_POSTS = 'fetch_posts';

export function getPosts() {
    return dispatch => {
        database.on('value', data => {
            dispatch({
                type: FETCH_POSTS,
                payload: data.val()
            })
        })
    }
}

export function savePosts(values) {
  return dispatch => database.push(values);
}

export function deletePost(id) {
    return dispatch => database.child(id).remove();
}