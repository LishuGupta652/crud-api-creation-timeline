const firebase = require('firebase')
const firebaseConfig = {
  apiKey: "AIzaSyA97H79rJ9iDZOa8Imjb-CAZtBJlBoP-nk",
  authDomain: "testapioct31.firebaseapp.com",
  projectId: "testapioct31",
  storageBucket: "testapioct31.appspot.com",
  messagingSenderId: "654270294167",
  appId: "1:654270294167:web:99586560d6d9c1e370e1d2",
  measurementId: "G-H0J53TZNSW"
};
firebase.initializeApp(firebaseConfig); 
const db= firebase.firestore();
const user =  db.collection('Users');
module.exports = Users;