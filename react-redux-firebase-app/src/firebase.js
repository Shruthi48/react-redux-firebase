import * as firebase from 'firebase';
import '@firebase/firestore';


var config = {
    apiKey: "AIzaSyAi9zykynMdzz2095I95GI7pJnD2YgkbVE",
    authDomain: "simplemessageboard-6a740.firebaseapp.com",
    databaseURL: "https://simplemessageboard-6a740.firebaseio.com",
    projectId: "simplemessageboard-6a740",
    storageBucket: "",
    messagingSenderId: "1014452962314"
  };
  firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');
export const firestoreStates = firebase.firestore().collection('states');
export const firestoreCities = firebase.firestore().collection('cities');
export const firestoreAreas = firebase.firestore().collection('areas');