import firebase from 'firebase';
  require('@firebase/firestore')

  const firebaseConfig = {
    apiKey: "AIzaSyC9lT5uTBhlh8PB9bDZFGItBwsunK7-uBE",
    authDomain: "book-san-89123.firebaseapp.com",
    projectId: "book-san-89123",
    storageBucket: "book-san-89123.appspot.com",
    messagingSenderId: "294189513484",
    appId: "1:294189513484:web:329ea3fecbe0ab84a0e729"
  };
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
  