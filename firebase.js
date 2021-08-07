import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyDIh_LuIENUQk5rWto0UkXkELSebX0Hrrc",
    authDomain: "native-chat-94f04.firebaseapp.com",
    projectId: "native-chat-94f04",
    storageBucket: "native-chat-94f04.appspot.com",
    messagingSenderId: "207362684548",
    appId: "1:207362684548:web:c984d10fb4c2bf06ecf4d1",
    measurementId: "G-7C7F5B31V7"
};
var app;
if (firebase.apps.length === 0) {
app = firebase.initializeApp(firebaseConfig);
} else {
app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };


