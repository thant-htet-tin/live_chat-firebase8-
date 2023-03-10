import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAN9ZX7bCd2szUDRjlYdWLxdDLogFYhj8s",
    authDomain: "live-chat-e6c65.firebaseapp.com",
    projectId: "live-chat-e6c65",
    storageBucket: "live-chat-e6c65.appspot.com",
    messagingSenderId: "327783714344",
    appId: "1:327783714344:web:7ae4d4a7630d13cf686f1d"
};

firebase.initializeApp(firebaseConfig)
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db,timestamp,auth};