import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase' 
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXfe-s7MXDEA82XFxcj4WNWj6VLKN3v3A",
    authDomain: "olxweb-c7ba2.firebaseapp.com",
    projectId: "olxweb-c7ba2",
    storageBucket: "olxweb-c7ba2.appspot.com",
    messagingSenderId: "1085303986449",
    appId: "1:1085303986449:web:c3ade94c0cec42f9e194b0",
    measurementId: "G-ZW477DVG1L"
  };

 export default firebase.initializeApp(firebaseConfig)