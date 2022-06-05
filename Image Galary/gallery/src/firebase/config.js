import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCk0plnjHGbWkCX6sEQhZf9wlgVxiy4nf0",
    authDomain: "image-gallery-dhruvik.firebaseapp.com",
    projectId: "image-gallery-dhruvik",
    storageBucket: "image-gallery-dhruvik.appspot.com",
    messagingSenderId: "246516457566",
    appId: "1:246516457566:web:dae3a5cc98080fc1bb94cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }