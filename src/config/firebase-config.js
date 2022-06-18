import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyAauJx_VwFCKsKtQ16c6vVS8CER5FhZ_18",
    authDomain: "nyght-2163c.firebaseapp.com",
    projectId: "nyght-2163c",
    storageBucket: "nyght-2163c.appspot.com",
    messagingSenderId: "127806209482",
    appId: "1:127806209482:web:29ffd8ca0a33e63911e333",
    measurementId: "G-NFN8DGN6S5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;
